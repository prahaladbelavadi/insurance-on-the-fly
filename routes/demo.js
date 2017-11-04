var SportsDAO = require('../sports').SportsDAO;

 /* The SessionHandler must be constructed with a connected db */
function DemoHandler (db, multichain) {
    "use strict";
    var sports = new SportsDAO(db);
        this.getAsset = function(req, res){
            "use strict";

            multichain.getInfo((err, info) => {
                if(err){
                    throw err;
                }
                console.log(info);
                return res.json(info);
            })
        };

        this.retrieveHelp = function(req, res){
            "use strict";

            multichain.help((err, help) => {
                if(err){
                    throw err;
                }
                console.log(help)
                return res.json(help)
            })
        };

	this.insertplayer = function(req, res) {
        "use strict";

		var data = req.body;

		var player = {
			name: data.name,
			game: data.game,
			age :data.age
		};

		sports.insertplayer(player, function(err, record) {

		//console.log(record);
		if(err) {

				return res.json(err);

		}

		return res.json(record);
		});


	}

	this.getplayer = function(req, res) {
        "use strict";

		var data = req.body;

		var player = {
			name: data.player

		};

		sports.getplayer(player, function(err, record) {

		//console.log(record);
		if(err) {

				return res.json(err);

		}

		return res.json(record);
		});


	}

	this.getplayers = function(req, res) {
        "use strict";
		sports.getplayers(function(err, records) {
		//console.log(record);
		if(err) {
				return res.json(err);
		}
		return res.json(records);
		});
	}
}
module.exports = DemoHandler;
