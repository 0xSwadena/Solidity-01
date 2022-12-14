//web3 library always has given provider
//provider instruct web3 the selected network to connect
//also contain info abt all different accounts that available to web3
//in here, the provider was given by ganache-cli module
//ganache host a local test network

// contract test code will go here
const assert = require('assert');
//use ganache-cli module
const ganache = require('ganache-cli');
const { describe } = require('mocha');
//use web3 library, Web3 as a constractor function
const Web3 = require('web3');
//set up instance web3
//provider is a replaceable block that we stick in Web3 library
//.provider is that allow us to connect to network
//soon as we deploy to testnet we will replace the provider
const web3 = new Web3(ganache.provider());
//interface/ABI & bytecode imported from compile file
//use { } bcs we're requiring in an object that has interface & bytecode properties
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach (async () => {
// get a list of all account
   accounts = await web3.eth.getAccounts()

// Use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi theeereee!']})
    .send({ from: accounts[0], gas: '1000000'});
// 1st line inbox, teaches web3 about what methods an inbox contract has
// 2nd line deploy, tell web3 that we want to deploy a new copy of this contract
// 3rd line send, tell web3 to sendout a transaction that creates this contract
});

describe ('inbox', () => {
    it('deploys a contract', () => {
        console.log(inbox);
    });
});
