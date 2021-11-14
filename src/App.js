import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import PageNotFound from "./PageNotFound";
import HomePage from "./Pages/HomePage";


function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />

        <Switch>
          <Route exact path="/" component={HomePage} />

          <Route exact path="/home" component={HomePage} />

          <Route exact path="*" component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
