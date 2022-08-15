import axios from "axios";
import getEnum from "./Enums";
import { parseConstraints } from "./UtilFunctions";

const baseUrl = process.env.REACT_APP_SCHEDULING_API;
// const baseUrl = process.env.REACT_APP_LOCAL_API;
export const getEvents = async () => {
  try {
    const response = await axios({
      url: `${baseUrl}/events`,
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    response.data = parseConstraints(response.data);
    return response.data;
  } catch (er) {
    await er;
    console.log(er);
  }
};

export const createEvent = async (data) => {
  try {
    const response = await axios({
      url: `${baseUrl}/events`,
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
      url: `${baseUrl}/events/${data.id}`,
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
      url: `${baseUrl}/events/${id}`,
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

export const getEventSizes = async () => {
  try {
    const response = await axios({
      url: `${baseUrl}/events/sizes`,
      method: "GET",
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
