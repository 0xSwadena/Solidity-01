// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
//use mocha to set up testing
const { describe } = require('mocha');
const { isNumberObject } = require('util/types');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
const INITIAL_STRING = 'Hi theeereee!'

//define beforeEach function, executed before everyone of our tests
beforeEach (async () => {
// get a list of all account
   accounts = await web3.eth.getAccounts()

// Use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    //deploy a new instance of our contract to ganache local network
    .deploy({ data: bytecode, arguments: ['Hi theeereee!']})
    .send({ from: accounts[0], gas: '1000000'});
});

//inside describe function block, test using describe statement
//different 'it' statements used to test different aspect of the contract
describe ('inbox', () => {
    //this 'it' verify that contract is successfully deployed
    //using assert.ok function to assert the inbox options address property was defined
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });

    it('has a default message', async () => {
        //going to retreive message
        const message = await inbox.methods.message().call();
        //going to assert the value of the message
        assert.equal(message, 'Hi theeereee!');
    })
});
