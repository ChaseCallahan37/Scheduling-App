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
  return (
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
  );
};

export default AppRouter;
