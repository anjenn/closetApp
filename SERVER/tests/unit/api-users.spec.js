const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../../server");
const testHelper = require("../testsHelper");


// local storage that will store post ID
if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require('node-localstorage').LocalStorage;
  localStorage = new LocalStorage('./scratch');
}
require("dotenv").config();

// retrieving mock data
const newUser = testHelper.returnUser();


/* Clears local storage beefore all test */
beforeAll(() => {
  return new Promise(resolve => {
    // Asynchronous task
    localStorage.clear()
    resolve();
  });
});

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.DATABASE_URL);
});
/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe("POST /api/SignUp", () => {
  it("should create a new user", async () =>{
    console.log("test 1: should create a new user");
    // console.log(newUser);
    const res = await request(app).post("/api/SignUp").send(newUser);
    expect(res.statusCode).toBe(200);
    expect(res.body.userName).toBe("test_un");
    const tempUserId = res.body.id;
    const tempUserName = res.body.userName;
    localStorage.setItem('tempUserId', tempUserId)
    localStorage.setItem('tempUserName', tempUserName)
    // console.log(localStorage.getItem('tempUserId'));
    // console.log(localStorage.getItem('tempUserName'));
  })
})

describe("GET /api/LogIn", () => {
  it("should retrieve one user info", async () => {
    console.log("test 2: should retrieve one user info");
    const tempUserName = localStorage.getItem('tempUserName')
    // console.log(tempUserName);
    const res = await request(app).get(
      `/api/LogIn?userName=${tempUserName}`
    );
    expect(res.body[0].userName).toBe(`${tempUserName}`);
    expect(res.statusCode).toBe(200);
  });
});

describe("PUT /api/FeedView", () => {
  it("should update a user info with id", async () => {
    console.log("test 3: should update a user info with id");
    const tempUserId = localStorage.getItem('tempUserId')
    const res = await request(app)
      .put(`/api/FeedView?userID=${tempUserId}`)
      .send({
        "userName": "MODIFIED"
      });
      console.log(`new 1: ${JSON.stringify(res.body)}`);
    expect(res.statusCode).toBe(200);
    const expected = 'success';
    expect(res.body.message).toEqual(expect.stringContaining(expected));
  });
});

describe("PUT /api/MyPage/:id", () => {
  it("should update a user info with id", async () => {
    console.log("test 4: should update a user info with id");
    const tempUserId = localStorage.getItem('tempUserId')
    const res = await request(app)
      .put(`/api/MyPage/${tempUserId}`)
      .send({
          "savedPosts": ["non-empty"]
      });
      console.log(`new 2: ${JSON.stringify(res.body)}`);
    // expect(res.statusCode).toBe(200);
    const expected = 'success';
    // expect(res.body.message).toEqual(expect.stringContaining(expected));
  });
});

describe("DELETE /api/MyPage/:id", () => {
  it("should delete a user info with id", async () => {
    console.log("test 5: should delete a user info with id"); 
    const tempUserId = localStorage.getItem('tempUserId')
    const res = await request(app)
      .delete(`/api/MyPage/${tempUserId}`);
    expect(res.statusCode).toBe(200);
  });
});
