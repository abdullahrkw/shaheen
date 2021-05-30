const express = require ('express');
const encryptRoomInfo = require('./../utils').encryptRoomInfo;
const store = require("./store");
const router = express.Router();

router.post('/', (req, res, next) => {

    let roomId = encryptRoomInfo(req.body);
    if (roomId == "") {
        res.json({
            "error": true,
            "info": "error in post request's params"
        });
        return;
    }

    if (store.results.indexOf(roomId + ".png") < 0) {
        res.json({
            "error": true,
            "info": "result could not be found/created"
        });
        return;
    }

    res.json({
        "url": "/results/" + roomId + ".png"
    });
});

module.exports = router;