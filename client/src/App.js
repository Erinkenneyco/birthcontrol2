import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";
import NoMatch from "./pages/NoMatch";
import TopNav from "./components/TopNav";
import Footer from "./components/Footer";
import TempCollect from "./pages/TempCollect";
import { Container } from 'reactstrap';
import allLogs from "./pages/AllLogs";
//newly added 




function App() {
  return (
      <Router>
        <div>
          <TopNav />
          <Container>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" render={(props) => <Auth {...props} action="signup" />} />
              <Route exact path="/login" render={(props) => <Auth {...props} action="login" />} />
              <Route exact path="/profile" component={Profile} />
              <Route exact path="/log" component={TempCollect} />
              <Route exact path="/allLogs" component={allLogs} />
              {/* <Route path="/edit/:id" component={Edit} />
              <Route path="/index" component={Index}/> */}
              <Route component={NoMatch} />
            </Switch>
          </Container>
          
          <Footer/>     
        
        </div>
      </Router>
  );
}

export default App;
