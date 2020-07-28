import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/Home";

import { BrowserRouter, Switch, Route } from "react-router-dom"

function CadastroVideo() {
  return (
    <div>
      Pagina
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/cadastro/video" component={CadastroVideo} />
      <Route path="/" component={App} exact />
      <Route component={() => (<div>Página 404</div>)} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
