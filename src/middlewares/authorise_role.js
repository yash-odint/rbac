const authoriseRole = (...allowedRoles) => {
  return (req, res, next) => {
    const role = req.user.role;
    if (!allowedRoles.includes(role)) {
      return res.status(201).json({
        message: "You don't have permission to access this endpoint",
      });
    }
    next();
  };
};

module.exports = authoriseRole;
