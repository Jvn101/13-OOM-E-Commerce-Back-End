const router = require('express').Router();
const apiRoutes = require('./api');
//do I need to add each route folder i.e. const categoryRoutes = require("./category-routes")

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;