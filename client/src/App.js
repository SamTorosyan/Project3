import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Blogs from "./blogPages/Blogs";
import Detail from "./blogPages/Detail";
import NoMatch from "./blogPages/NoMatch";
import Nav from "./components/Nav";
import lAAPI from "./lAAPI/"
import Newsletter from "./newsletter/Newsletter";
import Home from "./homepage/Home";




const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/blogs" component={Blogs} />
        <Route exact path="/blogs/:id" component={Detail} />
        <Route component={NoMatch} />
        <Route exact path="/lAAPI/" component ={lAAPI} />
        <Route exact path="/newsletter" component= {Newsletter} />
      </Switch>
    </div>
  </Router>
);

export default App;
