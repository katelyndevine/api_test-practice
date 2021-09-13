const express = require("express");
const request = require("supertest");
const expect = require("chai").expect; // documentation: https://www.chaijs.com/

const app = express();

app.get("/first", (err, res) => {
  res.status(200).json({ ok: "response" });
});

describe("First test", () => {
  it("OK response", () => {
    request(app)
      .get("/first")
      .end((err, res) => {
        expect(res.statusCode).to.be.equal(200);
      });
  });
  // Usually when testing APIS you'll be hitting HTTP server, which is where your API will be hosted. To simulate this, we can use Mocky, which let's us set up a response and generate a HTTP response
  it("Mocky OK Response", (done) => {
    // done is the callback from the test
    request("http://www.mocky.io")
      .get("/v3/e6e9159d-1fdb-4967-b5ec-9d2592c1ab77")
      .expect(200, done);
  });
});
