const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("PoolFactory_deploy", (m) => {
  const poolFactory = m.contract("PoolFactory", []);

  m.call(poolFactory, "createPool", []);

  return { poolFactory };
});