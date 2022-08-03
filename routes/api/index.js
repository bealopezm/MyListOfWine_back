const router = require('express').Router();

const apiWineRouter = reqire('./wine');
const apiUsersRouter = reqire('./users');

router.use('/wine', apiWineRouter)
router.use('/users', apiUsersRouter)

module.exports = router;