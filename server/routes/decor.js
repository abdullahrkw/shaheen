const express = require ('express');
const router = express.Router();

router.post('/', (req, res, next) => {
    res.json({
        "url": "/assets/results/r1-t1-r1.png"
    });
});

module.exports = router;