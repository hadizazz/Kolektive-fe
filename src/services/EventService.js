import http from "./http-common";

const get = () => {
  return http.get("/event");
};
const getById = (id) => {
  return http.get("/event/" + id);
};

const EventService = {
  get,getById
};

export default EventService;
