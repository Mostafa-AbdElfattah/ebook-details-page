import React from "react";
import { Routes as ReactRoutes, Route, Navigate } from "react-router-dom";

import { ROUTE_PATHS } from "../utils/RoutesPaths";
import Ebook from "../containers/Ebook";

const Routes = (
  <ReactRoutes>
    <Route path={ROUTE_PATHS.ebook} element={<Ebook />} exact />
    {/* Default route */}
    <Route path="/" element={<Navigate to={ROUTE_PATHS.ebook} />} />
  </ReactRoutes>
);
export default Routes;
