const router = require('express').Router();

router.use('/wine', require('./wine'))
router.use('/users', require('./users'))
router.use('/origin', require('./origin'))
router.use('/wineCellar', require('./wineCellar'))
router.use('/wineHasUser', require('./wineHasUser'))

module.exports = router;