import http from "../http-common";
class postDataMethods {
  create(data) { // create a post
    return http.post("/PostEditor", data);
  }
  getAll() { // retrieve all posts
    return http.get("/FeedView");
  }
  get(postID) { // get a post via PostID
    return http.get(`/PostEditor/${postID}`);
  }
  // not in routes.js
  getByUserID(userID) { // get all posts by user via UserID
    return http.get(`/MyPage?userID=${userID}`); // MY POSTS 
  }
  // not in routes.js
  getUserData() { // find a post via postID (supposed to be used massively in a function)
    return http.get(`/MyPage`); // SAVED/LIKED
  }
  // - not in routes.js
  findByTag(tag) { // get a post via tag
    return http.get(`/FeedView?tag=${tag}`);
  }
  delete(postID) { // delete a post via PostID
    return http.delete(`/PostEditor/${postID}`);
  }
  update(postID, data) { // update a post via PostID
    return http.put(`/PostEditor/${postID}`, data);
  }
}
export default new postDataMethods();
