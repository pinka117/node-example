import supertest from "supertest";
import app from "../../app.js";

const request=supertest;

describe("POST /signup ", () => {
    test("It should respond 201 if request is ok", async () => {
      const response = await request(app).post("/api/user/signup").send({name: 'john',mail:"mail@me.com",surname:"string",password:"string"});
      //expect(response.body).toEqual(["Elie", "Matt", "Joel", "Michael"]);
      expect(response.statusCode).toBe(201);
    });
  });