var translate = require('gladys-lang');
var translation = translate.userLang;
sails.log.debug("Translations:", translation);

module.exports = function() {
    var lightObj = {
		device: {
			name: translation.key,
			protocol: 'wifi',
			service: 'hue',
			identifier: 5
        }
    }

    return gladys.device.create(lightObj)
}