// compile code will go here
const path = require('path');
const fs = require('fs');
const solc = require('solc');


beforeEach (() => {
// Get a list of all accounts
    web3.eth.getAccounts()
    .then(fetchedAccounts => {
        console.log(fetchedAccounts);
    });
// Use one of those accounts to deploy the contract
});

describe ('inbox', () => {
    it('deploys a contract', () => {});
});
