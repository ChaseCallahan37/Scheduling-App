import short from "short-uuid";
const translator = short();

class Event {
  constructor(
    courseFields = {
      id: translator.new(),
      name: "",
      availability: [],
      eventSize: "",
    }
  ) {
    const { id, name, availability, eventSize } = courseFields;
    this.id = id;
    this.name = name;
    this.eventSize = eventSize;
    this.availability = availability;
  }
}

export default Event;
