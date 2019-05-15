import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import PlayersPage from "./components/players/PlayersPage";
import ManagePlayerPage from "./components/players/ManagerPlayerPage";
import { ToastContainer } from "react-toastify";
import logo from "./logo.svg";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/players" component={PlayersPage} />
        <Route path="/player" component={ManagePlayerPage} />
        <Route path="/player/:id" component={ManagePlayerPage} />
        <Route component={PageNotFound} />
      </Switch>
      <ToastContainer autoClose={3000} hideProgressBar />
    </div>
  );
}

export default App;
