import http from "../http-common";

// warning!! when using query parameter in the url there should be no whitespace
// when dealing with 'id' within custom functions in api, stick to '_id'


class postDataMethods {
  createPost(data) { // create a post
    return http.post("/PostEditor", data);
    // data is sent from the client as in a object form
    // which matches the schema
  }
  getAllPosts(tags) { // retrieve all posts
    return http.get(`/FeedView?tag=${tags}`) // no white space
    // return http.get(`/FeedView?tag=${tags[0]},${tags[1]},${tags[2]},${tags[3]},${tags[4]}`)
    // can be multiple tags, but at least one tag should be provided!
  }
  getSavedPosts(postIDs) { // retrieve all posts saved by a user
    return http.get(`/MyPage?postIDs=${postIDs}`) // '_id' instead of 'id' in api
  } // needs to be tested
  
  deletePost(postID) { // delete a post via PostID
    return http.delete(`/PostEditor/${postID}`);
  }
  updatePost(postID, data) { // update a post via PostID
    return http.put(`/PostEditor/${postID}`, data);
  }
  getOnePost(postID) { // load a post via PostID
    return http.get(`/PostEditor/${postID}`);
  }
  getUserPosts(userID) { // retrieve all posts in myPage
    return http.get(`/MyPage/${userID}`); // SAVED/LIKED
  }
}
export default new postDataMethods();