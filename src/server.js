import express from "express";
import React from "react";
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";

const app = express();

const port = 3000;

app.use(express.static("public"));

app.get("/", (_req, res) => {
  const content = renderToString(<Home />);

  const html = `
    <!DOCTYPE HTML>
    <html> 
      <head>
        <title>Home</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
  res.status(200).send(html);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
