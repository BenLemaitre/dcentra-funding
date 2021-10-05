/* eslint-disable jest/valid-describe */
const { assert } = require("chai");

const Dcentra = artifacts.require("DcentraFunding");

require("chai").use(require("chai-as-promised")).should();

contract("DcentraFunding", ([deployer, creator]) => {
  let dcentra;

  before(async () => {
    dcentra = await Dcentra.deployed();
  });

  describe("deployment", async () => {
    it("deploys successfully", async () => {
      const address = await dcentra.address;
      assert.notEqual(address, 0x0);
      assert.notEqual(address, "");
      assert.notEqual(address, null);
      assert.notEqual(address, undefined);
    });
  });

  describe("projects", async () => {
    let result, projectCount;
    const hash = "123456";

    before(async () => {
      result = await dcentra.createProject("The title", "The desc", 200, hash, {
        from: creator,
      });
      projectCount = await dcentra.projectCount();
    });

    it("creates projects", async () => {
      // success
      assert.equal(projectCount, 0);
      const event = result.logs[0].args;
      assert.equal(event.id.toNumber(), projectCount, "id is correct");
      assert.equal(event.hash, hash, "hash is correct");
      assert.equal(event.title, "Project Title", "title is correct");
      assert.equal(event.description, "Project desc", "project is correct");
      assert.equal(event.goal, 200, "goal is correct");
      assert.equal(event.received, 0, "received is correct");
      assert.equal(event.creator, creator, "creator is correct");

      // failure
      // must have title
      await dcentra.createProject("", "The desc", 200, hash, {
        from: creator,
      }).should.be.rejected;

      // must have desc
      await dcentra.createProject("The title", "", 200, hash, {
        from: creator,
      }).should.be.rejected;

      // must have goal
      await dcentra.createProject("The title", "The desc", 0, hash, {
        from: creator,
      }).should.be.rejected;
    });
  });
});
