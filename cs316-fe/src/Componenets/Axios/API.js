import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "http://vcm-17053.vm.duke.edu:5000/",
  responseType: "json",
});

export default {
  users: {
    getUserInfo(userEmail) {
      return axiosAPI.get(`users/${userEmail}`);
    },
    getAllUsers() {
      return axiosAPI.get("users");
    },
    getUserUploads(userID) {
      return axiosAPI.get(`designs/${userID}`);
    },
  },
  explore: {
    getAllImages() {
      return axiosAPI.get("designs");
    },
  },
  likes: {
    getUserLikes(userID) {
      return axiosAPI.get(`favorites/users/${userID}`);
    },
  },
};
