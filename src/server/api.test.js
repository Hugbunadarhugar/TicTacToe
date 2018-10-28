// src/server/api.test.js 

const request = require("supertest");
const app = require("../app");

describe("OPTIONS /server", () => {
  it("should return 200 status code", async () => {
    const res = await request(app).options("/server");
    expect(res.status).toBe(200);
  });
});