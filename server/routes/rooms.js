const express = require ('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.json([1]);
});

module.exports = router;