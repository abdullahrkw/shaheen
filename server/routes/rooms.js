const express = require ('express');
const store = require("./store");
const router = express.Router();

router.get('/', (req, res, next) => {
    let rooms = [];
    store.rooms.forEach((ele, ind) => {
        rooms.push({
            "id": String(ind + 1),
            "url": "/assets/rooms/" + ele,
            "maps": []
        });
    });

    res.json({
        "rooms" : rooms
    });
});

module.exports = router;