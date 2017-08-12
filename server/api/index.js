const router = require('express').Router();

module.exports = router;

router.use('/payPalMe', require('./payPalMe'));
// router.use('/googleVision', require('./googleVision'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
