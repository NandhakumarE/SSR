import React from "react";
import { Provider } from "react-redux";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import Router from "../router";
import serialize from "serialize-javascript";
import '../index.css'

export default (req, store) => {
  const { url } = req;
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={url}>
        <Router/>
      </StaticRouter>
    </Provider>
  );

  return `
    <!DOCTYPE HTML>
    <html> 
      <head>
        <title>Home</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script>
          window.__PRELOADED_STATE__ = ${serialize(store.getState(), { isJSON: true })}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
