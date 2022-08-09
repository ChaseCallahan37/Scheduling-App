import React, { useState, useEffect } from "react";
import Calendar from "../common/Calendar";
import CardPopup from "../common/CardPopup";
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
  const [showBlank, setShowBlank] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [newEvent, setNewEvent] = useState(new Event());

  useEffect(() => {
    pullEvents();
  }, []);

  const pullEvents = async () => {
    const pulledEvents = await getEvents();
    setEvents(pulledEvents);
  };
  const checkEditEvent = (pulledEvents) => {
    return pulledEvents ? pulledEvents.filter((c) => c.id !== newEvent.id) : [];
  };
  const handleOnChange = ({ name, value }) => {
    setNewEvent({ ...newEvent, [name]: value });
  };
  const handleEdit = (id) => {
    if (!showBlank) {
      const eventsCopy = [...events];
      const editEvent = eventsCopy.find((event) => event.id === id);
      setNewEvent(editEvent);
      setShowBlank(true);
      setIsEdit(true);
      setEvents(eventsCopy);
    }
  };
  const handleSaveEvent = async () => {
    const data = { ...newEvent };
    let createdEvent;
    if (isEdit) {
      createdEvent = await updateEvent(data);
    } else {
      createdEvent = await createEvent(data);
    }
    setShowBlank(false);
    setIsEdit(false);
    setNewEvent(new Event());
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
    setNewEvent(new Event());
    setShowBlank(false);
  };
  const updateNewClass = (field, content) => {
    const newEvent = { ...newEvent };
    newEvent[field] = content;
    setNewEvent(newEvent);
  };
  return (
    <div>
      <div key={"div1"} className="d-md-flex justify-content-md-end">
        <button className="button" onClick={() => setShowBlank(true)}>
          Add Event
        </button>
      </div>
      <div key={"div2"} className="row row-cols-1 row-cols-md-4 g-0">
        {events &&
          events.map((event) => (
            <Card
              key={event.id}
              item={event}
              onEdit={handleEdit}
              onRemove={handleRemove}
            />
          ))}
        {showBlank && (
          <CardPopup
            open={true}
            item={newEvent}
            update={handleOnChange}
            save={handleSaveEvent}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};

export default EventTable;
