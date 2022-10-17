import http from "../http-common";
class postDataMethods {
  getAll() {
    return http.get("/FeedView");
  } // get all posts
  create(data) {
    return http.post("/PostEditor", data);
  } // create a post
  delete(postID) {
    return http.delete(`/PostEditor/${postID}`);
  } // delete a post via PostID
  get(postID) {
    return http.get(`/PostEditor/${postID}`);
  } // get a post via PostID
  update(postID, data) {
    return http.put(`/PostEditor/${postID}`, data);
  } // update a post via PostID

  // idk if this works (search multiple items())
  getAllByID(userID) { // MY POSTS
    return http.get("/MyPage?userID=${userID}");
  } // get all posts by user via UserID
  // idk if this works (duplicate function)
  get(postID) { // SAVED/LIKED
    return http.get(`/MyPage/${postID}`);
  } // find a post via postID (supposed to be used massively in a function)
  // idk if this works (search multiple items())
  findByTag(tag) {
    return http.get(`/FeedView?tag=${tag}`);
  }
}
export default new postDataMethods();
