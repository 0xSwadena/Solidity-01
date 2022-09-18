// contract test code will go here
const assert = require('assert');
const ganache = require('ganache-cli');
const { describe } = require('mocha');
const { isNumberObject } = require('util/types');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;
const INITIAL_STRING = 'Hi theeereee!'

beforeEach (async () => {
// get a list of all account
   accounts = await web3.eth.getAccounts()
    
// Use one of those accounts to deploy the contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi theeereee!']})
    .send({ from: accounts[0], gas: '1000000'});
});

describe ('inbox', () => {
    it('deploys a contract', () => {
        assert.ok(inbox.options.address);
    });

    it('has a default message', async () => {
        //going to retreive message
        const message = await inbox.methods.message().call();
        //going to assert the value of the message
        assert.equal(message, 'Hi theeereee!');
    })

    it('can change the message', async() => {
        //going to change the message
        await inbox.methods.setMessage('byebye!').send({ from: accounts[0]});
        //going to retreive the new message that just got set
        const message = await inbox.methods.message().call();
        //going to assert the message updated 
        assert.equal(message, 'byebye!');
    });
});