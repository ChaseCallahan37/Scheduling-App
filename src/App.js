import React, { useState, useEffect } from "react";
import AppRouter from "./Routes/AppRouter";
import { getResources } from "./Utils/ResourceCalls";
import { getEvents } from "./Utils/EventCalls";
import ResourceContext from "./Contexts/ResourceContext";
import EventContext from "./Contexts/EventContext";

function App(props) {
  const [events, setEvents] = useState([]);
  const [resources, setResources] = useState([]);

  useEffect(() => {
    const pullEvents = async () => {
      const pulledEvents = await getEvents();
      setEvents(pulledEvents);
    };
    const pullResources = async () => {
      const pulledResources = await getResources();
      setResources(pulledResources);
    };
    pullEvents();
    pullResources();
  }, []);
  return (
    <ResourceContext.Provider
      value={{
        resources,
        setResources,
      }}
    >
      <EventContext.Provider
        value={{
          events,
          setEvents,
        }}
      >
        <AppRouter />
      </EventContext.Provider>
    </ResourceContext.Provider>
  );
}

export default App;
