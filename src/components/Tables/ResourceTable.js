import React, { useState, useEffect } from "react";
import Card from "../common/Card";
import Popup from "../common/Popup";
import Resource from "./../../Classes/ResourceClass";
import "./ResourceTable.css";
import {
  getResources,
  createResource,
  updateResource,
  deleteResource,
} from "../../Utils/ResourceCalls";

const ResourceTable = () => {
  const [resources, setResources] = useState(null);
  const [newResource, setNewResource] = useState(null);

  useEffect(() => {
    pullResources();
  }, []);

  const pullResources = async () => {
    const pulledResources = await getResources();
    setResources(pulledResources);
  };

  const handleUpdate = ({ name, value }) => {
    setNewResource({ ...newResource, [name]: value });
  };

  const handleEditClick = (id) => {
    const editResource = {
      ...resources.find((resource) => resource.id === id),
    };
    setNewResource(editResource);
  };

  const handleSaveResource = async () => {
    const finishResource = { ...newResource };
    const isEdit = resources.find((e) => e.id === finishResource.id);
    if (isEdit) {
      await updateResource(finishResource);
    } else {
      await createResource(finishResource);
    }
    await createResource(newResource);
    setNewResource(null);
    pullResources();
  };
  const handleRemove = async (id) => {
    try {
      await deleteResource(id);
      pullResources();
    } catch (er) {
      console.log(er);
    }
  };

  const handleCloseModal = () => {
    setNewResource(null);
  };

  return (
    <div>
      <div className="d-md-flex justify-content-md-end">
        <button
          className="button"
          onClick={() => setNewResource(new Resource())}
        >
          Add Resource
        </button>
      </div>
      <div className="row row-cols-1 row-cols-md-4 g-0">
        {resources &&
          resources.map((resource) => (
            <Card
              key={resource.id}
              onEdit={handleEditClick}
              item={resource}
              onRemove={handleRemove}
            />
          ))}

        {newResource && (
          <Popup
            open={newResource ? true : false}
            item={newResource}
            update={handleUpdate}
            save={handleSaveResource}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </div>
  );
};

export default ResourceTable;
