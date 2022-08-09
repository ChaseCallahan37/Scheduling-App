import { v4 as uuidv4 } from "uuid";

class Resource {
  constructor(
    resourceFields = {
      id: uuidv4(),
      name: "",
      availability: [],
      type: "",
      eventSize: "",
    }
  ) {
    const { id, name, availability, type, eventSize } = resourceFields;
    this.id = id;
    this.name = name;
    this.availability = availability;
    this.type = type;
    this.eventSize = eventSize;
  }
}

export default Resource;
