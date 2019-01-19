const express = require('express');
const weatherRoutes = require('./routes/weather');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome55555599999999');
})

router.use('/api/weather', weatherRoutes);
module.exports = router;