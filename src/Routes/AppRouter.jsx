import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EventTable from "../components/Tables/EventTable";
import Header from "../components/common/Header";
import HomeTable from "../components/Tables/HomeTable";
import ResourceTable from "../components/Tables/ResourceTable";
import NotFoundTable from "../components/Tables/NotFoundTable";
import TestTable from "./../components/Tables/TestTable";
import { getEvents } from "../Utils/EventCalls";
import { getResources } from "../Utils/ResourceCalls";
import EventContext from "../Contexts/EventContext";
import ResourceContext from "../Contexts/ResourceContext";

const AppRouter = () => {
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
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<HomeTable />} exact="true" />
            <Route path="/courses" element={<EventTable />} />
            <Route path="/resources" element={<ResourceTable />}></Route>
            <Route path="/test" element={<TestTable />} />
            <Route path="*" element={<NotFoundTable />}></Route>
          </Routes>
        </BrowserRouter>
      </EventContext.Provider>
    </ResourceContext.Provider>
  );
};

export default AppRouter;
