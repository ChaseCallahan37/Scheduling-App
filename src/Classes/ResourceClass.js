import short from "short-uuid";
const translator = short();

class Resource {
  constructor(
    resourceFields = {
      id: translator.new(),
      name: "",
      availability: [],
      type: "",
      eventSize: "",
      constraints: [],
    }
  ) {
    const { id, name, availability, type, eventSize, constraints } =
      resourceFields;
    this.id = id;
    this.name = name;
    this.type = type;
    this.eventSize = eventSize;
    this.availability = availability;
    this.constraints = constraints;
  }
}

export default Resource;
