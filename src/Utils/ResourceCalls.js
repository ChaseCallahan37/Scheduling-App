import axios from "axios";

const baseUrl = process.env.REACT_APP_SCHEDULING_API;
// const baseUrl = process.env.REACT_APP_LOCAL_API;

export const getResources = async () => {
  try {
    const response = await axios({
      url: `${baseUrl}/resources`,
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (er) {
    await er;
    console.log(er);
  }
};

export const createResource = async (data) => {
  try {
    const response = await axios({
      url: `${baseUrl}/resources`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
    return response.data;
  } catch (er) {
    await er;
    console.log(er);
  }
};

export const updateResource = async (data) => {
  try {
    const response = await axios({
      url: `${baseUrl}/resources/${data.id}`,
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
    return response.data;
  } catch (er) {
    await er;
    console.log(er);
  }
};

export const deleteResource = async (id) => {
  try {
    const response = await axios({
      url: `${baseUrl}/resources/${id}`,
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (er) {
    await er;
    console.log(er);
  }
};

export const getResourceTypes = async () => {
  try {
    const response = await axios({
      url: `${baseUrl}/resources/types`,
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (er) {
    await er;
    console.log(er);
  }
};
