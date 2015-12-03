var config = require('./config');

var operations = {
	c: { name: 'crop', file: 'crop' },
	t: { name: 'thumb', file: 'thumb' },
	r: { name: 'resize', file: 'resize' },
	q: { name: 'quality', file: 'quality' },
	f: { name: 'format', file: 'format' },
	foc: { name: 'focal', file: 'focal' },
	rot: { name: 'rotate', file: 'rotate' },
	flp: { name: 'flip', file: 'flip' },
	blr: { name: 'blur', file: 'filters/blur' },
	bri: { name: 'brightness', file: 'filters/brightness' },
	con: { name: 'contrast', file: 'filters/contrast' },
	exp: { name: 'exposure', file: 'filters/exposure' },
	gam: { name: 'gamma', file: 'filters/gamma' },
	hig: { name: 'highlights', file: 'filters/highlights' },
	hue: { name: 'hue', file: 'filters/hue' },
	inv: { name: 'invert', file: 'filters/invert' },
	sat: { name: 'saturation', file: 'filters/saturation' },
	sha: { name: 'shadows', file: 'filters/shadows' },
	shp: { name: 'sharpness', file: 'filters/sharpness' },
	vib: { name: 'vibrance', file: 'filters/vibrance' }
};

module.exports = { byKey: { }, byName: { } };
Object.keys(operations).forEach(function (key) {
	var info = operations[key];
	if (!Array.isArray(config.disableOperations) || config.disableOperations.indexOf(info.name) < 0) {
		var run = require('./operations/' + info.file);
		var object = {key: key, name: info.name, run: run};
		module.exports.byKey[key] = object;
		module.exports.byName[info.name] = object;
	}
});