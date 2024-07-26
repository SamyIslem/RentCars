const userService = require("../services/users.service");

const getUsers = async (req, res) => {
  try {
    const users = await userService.getUsers();
    res.status(200).json({
      users,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const createUser = async (req, res) => {
  try {
    const user = await req.body;

    const result = await userService.createUser(user);
    res.status(200).json({
      result,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    console.log(id);
    const result = await userService.deleteUser(id);
    res.status(200).json({
      success: true,
      id,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};



module.exports = {
  getUsers,
  createUser,
  deleteUser,
};
