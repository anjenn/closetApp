import http from "../http-common";
class postDataMethods {
  getAll() { // retrieve all posts
    return http.get("/FeedView");
  }
  create(data) { // create a post
    return http.post("/PostEditor", data);
  }
  delete(postID) { // delete a post via PostID
    return http.delete(`/PostEditor/${postID}`);
  }
  update(postID, data) { // update a post via PostID
    return http.put(`/PostEditor/${postID}`, data);
  }
  get(postID) { // load a post via PostID
    return http.get(`/PostEditor/${postID}`);
  }
  getUserData() { // retrieve all posts in myPage
    return http.get(`/MyPage`); // SAVED/LIKED
  }
  // - not in routes.js
  findByTag(tag) { // get a post via tag
    return http.get(`/FeedView?tag=${tag}`);
  }

  
}
export default new postDataMethods();
