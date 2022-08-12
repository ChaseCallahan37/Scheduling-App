import { v4 as uuidv4 } from "uuid";
import Case from "case";
import { defaultStyles } from "react-modal";

export const getRandomId = () => {
  return uuidv4();
};

export const timeToInt = (time) => {
  const splitTime = time.split(":");
  return parseInt(splitTime[0]) + parseInt(splitTime[1]);
};

export const wrapInDivAndLabel = (field, element) => {
  return (
    <div key={field}>
      <label className="label">{Case.capital(field)}</label>
      {element}
      <hr></hr>
    </div>
  );
};

export const isInstructorField = (field) => {
  switch (field.toLowerCase()) {
    case "teachingstyle":
      return true;
      break;
    case "classsize":
      return true;
      break;
    default:
      return false;
      break;
  }
};

export const checkIsPromise = (obj) => {
  if (typeof obj === "object" && typeof obj.then === "function") {
    return true;
  } else {
    return false;
  }
};

export const stringToFunction = (str) => {
  return new Function("value", str);
};

export const parseConstraints = (objects) => {
  if (objects) {
    objects.forEach((obj) => {
      if (!obj.constraints) {
        obj.constraints = [];
      } else {
        obj.constraints = JSON.parse(obj.constraints);
        obj.constraints.forEach(
          (constraint) => (constraint.func = stringToFunction(constraint.str))
        );
      }
    });
    return objects;
  }
};
