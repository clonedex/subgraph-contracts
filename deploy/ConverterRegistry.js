module.exports = async ({ getNamedAccounts, deployments, network }) => {
    const { deployer } = await getNamedAccounts();
    const { deploy } = deployments;
    await deploy("BancorConverterRegistry", {
      from: deployer,
      log: true,
    });
  };
  module.exports.tags = ["ConverterRegistry"];
  // module.exports.dependencies = ["MockTokens"];
  