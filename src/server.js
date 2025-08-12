import express from "express";
import renderer from "./helper/renderer";
import { matchRoutes } from "react-router";
import { routes } from "./router";

const app = express();

const port = 3000;

app.use(express.static("public"));

app.get(/.*/, (req, res) => {
   const data = matchRoutes(routes, req.path)[0];
   const loader = data?.route?.loadData;
   if(loader) {
    loader().then(() => res.send(renderer(req)))
   } else  {
    res.send(renderer(req));
   }
   console.log(data);
   
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
