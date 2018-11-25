var translate = require('gladys-lang')

module.exports = function() {
    var lightObj = {
		device: {
			name: translate.userLang.key,
			protocol: 'wifi',
			service: 'hue',
			identifier: 5
        }
    }

    return gladys.device.create(lightObj)
}