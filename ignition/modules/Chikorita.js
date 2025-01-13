const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Chikorita", (m) => {
  const chikorita = m.contract("ChikoritaToken", [200]);

  m.call(chikorita, "mint", []);

  return { chikorita };
});