// deploy code will go here
const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');
//use module called HDWalletProvider
//it used to (1) connect to selected network
//(2) unlocked accounts that used on that network
const provider = new HDWalletProvider(
  //unlocked account using 12 mnemonic, unlocked private & public key
  'helmet broccoli miracle actress three wrist doll ginger sick milk wish note',
  //set up provider to connect to infura node
  //other modules: Geth, Parity
  'https://rinkeby.infura.io/v3/04476db5519b4f5193f2af0a1d376acf'

);
//fed up provider to Web3 instance
//had copy of web3 that has been preconfigured to connect to Rinkeby network & 1 account w/ rETH
const web3 = new Web3(provider);

//bcs we need to make 2 async calls,so need to put function deploy
//just bcs we want to use async await syntax
const deploy = async () => {
    //first,we use web3 to get a list of all accounts that hv been unlocked from HDWalletProvider
    const accounts = await web3.eth.getAccounts();
    //then, get the first account out of the list of all accounts as the basis for deploying contract
    console.log('Attempting to deploy from account', accounts[0]);
    //actual contract deployment statement
    const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });
    //assign the address result of contract deployment
    console.log('Contract deployed to', result.options.address);
    //prevent hanging deployment
    provider.engine.stop()
};
deploy();
