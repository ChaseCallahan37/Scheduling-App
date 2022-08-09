import { v4 as uuidv4 } from "uuid";

class Event {
  constructor(
    courseFields = {
      id: uuidv4(),
      name: "",
      availability: [],
      eventSize: "",
    }
  ) {
    const { id, name, availability, eventSize } = courseFields;
    this.id = id;
    this.name = name;
    this.availability = availability;
    this.eventSize = eventSize;
  }
}

export default Event;
