const express = require('express');
const app = express();
const PORT = 3000;

// Server Static assets
app.use('/', express.static('../client/build'))

// Start Server
app.listen(PORT, () => {
    console.log(`Shaheen is listening at http://localhost:${PORT}`)
});
