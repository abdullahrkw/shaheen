const express = require ('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({
        "rooms" : [
            {
                "id": "1",
                "url": "/assets/rooms/1.png", 
                "maps": [
                ]
            }
        ]
    });
});

module.exports = router;