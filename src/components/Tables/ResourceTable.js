import React, { useState, useEffect } from "react";
import Card from "../common/Card";
import Popup from "../common/Popup";
import ShowAvailability from "../common/ShowAvailability";
import Resource from "./../../Classes/ResourceClass";
import TypeSelector from "../common/TypeSelector";
import CheckboxGroup from "../common/CheckboxGroup";
import SelectBox from "../common/SelectBox";
import Calendar from "../common/Calendar";
import "./ResourceTable.css";

const ResourceTable = () => {
  const [resources, setResources] = useState(null);
  const [showBlank, setShowBlank] = useState(false);
  const [newResource, setNewResource] = useState(new Resource());

  useEffect(() => {
    if (resources === null) {
      const pulledResources = [];
      setResources(pulledResources);
    }
  });
  const handleOnChange = ({ name, value }) => {
    const copynewResource = { ...newResource };
    if (name.includes(".")) {
      const path = name.split(".");
      copynewResource[path[0]][path[1]] = value;
    } else {
      copynewResource[name] = value;
      setNewResource(copynewResource);
    }
  };
  const handleSaveResource = () => {
    setNewResource(new Resource());
    setShowBlank(false);
    const pulledResources = [];
    setResources(pulledResources);
  };
  const handleCloseModal = () => {
    setShowBlank(false);
    setNewResource(new Resource());
    const pulledResources = [];
    setResources(pulledResources);
  };
  const handleEditResource = (id) => {
    if (!showBlank) {
      const copyResources = [...resources];
      const res = copyResources.find((resource) => resource.id === id);
      setNewResource(res);
      setShowBlank(true);
    }
  };
  const copynewResource = { ...newResource };
  const { type, name, availability, constraints } = copynewResource;

  return (
    <div>
      <div className="d-md-flex justify-content-md-end">
        <button
          className="button"
          onClick={() => {
            !showBlank && setShowBlank(true);
          }}
        >
          Add Resource
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-0">
        {resources &&
          resources.map((resource) => (
            <Card
              key={resource.id}
              onEdit={handleEditResource}
              item={resource}
            />
          ))}

        {showBlank && (
          <Popup
            open={true}
            item={newResource}
            update={handleOnChange}
            save={handleSaveResource}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};

export default ResourceTable;
