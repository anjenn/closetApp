import http from "../http-common";
class postDataMethods {
  getAll(tags) { // retrieve all posts
    return http.get(`/FeedView?tag=${tags[0]},${tags[1]},${tags[2]},${tags[3]},${tags[4]}`)
  } // `/FeedView?tag=${tags[0]}&tag=${tags[1]}&tag=${tags[2]}&tag=${tags[3]}&tag=${tags[4]}`
  /* getAll() { // retrieve all posts
    return http.get(`/FeedView`)
  } */
  create(data) { // create a post
    return http.post("/PostEditor", data);
    // data is sent from the client as in a object form
    // which matches the schema
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
  getUserData(id) { // retrieve all posts in myPage
    return http.get(`/MyPage?userID=${id}`); // SAVED/LIKED
  }
  
  //add to liked list, remove from liked list



}
export default new postDataMethods();


// Q1. How can it tell it is a method about post, from post api?
// - does it just search anything from api with the same endpoint, and same crud?
// Q2. Is the function here the same thing as what is defined in post.controller.js?
// Q3. how do i pass parameter here, when that's not how the functions are written in the api?
/*
findByTitle(title) {
    return http.get(`/tutorials?title=${title}`);
  }

How can the endpoint of this be written in post.routes.js?
or is is just sth done in the frontend level, where it filters the collection of data given to the specific endpoint,
*/