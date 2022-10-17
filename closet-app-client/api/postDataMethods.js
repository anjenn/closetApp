import http from "../http-common";
class postDataMethods {
  getAll() {
    return http.get("/FeedView");
  } // get all posts
  getAll() {
    return http.get("/MyPage");
  } // get all posts by userId
  getAll(userID) {
    return http.get("/MyPage?userID=${userID}");
  } // get all posts user liked
  get(id) {
    return http.get(`/FeedView/${id}`);
  } // get posts by id
  get(id) {
    return http.get(`/MyPage/${id}`);
  }
  create(data) {
    return http.post("/FeedView", data);
  }
  update(id, data) {
    return http.put(`/FeedView/${id}`, data);
  }
  delete(id) {
    return http.delete(`/FeedView/${id}`);
  }
  deleteAll() {
    return http.delete(`/FeedView`);
  }
  findByTitle(title) {
    return http.get(`/FeedView?title=${title}`);
  }
}
export default new postDataMethods();
