var Demo = require('./demo')
	module.exports = exports = function(app, db, multichain) {

	var demo = new Demo(db, multichain);
	app.post('/demo/insertplayer', demo.insertplayer);
	app.post('/demo/getplayer', demo.getplayer);
	app.get('/demo/getplayers', demo.getplayers);
	app.post('/demo/getAsset',demo.getAsset);
	app.post('/demo/retrieveHelp', demo.retrieveHelp);
}
