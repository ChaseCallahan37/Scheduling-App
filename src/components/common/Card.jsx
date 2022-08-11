import React, { useState } from "react";
import Case from "case";
import Calendar from "./Calendar";
import LabelWithCount from "./RangeSelect";
import { getRandomId } from "../../Utils/UtilFunctions";
import List from "./List";

const Card = (props) => {
  const { item, onEdit, onRemove } = props;

  const [showPopup, setShowPopup] = useState(false);
  const [fields, setFields] = useState(Object.keys(item));

  const styles = {
    parentDiv: "card",
    header: "card-header text-white p-3 border text-center fs-3 ",
    body: "card-body text-wrap",
    footer: "card-footer",
  };

  const askToDelete = () => {
    alert("Deleting now");
    onRemove(item.id);
  };

  const createElement = (field) => {
    switch (field) {
      case "availability":
        return <Calendar availability={item.availability} />;
        break;

      case "type":
        return <span>{Case.capital(item[field])}</span>;
        break;

      case "eventSize":
        return <span>{Case.capital(item[field])}</span>;

      default:
        return null;
        break;
    }
  };
  return (
    <div className={styles.parentDiv}>
      <div key="header" className={styles.header}>
        {item && <label>{item.name}</label>}
      </div>
      <div key="body" className={styles.body}>
        {item &&
          fields.map(
            (field) =>
              field !== "id" &&
              field !== "name" && (
                <div key={field}>
                  <label className="label">{Case.capital(field)}</label>
                  {createElement(field)}
                </div>
              )
          )}
      </div>
      <div key="footer" className={styles.footer}>
        <button className="button" onClick={() => onEdit(item.id)}>
          Edit
        </button>
        {onRemove && (
          <button className="button" onClick={askToDelete}>
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default Card;
