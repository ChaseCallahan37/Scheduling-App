import React from "react";
import Case from "case";
import { stringToFunction } from "../../Utils/UtilFunctions";

function ConstraintHandler(props) {
  const { item, update } = props;
  const { constraints } = item;
  const fields = Object.keys(item);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Pulls in select and input elements from form
    const { select, input } = e.target;
    //Create constraint obj to hold stringified function and
    //actual function.
    const constraint = {
      str: `return value.${Case.camel(
        select.value
      )} === "${input.value.toLowerCase()}"`,
      func: null,
    };
    constraint.func = stringToFunction(constraint.str);
    //Updating state below
    const copyConstraints = constraints ? [...constraints] : [];
    copyConstraints.push(constraint);
    update({ name: "constraints", value: copyConstraints });
  };

  return (
    <div>
      <span>Current Constraints: </span>
      {constraints &&
        constraints.map((constraint) => (
          <p key={constraint.str}>{constraint.str}</p>
        ))}
      <form onSubmit={(e) => handleSubmit(e)}>
        <label>New Constraint</label>
        <select name="select">
          <option key="blank"></option>
          {fields &&
            fields.map((field) => {
              if (!(field === "availability" || field === "id")) {
                return <option key={field}>{Case.capital(field)}</option>;
              }
            })}
        </select>
        <input name="input" placeholder="Enter Value" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ConstraintHandler;
