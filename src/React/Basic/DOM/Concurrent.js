"use strict";

const ReactDOM = require("react-dom");
const createRoot = ReactDOM.createRoot || ReactDOM.unstable_createRoot;
const createBlockingRoot =
  ReactDOM.createBlockingRoot || ReactDOM.unstable_createBlockingRoot;

export var createRoot = (element) => () => createRoot(element);

export var createBlockingRoot = (element) => () => createBlockingRoot(element);

export var renderRoot = (root) => (jsx) => () => root.render(jsx);