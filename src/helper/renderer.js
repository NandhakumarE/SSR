import React from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router";
import Router from "../router";
import { Provider } from "react-redux";

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
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
        </script>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
};
