/* eslint-disable jest/valid-describe */
const { assert } = require("chai");

const Dcentra = artifacts.require("DcentraFunding");

require("chai").use(require("chai-as-promised")).should();

contract("DcentraFunding", ([deployer, creator, funder]) => {
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
      projectCount = (await dcentra.projectCount()) - 1;
    });

    it("creates projects", async () => {
      // success
      assert.equal(projectCount, 0);
      const event = result.logs[0].args;
      assert.equal(event.id.toNumber(), projectCount, "id is correct");
      assert.equal(event.imageHash, hash, "hash is correct");
      assert.equal(event.title, "The title", "title is correct");
      assert.equal(event.description, "The desc", "project is correct");
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

    it("funds a project", async () => {
      // Track the author balance before purchase
      let oldCreatorBalance;
      oldCreatorBalance = await web3.eth.getBalance(creator);
      oldCreatorBalance = new web3.utils.BN(oldCreatorBalance);

      result = await dcentra.updateReceivedFunds(projectCount, {
        from: funder,
        value: web3.utils.toWei("1", "Ether"),
      });

      // success
      const event = result.logs[0].args;
      assert.equal(event.id.toNumber(), projectCount, "correct id");
      assert.equal(event.received, "1000000000000000000", "correct amount");
      assert.equal(event.creator, creator, "correct creator");

      let newCreatorBalance;
      newCreatorBalance = await web3.eth.getBalance(creator);
      newCreatorBalance = new web3.utils.BN(newCreatorBalance);

      let givenFunds;
      givenFunds = web3.utils.toWei("1", "Ether");
      givenFunds = new web3.utils.BN(givenFunds);

      const expectedBalance = oldCreatorBalance.add(givenFunds);

      assert.equal(newCreatorBalance.toString(), expectedBalance.toString());

      // failure: funding a project that doesnt exist
      await dcentra.updateReceivedFunds(999, {
        from: funder,
        value: web3.utils.toWei("1", "Ether"),
      }).should.be.rejected;
    });
  });
});
