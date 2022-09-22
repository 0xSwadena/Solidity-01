// compile code will go here
//this is a helper library that is a part of the node standard library
//we dont have to install any assert modules etc
const path = require('path');
const fs = require('fs');
//use solidity compiler here
const solc = require('solc');

//read in the content of inbox contract
const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');
//fed inbox contract directly into compiler
//specify output of compiler into [':Inbox'] contract only
module.exports = solc.compile(source,1).contracts[':Inbox'];
