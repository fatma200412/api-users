const User = require("./../models/userModels");

const getAllUsers = async (req, res) => {
  let users = await User.find({});
  res.send(users);
};

const getPostUser = async (req, res) => {
  let findUserId = await User.findOne({ id: req.body.id });
  if (findUserId) {
    res.send("eyni id var");
  } else {
    const newUser = new User(req.body);
    console.log(newUser);
    newUser.save();
  }
};

const getUserById = async (req, res) => {
  let id = req.params.id;
  let findUser = await User.findOne({ id: id });
  if (findUser) {
    res.send(findUser);
  } else {
    res.send("<h1>User doesn't exist!</h1>");
  }
};

const getUserDeleteById = async (req, res) => {
  let id = req.params.id;
  let findUser = await User.deleteOne({ id: id });
  if (findUser) {
    res.send(findUser);
  } else {
    res.send("<h1>User doesn't exist!</h1>");
  }
};

const getPatchUser = async (req, res) => {
  let id = req.params.id;

  if (id) {
    let updateUserPatch = await User.findOneAndUpdate({ id: id }, req.body);
  } else {
    res.send("<h1>User doesn't exist!</h1>");
  }
};

const getPutUser = async (req, res) => {
  let id = req.params.id;

  if (id) {
    let updateUserOut = await User.replaceOne({ id: id }, req.body);
  } else {
    res.send("<h1>User doesn't exist!</h1>");
  }
};

module.exports = {
  getAllUsers,
  getPostUser,
  getUserById,
  getUserDeleteById,
  getPatchUser,
  getPutUser,
};
