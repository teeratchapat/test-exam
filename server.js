const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = 3001;

const userController = require("./controllers/userController");
app.get("/get-message", userController.getMessage);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(
  "mongodb+srv://teeratchapat:Tee1234@cluster0.8sthelg.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());

app.get("/", (req, res) => {
  res.render("Index", { data: "Hello from server!" });
});

app.post("/add-message", userController.addMessage);
app.get("/get-message", userController.getMessage);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
