const mongoose = require("mongoose");
const request = require("supertest");
const app = require("../../server");
const testHelper = require("../testsHelper");

require("dotenv").config();

// retrieving mock data
const tags = testHelper.returnTags();
const newPost = testHelper.returnUser();

/* Connecting to the database before each test. */
beforeEach(async () => {
  await mongoose.connect(process.env.DATABASE_URL);
});
/* Closing database connection after each test. */
afterEach(async () => {
  await mongoose.connection.close();
});

describe("GET /api/FeedView", () => {
  it("should return all products", async () => {
    const res = await request(app).get(`/api/FeedView?tags=${tags}`);
    //console.log(tags);
    console.log(res.body);
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });
});



/////////////////////////////////////////////
/*
// Get all posts
describe("/FeedView", () => {
  
  beforeAll(async () => {
    await request(baseUrl)
      .post('/PostEditor')
      .send(newPost);
  })
  afterAll(async () => {
    await request(baseUrl)
      .delete(`/PostEditor/${newPost._id}`)
  })
  it('should return 200', async () => {
    const response = await request(baseUrl)
      .get('/FeedView')

    console.log(response.body)
    expect(response.status).toBe(200);
    expecct(response.bodyerror).toBeNull();
  });
  it('should return all posts', async () => {
    const response = await request(baseUrl)
      .get('/FeedView')
    expect(response.body.data.length >=1 ).toBe(true);
  });
});
*/