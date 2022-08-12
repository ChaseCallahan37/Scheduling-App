import React, { useState, useEffect } from "react";
import { getEvents } from "./../../Utils/EventCalls";
import { stringToFunction, functionToString } from "../../Utils/UtilFunctions";
import Card from "./../common/Card";
import JSONfn from "json-fn";

function TestTable(props) {
  const [events, setEvents] = useState([]);
  const [window, setWindow] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    pullEvents();
  }, []);

  const pullEvents = async () => {
    const pulledEvents = await getEvents();
    setEvents(pulledEvents);
  };

  return (
    <div>
      {window && <ConstraintWindow id={selectedId} />}
      {events &&
        events.map((event) => {
          return (
            <div>
              <Card
                key={event.id}
                item={event}
                onEdit={() => {}}
                onRemove={() => {}}
              />
              <button
                onClick={() => {
                  setWindow(!window);
                  setSelectedId(event.id);
                }}
              >
                Add constraint {"("}
                {event.name}
                {")"}
              </button>
            </div>
          );
        })}
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
