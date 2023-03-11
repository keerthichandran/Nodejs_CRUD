// const Config = require('./Config');
const request = require('request');
const shortid = require('shortid');
shortid.characters('0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$@');

function Utils(){
    var self = this;

    this.createshortid = function(){
        return shortid.generate();
    }

}

module.exports = new Utils();