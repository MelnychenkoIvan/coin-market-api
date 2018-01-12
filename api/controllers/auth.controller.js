function login(req, res, next) {
  if (req.body.username === 'root' && req.body.password === 'pass') {
    return res.json({
      username: 'root'
    });
  }

  return res.status(401)
            .json({
              status : 401,
              massage: 'User doesn\'t exist'
            });
}

export default { login };