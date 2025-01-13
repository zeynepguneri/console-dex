const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("Pool_deploy", (m) => {
  const pool = m.contract("Pool", [,,200]);

  m.call(pool, "addLiquidity", [5,10]);

  return { pool };
});