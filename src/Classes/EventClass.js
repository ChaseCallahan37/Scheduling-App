import short from "short-uuid";
const translator = short();

class Event {
  constructor(
    courseFields = {
      id: translator.new(),
      name: "",
      availability: [],
      eventSize: "",
      constraints: [],
    }
  ) {
    const { id, name, availability, eventSize, constraints } = courseFields;
    this.id = id;
    this.name = name;
    this.eventSize = eventSize;
    this.availability = availability;
    this.constraints = constraints;
  }
}

export default Event;
