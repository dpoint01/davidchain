const Block = require('./block');

module.exports = class BlockChain {
    constructor() {
        this.chain = [this.createGenesisBlock()];
    }

    createGenesisBlock() {
        return new Block(0, '28/08/1993', 'Genesis Block', '0');
    }

    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }

    addNewBlock(newBlock) {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = newBlock.createHash();
        this.chain.push(newBlock); // it's not so easy to add a block to a chain normally...
    }

    isChainValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i],
                  previousBlock = this.chain[i - 1];
            
            // check if currentBlock.hash is valid
            if (_hasInvalidHash(currentBlock)) return false;

            // check if the currentBlock.previousHash is valid
            if(_hasInvalidPrevHash(currentBlock, previousBlock)) return false;

            return true;
        }
    }
 }

 // helper methods 
_hasInvalidHash = (currentBlock) => {
    return currentBlock.hash !== currentBlock.createHash();
}

_hasInvalidPrevHash = (currentBlock, previousBlock) => {
    return currentBlock.previousHash !== previousBlock.hash;
}
