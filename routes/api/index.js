const router = require('express').Router();

const apiWineRouter = require('./wine');
const apiUsersRouter = require('./users');

router.use('/wine', apiWineRouter)
router.use('/users', apiUsersRouter)

module.exports = router;