function Logger(req, res, next) {
  console.log(`it is a midelware .with ${req.method} and url is ${req.url}`);

  next();
}

module.exports = { Logger };
