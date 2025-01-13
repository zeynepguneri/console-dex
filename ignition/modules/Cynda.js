const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Cynda", (m) => {
  const cynda = m.contract("CyndaToken", [200]);

  m.call(cynda, "mint", []);

  return { cynda };
});