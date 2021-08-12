import React, { useEffect, useState } from 'react';
import './App.css';
import {Link,BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Main from './Main';
import Colleges from './components/College/Colleges';
import CollegeDetails from './components/College/CollegeDetails'
function App() {
  return (
    <div className="App" style={{backgroundColor:"#161625"}}>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/colleges" component={Colleges} />
            <Route path="/college/:id" component={(routerProps) => <CollegeDetails id={routerProps.match.params.id}/>} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
