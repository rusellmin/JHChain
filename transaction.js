'use strict';
var CryptoJS = require("crypto-js");

class Transaction {
    //constructor(utxo, input, output, meta) {
    //    this.tr = {utxo:utxo, input:input, output:output, meta:meta};
    //}
    constructor(){
        this.tr = {utxo:{},input:{},output:{},meta:{}};
    }
    getTransaction(){
        return this.tr;
    }
    setUtxo(utxo){
        this.tr.utxo = utxo;
    }
    setInput(input){
        this.tr.input = input;
    }
    setOutput(output){
        this.tr.output = output;
    }
    setMeta(meta){
        this.tr.meta = meta;
    }
    getUtxo(){
        return this.tr.utxo;
    }
    getInput(){
        return this.tr.input;
    }
    getOutput(){
        return this.tr.output;
    }
    getMeta(){
        return this.tr.meta;
    }
}

module.exports.Transaction = Transaction;