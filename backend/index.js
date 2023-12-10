const express = require("express");
const mongoose = require("mongoose");
const mongodb = require("mongodb");
const cors = require("cors");
const userPostRouter = require("./routes/userPostRoutes");
const highlightRouter = require("./routes/userHighlightRoutes");
const PersonalDataRouter = require("./routes/userPersonalDataRoutes");
const SavedDataRouter = require("./routes/userSavedDataRoutes");
const userTaggedRouter = require("./routes/userTaggedRoutes");
const UsersDataRouter = require("./routes/usersRoutes");
const postDataRouter = require("./routes/postDataRoutes");
const registerDataRouter = require("./routes/registerDataRoutes");
const loginDataRouter = require("./routes/loginDataRoutes");

const App = express();
App.use(express.json());

App.use(
  cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
  })
);

//routes
App.use("/userPost", userPostRouter);
App.use("/userHighlight", highlightRouter);
App.use("/userPersonalData", PersonalDataRouter);
App.use("/userSavedData", SavedDataRouter);
App.use("/userTaggedData", userTaggedRouter);
App.use("/userData", UsersDataRouter);
App.use("/PostData", postDataRouter);
App.use("/registerData", registerDataRouter);
App.use("/loginData", loginDataRouter);

const connectBackend = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://toptrendtalks1:Toptrendtalks1@qaisargramcluster.qxzg3zg.mongodb.net/test?retryWrites=true&w=majority"
    );
    console.log("Backend connected to MongoDB");
  } catch (err) {
    console.error(err);
  }
};

connectBackend();
App.listen(8080, () => {
  console.log("server running on port 8080");
});
