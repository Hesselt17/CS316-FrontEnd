import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "http://vcm-17053.vm.duke.edu:5000/",
  responseType: "json",
});

export default {
  explore: {
    getAllImages() {
      return axiosAPI.get("designs");
    },
  },
  community: {
    getAllUsers() {
      return axiosAPI.get("users");
    },
  },
};
