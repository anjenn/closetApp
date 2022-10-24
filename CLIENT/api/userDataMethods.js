import http from "../http-common";
class userDataMethods {
  createUser(data) { // create a post
    return http.post("/SignUp", data);
  }
  getUserInfo(userID) { // retrieve user Info (and save to local storage)
    return http.get(`/LogIn?userID=${userID}`)
  }
  deleteUserInfo(userID) { // delete a user via user ID
    return http.delete(`/MyPage/${userID}`);
  }
  updateUserInfo(userID, data) { // update user Info (and save to local storage)
    // supposed to work as 'saved post list' updater
    return http.put(`/FeedView?userID=${userID}`, data);
  }
  updateUserInfo2(userID, data) { // update user Info
    // supposed to work as 'saved post list' updater
    return http.put(`/MyPage/${userID}`, data);
  }
}
export default new userDataMethods();