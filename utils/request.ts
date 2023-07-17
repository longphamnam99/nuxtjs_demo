import axios from "axios";

const service = axios.create({
  baseURL: "/api",
  timeout: 100000,
});

service.interceptors.request.use(
  (config) => {
    config.headers["Content-Type"] =
      config.headers["Content-Type"] || "application/json";
    return config;
  },
  (error) => {
    console.log(error);
  }
);
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    return res;
  },
  (error) => {
    const err = {
      code: 406,
      message: "not ok",
      data: error,
    };
  }
);
export default service;
