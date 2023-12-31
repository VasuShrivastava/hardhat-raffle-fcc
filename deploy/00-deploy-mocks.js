const { network, ethers } = require('hardhat');
const {developmentChains}= require('../helper-hardhat-config');

const BASE_FEE= ethers.parseEther("0.25");
const GAS_PRICE_LINK= 1e9;

module.exports= async function({deployments, getNamedAccounts}){
    const {deploy, log}= deployments;
    const {deployer}= await getNamedAccounts();
    const args= [BASE_FEE, GAS_PRICE_LINK];

    if(developmentChains.includes(network.name)){
        log("Localhost detected!, Deploying mocks...");
        //deploy a mock vrf coordinator
        await deploy("VRFCoordinatorV2Mock",{
            from: deployer,
            args: args,
            log: true,
        });
        log("Mocks Deployed!");
        log("---------------------------------");
    };
}
module.exports.tags= ["all", "mocks"];
