import models from '../models';

/**
 * Load user
 */
function load(req, res, next, id) {
  models.User.findById(id)
    .then(user => {
      req.user = user;
      return next();
    })
    .catch(e => next(e));
}

/**
 * Get user
 * @returns {User}
 */
function get(req, res) {
  return res.json(req.user);
}

/**
 * Create new user
 * @property {string} req.body.username
 * @return {User}
 */
function create(req, res, next) {
  const user = new models.User({
    username: req.body.username
  });

  user.save()
    .then(savedUser => res.json(savedUser))
    .catch(e => next(e));
}

/**
 * Update existing user
 * @property {string} req.body.username
 * @return {User}
 */
function update(req, res, next) {
  const user = req.user;

  user.username = req.body.username;

  user.save()
    .then(savedUser => res.json(savedUser))
    .catch(e => next(e));
}

export default { get, load, create, update };