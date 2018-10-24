const request = require("supertest");
const app = require("../app");

describe("GET endpoint with name should return greeting", () => {
  it("Should return status code 200", async () => {
    const res = await request(app).get("/api/greeting/_");
    expect(res.status).toBe(200);  
  });
});