"use strict";

import { render, hydrate, unmountComponentAtNode, createPortal } from "react-dom";

export const renderImpl = (jsx) => (node) => (callback) => () =>
  render(jsx, node, callback);

export const hydrateImpl = (jsx) => (node) => (callback) => () =>
  hydrate(jsx, node, callback);

export function unmount(node) { return () => unmountComponentAtNode(node); }

export function createPortal(jsx) { return (node) => createPortal(jsx, node); }
