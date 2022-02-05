const mongoose = require("mongoose");
const express = require("express");
const uri =
  "mongodb+srv://sa:123456a@fptassignments.zqwm9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const app = express();
mongoose.connect(uri);
const appRouter = require("./routers");
const model = require("./DTO/application");
const PORT = process.env.PORT || 3000;

app.use("/app", appRouter);

app.listen(PORT, () => {
  console.log("The app is on");
});
