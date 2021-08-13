import React, { useEffect, useState } from 'react';
import './App.css';
import {Link,BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Main from './components/Main';
import Colleges from './components/Colleges';
import CollegeDetails from './components/CollegeDetails'
import StudentDetails from './components/StudentDetails'
function App() {
  return (
    <div className="App" style={{backgroundColor:"#161625"}}>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/colleges" component={Colleges} />
            <Route path="/college/:id" component={(routerProps) => <CollegeDetails id={routerProps.match.params.id}/>} />
            <Route path="/student/:id" component={(routerProps) => <StudentDetails id={routerProps.match.params.id}/>} />
          </Switch>
        </Router>
    </div>
  );
}

export default App;
