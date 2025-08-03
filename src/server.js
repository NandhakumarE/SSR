import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

const port = 3000;

app.

app.get('/', (req, res) => {
  const content = renderToString(<Home/>)

  res.send(content);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});