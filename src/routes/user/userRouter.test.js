import supertest from "supertest";
import app from "../../app.js";
import dbHandler from "../../utils/dbHandlerTest.js";

const request = supertest;

beforeAll(async (done) => {
  await dbHandler.connect();
  done();
});

afterEach(async (done) => {
  await dbHandler.clearDatabase();
  done();
});

afterAll(async (done) => {
  await dbHandler.closeDatabase();
  done();
});

describe("POST /signup ", () => {
  test("It should respond 201 if request is ok", async () => {
    const response = await request(app).post("/api/user/signup").send({
      name: "john",
      mail: "mail@me.com",
      surname: "string",
      password: "string",
    });
    //expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
    expect(response.statusCode).toBe(201);
  }, 12000);
});
