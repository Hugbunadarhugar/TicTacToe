const request = require("supertest");
const app = require("../app");

/*describe("GET endpoint with name should return greeting", () => {
  it("Should return status code 200", async () => {
    const res = await request(app).get("/api/greeting/_");
    expect(res.status).toBe(200);  
  });
*/
describe("OPTIONS /server", () => {
  it("should return 200 status code", async () => {
    const res = await request(app).options("/server");
    expect(res.status).toBe(200);
  });
});

describe("GET /server", () => {
  it("should return 405 status code and an error message", async () => {
    const res = await request(app).get("/server");
    expect(res.status).toBe(405);
    expect(res.body).toHaveProperty("error");
  });
});

describe("GET /server/greeting/{NAME}", () => {
  it("should return an object with the greeting attribute", async () => {
    const res = await request(app).get("/server/greeting/Name");
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("greeting");
  });
});