import React from "react";
import Case from "case";
import "./TypeSelector.css";

function TypeSelector(props) {
  const { update, name, items } = props;
  const taStyle = {
    paddingLeft: "30px",
    paddingRight: "30px",
  };
  return (
    <div className="btn-group" role="group" aria-label="Basic example">
      {items &&
        items.map((item) => (
          <button
            key={item}
            onClick={(e) => update({ name, value: e.target.innerText })}
            type="button"
            style={item === "TA" ? taStyle : null}
            className="btn btn-secondary"
            id="type-select-buttons"
          >
            {Case.capital(item)}
          </button>
        ))}
    </div>
  );
}

export default TypeSelector;
