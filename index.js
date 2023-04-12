const express = require("express");
const { Logger } = require("./midleware/Logger");
const dotenv = require("dotenv");
const connectDB = require("./db/connect");
const todoListRouter = require("./routes/todoListRouter");
const membersRouter = require("./routes/membersRouter");
const historyRouter = require("./routes/historyRouter");
const cors = require("cors");
const app = express();

dotenv.config();
app.use(cors(), Logger, express.json(), express.urlencoded({ extended: true }));

app.use("/tasks", todoListRouter);
app.use("/members", membersRouter);
app.use("/history", historyRouter);

const PORT = process.env.PORT || 3005;
async function start() {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log("The server running on port:", PORT);
    });
  } catch (error) {
    console.log(error);
  }
}
start();
