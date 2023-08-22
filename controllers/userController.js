const User = require("../models/user");

exports.getUser = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.render("User", { user });
};

exports.addMessage = async (req, res) => {
  const { message } = req.body;

  const newMessage = new User({ message });
  await newMessage.save();

  res.json({ status: "Message saved successfully!" });
};

exports.getMessage = async (req, res) => {
  const latestMessage = await User.findOne().sort({ _id: -1 });
  res.json({ message: latestMessage ? latestMessage.message : "" });
};
