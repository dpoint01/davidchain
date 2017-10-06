const BlockChain = require('./classes/blockchain'),
      Block = require('./classes/block'),
      prettyjson = require('prettyjson'),
      prettyOptions = {
        keysColor: 'rainbow',
        dashColor: 'magenta',
        stringColor: 'white'
      };

// create random blocks
let blockOne = new Block(1, '06/10/2017', { amount: 10 }),
    blockTwo = new Block(2, '07/10/2017', { amount: 12 }),
    blockThree = new Block(3, '08/10/2017', { amount: 14 }),
    // create an instance of BlockChain
    davidChain = new BlockChain();

// add blocks to chain
davidChain.addNewBlock(blockOne);
davidChain.addNewBlock(blockTwo);
davidChain.addNewBlock(blockThree);

// // output validity of chain
console.log(`Is the blockchain valid? ------> ${davidChain.isChainValid()}`)

// output chain to console
console.log(prettyjson.renderString(JSON.stringify(davidChain), prettyOptions));
