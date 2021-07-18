"use strict";

import ReactDOM from "react-dom";

export var renderThen = (jsx) => (node) => (callback) => () =>
  ReactDOM.render(jsx, node, callback);

export var hydrateThen = (jsx) => (node) => (callback) => () =>
  ReactDOM.hydrate(jsx, node, callback);

export var unmount = (node) => () => ReactDOM.unmountComponentAtNode(node);

export var createPortal = (jsx) => (node) => ReactDOM.createPortal(jsx, node);