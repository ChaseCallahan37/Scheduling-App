import React from "react";
import Case from "case";

function List(props) {
  const { items, name, path } = props;

  const getSubItem = (item) => {
    let temp = { ...item };
    path.forEach((p) => {
      temp = temp[p];
    });
    return temp;
  };

  return (
    <div key={name}>
      <ul>
        {items &&
          items.map((item) => {
            if (path) {
              const subItem = getSubItem(item);
              return <li key={subItem}>{Case.capital(subItem)}</li>;
            }
            return <li key={item}>{Case.capital(item)}</li>;
          })}
      </ul>
    </div>
  );
}

export default List;
