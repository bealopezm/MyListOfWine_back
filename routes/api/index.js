const router = require('express').Router();

router.use('/wine', require('./wine'))
router.use('/users', require('./users'))
router.use('/origin', require('./origin'))
router.use('/wineCellar', require('./wineCellar'))
router.use('/wineHasUser', require('./wineHasUser'))
router.use('/type', require('./type'))
router.use('/grape', require('./grape'))

module.exports = router;