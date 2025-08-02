const owner = (req, res) => {
  res.status(201).json({
    message: "You can access Owner, Admin, User",
  });
};

const admin = (req, res) => {
  res.status(201).json({
    message: "You can access Admin, User",
  });
};

const user = (req, res) => {
  res.status(201).json({
    message: "You can access User",
  });
};

module.exports = { owner, admin, user };
