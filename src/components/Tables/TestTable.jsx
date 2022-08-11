import React, { useState, useEffect } from "react";
import { getEvents } from "./../../Utils/EventCalls";
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

    //Executes immediately
    function stringToFunctionAndExecute(str) {
      let func = new Function(str);
      return func(); // <--- note the parenteces
    }

    //Executes when called
    function stringToFunction(str) {
      let func = new Function("value", str);
      debugger;
      return func;
    }

    // -^-^-^- Functions -^-^-^- (feel free to copy)
    // -v-v-v- Explanations -v-v-v- (run code to read easier)

    // let func_B = stringToFunctionOnly(
    //   `console.log('>>> executes when called ${input}<<<')`
    // );

    // func_B();

    // const constraint = stringToFunctionOnly(
    //   `const myFunc = () => { if() console.log("${input}") }; myFunc()`
    // );

    const constraint = stringToFunctionOnly(`if(value === "${input}"){
        console.log("yes")
    } else {
        console.log("no")
    }`);
  };
  const doesItWork = (value) => {
    console.log(value);
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
