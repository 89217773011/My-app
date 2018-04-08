import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, Route } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import App from "./containers/App/App";
import "semantic-ui-css/semantic.min.css";

export const history = createHistory();

ReactDOM.render(
  <Router history={history}>
    <Route path="/" component={App} />
  </Router>,
  document.getElementById("root")
);
