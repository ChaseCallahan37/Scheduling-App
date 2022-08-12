//This function is triggered when onSubmit is
//called on a form element
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
  //stringToFunction is below
  constraint.func = stringToFunction(constraint.str);
  //Updating state below
  const copyConstraints = constraints ? [...constraints] : [];
  copyConstraints.push(constraint);
  update({ name: "constraints", value: copyConstraints });
};

//Not sure about the security of this function
export const stringToFunction = (str) => {
  return new Function("value", str);
};

//Used when upon fetching from backend to convert stringified function
//To actual function
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

// Example object that is pulled in from back end and
// has str field parsed into the func field
//   {
// constraints: Array(2)
//          0: {str: 'return value.name === "jeff"', func: ƒ}
//          1: {str: 'return value.eventSize === "small"', func: ƒ}
//          length: 2
//   }

//Actual code stored in MySql Db as TINYTEXT
// [{"str":"return value.name === \"jeff\""},{"str":"return value.eventSize === \"small\""}]
