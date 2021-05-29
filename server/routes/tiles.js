const express = require ('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        "tiles" : [
            {"id": "1", "url": "/assets/tiles/1.png"},
            {"id": "2", "url": "/assets/tiles/2.png"},
        ]
    });
});

module.exports = router;