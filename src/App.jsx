import React from "react";
import { Home } from "./pages/Home";
import { Switch, Route } from "react-router-dom";

export function App() {
  return (
    <>
      <Switch>
        <Route patch="/" exact component={Home} />
      </Switch>
    </>
  );
}
