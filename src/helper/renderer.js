import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import router from "../router";

export default (req) => {
  const { url } = req;
  const content = renderToString(
    <StaticRouter location={url}>{router()}</StaticRouter>
  );

  return `
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
};
