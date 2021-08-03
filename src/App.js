import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Homepage/Home";
import GlobalStyle from "./GlobalStyle";
import About from "./components/About";
import Marketing from "./components/Marketing";
import Blog from "./components/Blog";
import Comment from "./components/Comments";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Marketing" component={Marketing} />
          <Route path="/Comment" component={Comment} />
          <Route path="/Blog" component={Blog} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
