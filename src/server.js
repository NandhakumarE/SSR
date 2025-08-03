import express from "express";
import renderer from "./helper/renderer";

const app = express();

const port = 3000;

app.use(express.static("public"));

app.get(/.*/, (req, res) => {
   res.send(renderer(req));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
