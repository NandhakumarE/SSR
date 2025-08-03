import React from "react";
import { hydrateRoot } from 'react-dom/client';
import Home from './components/Home';

// Attaching event to the server rendered html in browser.
hydrateRoot(document.querySelector('#root'), <Home/>);

