import React, { useState, useEffect } from "react";
import Case from "case";
import _ from "lodash";
import Calendar from "./Calendar";
import {
  isInstructorField,
  wrapInDivAndLabel,
} from "../../Utils/UtilFunctions";
import SelectBox from "./SelectBox";
import getEnum from "./../../Utils/Enums";
import TypeSelector from "./TypeSelector";
import RangeSelect from "./RangeSelect";
import CheckboxGroup from "./CheckboxGroup";
import { getEvents, getEventSizes } from "../../Utils/EventCalls";
import { getResourceTypes } from "../../Utils/ResourceCalls";

const Form = (props) => {
  const { item, update } = props;

  const [fields, setFields] = useState(Object.keys(item));
  const [resourceTypes, setResourceTypes] = useState([]);
  const [eventSizes, setEventSizes] = useState([]);

  useEffect(() => {
    const pullResourceTypes = async () => {
      const pulledResourceTypes = await getResourceTypes();
      setResourceTypes(pulledResourceTypes);
    };
    const pullEventSizes = async () => {
      const pulledEventSizes = await getEventSizes();
      setEventSizes(pulledEventSizes);
    };
    pullResourceTypes();
    pullEventSizes();
  }, []);

  const renderElement = (field) => {
    switch (field) {
      case "name":
        return (
          <input
            value={item[field]}
            onChange={(e) => update({ value: e.target.value, name: field })}
            className="global-input"
          />
        );
        break;

      case "type":
        return (
          <TypeSelector items={resourceTypes} name={field} update={update} />
        );
        break;

      case "eventSize":
        return (
          <CheckboxGroup
            items={eventSizes}
            name={field}
            update={update}
            currValues={item[field]}
          />
        );
        break;

      case "availability":
        return (
          <Calendar update={update} name={field} availability={item[field]} />
        );
        break;

      default:
        return null;
        break;
    }
  };
  return (
    <div>
      {fields &&
        fields.map(
          (field) =>
            field !== "id" && (
              <div key={field}>
                <label className="label">{Case.capital(field)}</label>
                {renderElement(field)}
              </div>
            )
        )}
    </div>
  );
};

export default Form;
