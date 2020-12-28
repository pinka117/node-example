import supertest from "supertest";
import app from "../../app.js";
import dbHandler from "../../utils/dbHandlerTest.js";
import { createUser } from "./userService.js";

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

describe("POST /login ", () => {
  test("It should respond 200 if user is found", async () => {
    await createUser("mail@me.com", "john", "string", "string");
    const response = await request(app).post("/api/user/login").send({
      mail: "mail@me.com",
      password: "string",
    });
    expect(response.statusCode).toBe(200);
  }, 12000);

  test("It should respond 500 if user is not found", async () => {
    const response = await request(app).post("/api/user/login").send({
      mail: "mail@me.com",
      password: "string",
    });
    expect(response.statusCode).toBe(500);
  }, 12000);
});
