import http from "../http-common";
class postDataMethods {
  createPost(data) { // create a post
    return http.post("/PostEditor", data);
    // data is sent from the client as in a object form
    // which matches the schema
  }
  getAllPosts(tags) { // retrieve all posts
    return http.get(`/FeedView?tag=${tags[0]},${tags[1]},${tags[2]},${tags[3]},${tags[4]}`)
  } // `/FeedView?tag=${tags[0]}&tag=${tags[1]}&tag=${tags[2]}&tag=${tags[3]}&tag=${tags[4]}`
  /* getAll() { // retrieve all posts
    return http.get(`/FeedView`)
  } */
  deletePost(postID) { // delete a post via PostID
    return http.delete(`/PostEditor/${postID}`);
  }
  updatePost(postID, data) { // update a post via PostID
    return http.put(`/PostEditor/${postID}`, data);
  }
  getOnePost(postID) { // load a post via PostID
    return http.get(`/PostEditor/${postID}`);
  }
  getUserPosts(id) { // retrieve all posts in myPage
    return http.get(`/MyPage?userID=${id}`); // SAVED/LIKED
  }

}
export default new postDataMethods();