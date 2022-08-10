import React, { useState, useEffect } from "react";
import Case from "case";
import "./CheckboxGroup.css";

function CheckboxGroup(props) {
  const { items, update, name, currValues } = props;
  const [selected, setSelected] = useState(currValues || []);

  const handleUpdate = (e) => {
    const { value } = e.target;
    update({ name: name, value: value.toLowerCase() });
    setSelected([...selected, value.toLowerCase()]);
  };

  return (
    <form
      key={name}
      onSubmit={(e) => {
        e.preventDefault();
        debugger;
      }}
    >
      {items &&
        items.map((item) => {
          return (
            <div key={item}>
              <label className="label">{Case.capital(item)}</label>
              <input
                checked={
                  currValues && currValues.includes(item.toLowerCase())
                    ? true
                    : false
                }
                onChange={handleUpdate}
                type="checkbox"
                className="resource-checkbox"
                name={name}
                value={item}
              />
            </div>
          );
        })}
    </form>
  );
}

export default CheckboxGroup;
