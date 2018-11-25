
module.exports = function(sails) {
    
    var exec = require('./lib/exec.js');
    var device = require('./lib/device.js');
    
    return {
        exec: exec,
        device: device
    };
};