import React, { useState, useEffect } from "react";
import Calendar from "../common/Calendar";
import Popup from "../common/Popup";
import Event from "../../Classes/EventClass";
import Card from "../common/Card";
import {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../../Utils/EventCalls";

const EventTable = () => {
  const [events, setEvents] = useState(null);
  const [newEvent, setNewEvent] = useState(null);

  useEffect(() => {
    pullEvents();
  }, []);

  const pullEvents = async () => {
    const pulledEvents = await getEvents();
    setEvents(pulledEvents);
  };
  const handleUpdate = ({ name, value }) => {
    setNewEvent({ ...newEvent, [name]: value });
  };
  const handleEditClick = (id) => {
    const editEvent = { ...events.find((event) => event.id === id) };
    setNewEvent(editEvent);
  };
  const handleSaveEvent = async () => {
    const finishEvent = { ...newEvent };
    const isEdit = events.find((e) => e.id === finishEvent.id);
    if (isEdit) {
      await updateEvent(finishEvent);
    } else {
      await createEvent(finishEvent);
    }
    setNewEvent(null);
    pullEvents();
  };
  const handleRemove = async (id) => {
    try {
      await deleteEvent(id);
      pullEvents();
    } catch (er) {
      console.log(er);
    }
  };
  const handleCloseModal = async () => {
    setNewEvent(null);
  };
  return (
    <div>
      <div key={"div1"} className="d-md-flex justify-content-md-end">
        <button className="button" onClick={() => setNewEvent(new Event())}>
          Add Event
        </button>
      </div>
      <div key={"div2"} className="row row-cols-1 row-cols-md-4 g-0">
        {events &&
          events.map((event) => (
            <Card
              key={event.id}
              item={event}
              onEdit={handleEditClick}
              onRemove={handleRemove}
            />
          ))}
        {newEvent && (
          <Popup
            open={newEvent ? true : false}
            item={newEvent}
            update={handleUpdate}
            save={handleSaveEvent}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};

export default EventTable;
