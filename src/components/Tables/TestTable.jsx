import React, { useState, useEffect, useRef, useContext } from "react";
import { getEvents } from "./../../Utils/EventCalls";
import { stringToFunction, functionToString } from "../../Utils/UtilFunctions";
import Card from "./../common/Card";
import EventContext from "../../Contexts/EventContext";
import ResourceContext from "../../Contexts/ResourceContext";

function TestTable(props) {
  const [events, setEvents] = useState([]);
  const [window, setWindow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [list, setList] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ]);

  const eventContext = useContext(EventContext);
  const resourceContext = useContext(ResourceContext);
  console.log("Events: ", eventContext.events);
  console.log("Resources: ", resourceContext.resources);

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
    console.log("Drag start", e.target.innerHTML);
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
    console.log("drag enter", e.target.innerHTML);
  };

  const drop = (e) => {
    const copyListItems = [...list];
    const dragItemContent = copyListItems[dragItem.current];
    copyListItems.splice(dragItem.current, 1);
    copyListItems.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setList(copyListItems);
  };

  useEffect(() => {
    pullEvents();
  }, []);

  const pullEvents = async () => {
    const pulledEvents = await getEvents();
    setEvents(pulledEvents);
  };

  return (
    <div>
      {list &&
        list.map((item, index) => (
          <div
            style={{
              backgroundColor: "lightblue",
              margin: "20px 25%",
              textAlign: "center",
              fontSize: "40px",
            }}
            onDragStart={(e) => dragStart(e, index)}
            onDragEnter={(e) => dragEnter(e, index)}
            onDragEnd={drop}
            key={index}
            draggable
          >
            {item}
          </div>
        ))}
      {}
    </div>
  );
}

const ConstraintWindow = (props) => {
  const { id } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    const { value: input, name } = e.target[id];

    const constraint = {
      str: `if(value === "${input}"){
          console.log("Same name")
        } else {
          console.log("Not same name")
        }`,
      func: null,
    };
    constraint.func = stringToFunction(constraint.str);
    doesWork(constraint);
  };
  const doesWork = (obj) => {
    console.log(obj.str);
    console.log(obj.func);
    obj.func("JON");
  };
  return (
    <form onSubmit={handleSubmit}>
      <p>Id: {id}</p>
      <label name="label">Name must be:</label>
      <input name={id} />
      <button>submit</button>
    </form>
  );
};

export default TestTable;
