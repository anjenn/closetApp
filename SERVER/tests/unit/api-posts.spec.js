// const mongoose = require("mongoose");
// const request = require("supertest");
// const app = require("../../server");
// const testHelper = require("../testsHelper");
// // local storage that will store post ID
// if (typeof localStorage === "undefined" || localStorage === null) {
//   var LocalStorage = require('node-localstorage').LocalStorage;
//   localStorage = new LocalStorage('./scratch');
// }
// require("dotenv").config();

// // retrieving mock data
// const tags = testHelper.returnTags();
// const newPost = testHelper.returnPost();


// /* Clears local storage beefore all test */
// beforeAll(() => {
//   return new Promise(resolve => {
//     // Asynchronous task
//     localStorage.clear()
//     resolve();
//   });
// });

// /* Connecting to the database before each test. */
// beforeEach(async () => {
//   await mongoose.connect(process.env.DATABASE_URL);
// });
// /* Closing database connection after each test. */
// afterEach(async () => {
//   await mongoose.connection.close();
// });

// describe("GET /api/FeedView", () => {
//   it("should retrieve all posts", async () => {
//     console.log("test 1: should retrieve all posts");
//     const res = await request(app).get(`/api/FeedView?tags=${tags}`);
//     //console.log(tags);
//     console.log(res.body);
//     expect(res.statusCode).toBe(200);
//     expect(res.body.length).toBeGreaterThan(0);
//   });
// });

// describe("POST /api/PostEditor", () => {
//   it("should create a new post", async () =>{
//     console.log("test 2: should create a new post");
//     //console.log(newPost);
//     const res = await request(app).post("/api/PostEditor").send(newPost);
//     expect(res.statusCode).toBe(200);
//     expect(res.body.userID).toBe("test_user");
//     const tempPostId = res.body.id;
//     localStorage.setItem('tempPostId', tempPostId)
//     console.log(localStorage.getItem('tempPostId'));
//   })
// })


// describe("GET /api/PostEditor/:id", () => {
//   it("should retrieve a single post with id", async () => {
//     console.log("test 3: should retrieve a single post with id");
//     const tempPostId = localStorage.getItem('tempPostId')
//     const res = await request(app).get(
//       `/api/PostEditor/${tempPostId}`
//     );
//     expect(res.statusCode).toBe(200);
//     //console.log(res.body.userID);
//     expect(res.body.userID).toBe("test_user");
//   });
// });


// describe("PUT /api/PostEditor/:id", () => {
//   it("should update a post with id", async () => {
//     console.log("test 4: should update a post with id");
//     const tempPostId = localStorage.getItem('tempPostId')
//     const res = await request(app)
//       .put(`/api/PostEditor/${tempPostId}`)
//       .send({
//         "userID": "MODIFIED"
//       });
//       //console.log(`new id: ${JSON.stringify(res.body)}`);
//     expect(res.statusCode).toBe(200);
//     //console.log(res.body);
//     expect(res.body.message).toBe("Updated successfully.");
//   });
// });

// describe("DELETE /api/PostEditor/:id", () => {
//   it("should delete a post with id", async () => {
//     console.log("test: should delete a post with id"); 
//     const tempPostId = localStorage.getItem('tempPostId')
//     const res = await request(app)
//       .delete(`/api/PostEditor/${tempPostId}`);
//     expect(res.statusCode).toBe(200);
//   });
// });
