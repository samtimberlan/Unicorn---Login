let express = require("express");
let path = require("path");
//import open from "open";

const port = process.env.PORT || 3030;
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../src/index.html"), err => {
    console.log(err);
  });
});
app.use(express.static(path.join(__dirname, "../src/")));

// app.use((req, res) => {
//   return res.status(404).sendFile(path.join(__dirname, "../src/404.html"));
// });

app.listen(port, () => {
  console.log("App running on " + port);
});
