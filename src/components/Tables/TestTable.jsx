import React, { useState, useEffect, useRef, useContext } from "react";
import { getEvents } from "./../../Utils/EventCalls";
import { stringToFunction, functionToString } from "../../Utils/UtilFunctions";
import Card from "./../common/Card";
import EventContext from "../../Contexts/EventContext";
import ResourceContext from "../../Contexts/ResourceContext";

function TestTable(props) {
  const [list, setList] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6",
  ]);

  const { events, setEvents } = useContext(EventContext);
  const { resources } = useContext(ResourceContext);

  const dragItem = useRef();
  const dragOverItem = useRef();

  const dragStart = (e, position) => {
    dragItem.current = position;
  };

  const dragEnter = (e, position) => {
    dragOverItem.current = position;
  };

  const drop = (e) => {
    const copyEvents = [...events];
    const dragItemContent = copyEvents[dragItem.current];
    copyEvents.splice(dragItem.current, 1);
    copyEvents.splice(dragOverItem.current, 0, dragItemContent);
    dragItem.current = null;
    dragOverItem.current = null;
    setEvents(copyEvents);
  };

  return (
    <div>
      {events &&
        events.map((event, index) => (
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
            {event.name}
          </div>
        ))}
      <br></br>
      <br></br>
      {resources &&
        resources.map((resource, index) => (
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
            {resource.name}
          </div>
        ))}
    </div>
  );
}

export default TestTable;
