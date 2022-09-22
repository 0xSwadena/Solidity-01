// compile code will go here
const path = require('path');
const fs = require('fs');
const solc = require('solc');


let accounts;

//the function that will pass to beforeEach is going to have asynchronous code inside of it
beforeEach (async () => {
// get a list of all account
   //re-assign a value to the accounts var
   //get a list of the account from 'web3' that will access 'eth' module
   accounts = await web3.eth.getAccounts()

// Use one of those accounts to deploy the contract
});

describe ('inbox', () => {
    it('deploys a contract', () => {
        console.log(accounts);
    });
});
