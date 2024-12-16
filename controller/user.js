const UserModel = require("../Model/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const findUser = async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    return res.status(200).json({ msg: "User found", user });
  } catch (error) {
    console.error("Error finding user:", error);
    return res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({ msg: "user delete", id: user.id });
  } catch (error) {
    return res.status(500).json({ error: error });
  }
};

const addUser = async (req, res) => {
  try {
    const count = await UserModel.countDocuments({});
    const result = await UserModel.create({
      ...req.body
    });
    return res.status(201).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error });
  }
};

const updateUser = async (req, res) => {
  try {
    const result = await UserModel.findByIdAndUpdate(req.params.id, {
      $set: { ...req.body }
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = { getAllUsers, findUser, deleteUser, addUser, updateUser };
