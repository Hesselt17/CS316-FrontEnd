import axios from "axios";

const axiosAPI = axios.create({
  //baseURL: "http://vcm-17053.vm.duke.edu:5000/", production
  baseURL: "https://design-duke.herokuapp.com/", //deployment
  timeout: 1000,
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
    makeNewUser(email, name, netid, password) {
      return axiosAPI.post("users", {
        avatar: "",
        bio: "",
        email: email,
        name: name,
        netid: netid,
        password: password,
        score: 0,
        wherelive: "",
      });
    },
  },
  explore: {
    getAllImages() {
      return axiosAPI.get("designs");
    },
    getExploreImages() {
      return axiosAPI.get("explore");
    },
  },
  likes: {
    getUserLikes(userID) {
      return axiosAPI.get(`likes/users/${userID}`);
    },
    getNumDesignLikes(dID) {
      return axiosAPI.get(`likes/designs/${dID}`);
    },
    likePost(dID, userID) {
      return axiosAPI.post(`likes`, {
        designid: dID,
        uid: userID,
      });
    },
    UnlikePost(dID, userID) {
      return axiosAPI.delete(`likes/${dID}/${userID}`);
    },
  },
  designs: {
    getUserUploads(userID) {
      return axiosAPI.get(`designs/${userID}`);
    },
  },
  reviews: {
    getDesignReviews(dID) {
      return axiosAPI.get(`reviews/${dID}`);
    },
    postDesignReview(dID, userID, comment, rating) {
      return axiosAPI.post(`reviews`, {
        designid: dID,
        uid: userID,
        comment: comment,
        rating: rating,
      });
    },
  },
};
