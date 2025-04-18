import supertest from "supertest";

import { clearTestingDB } from "../utils/clearTestingDB";
import populateDB from "../database/populate";

import testingApp from "./testApp";

let dbItems: Awaited<ReturnType<typeof populateDB>>;

beforeAll(async () => {
  await clearTestingDB();
  dbItems = await populateDB(5);
});

describe("mobiles GET routes work well", () => {
  test("getMany works", () => {
    return supertest(testingApp)
      .get("/mobiles")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.mobiles.length).toBe(5);
        expect(res.body.mobiles[0].name).toBe(dbItems[0].name);
      });
  });
  test("get with id works", () => {
    return supertest(testingApp)
      .get(`/mobiles/${dbItems[0].id}`)
      .expect("Content-Type", /json/)
      .expect(200)
      .then((res) => {
        expect(res.body.mobile.id).toBe(dbItems[0].id);
      });
  });
});
