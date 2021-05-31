const express = require ('express');
const store = require("./store");
const router = express.Router();

router.get('/', (req, res, next) => {

    let tiles = [];
    store.tiles.forEach((ele, ind) => {
        tiles.push({
            "id": String(ind + 1),
            "url": "/assets/tiles/" + ele
        });
    });

    res.json({
        "tiles" : tiles
    });
});

module.exports = router;