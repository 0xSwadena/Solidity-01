// compile code will go here
const path = require('path');
const fs = require('fs');
const solc = require('solc');


let accounts;

beforeEach (async () => {
// get a list of all account
   accounts = await web3.eth.getAccounts()

// Use one of those accounts to deploy the contract
});

describe ('inbox', () => {
    it('deploys a contract', () => {
        console.log(accounts);
    });
});
