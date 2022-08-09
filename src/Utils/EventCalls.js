import axios from "axios";
import getEnum from "./Enums";

// const baseUrl = process.env.REACT_APP_SCHEDULING_API;
const baseUrl = process.env.REACT_APP_LOCAL_API;
export const getEvents = async () => {
  try {
    const response = await axios({
      url: `${baseUrl}/event`,
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

export const createEvent = async (data) => {
  try {
    const response = await axios({
      url: `${baseUrl}/event`,
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
    return await response.data;
  } catch (er) {
    await er;
    console.log(er);
  }
};

export const updateEvent = async (data) => {
  try {
    const response = await axios({
      url: `${baseUrl}/event/${data.id}`,
      method: "PUT",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
    return await response.data;
  } catch (er) {
    await er;
    console.log(er);
  }
};

export const deleteEvent = async (id) => {
  try {
    const response = await axios({
      url: `${baseUrl}/event/${id}`,
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return await response.data;
  } catch (er) {
    await er;
    console.log(er);
  }
};
