import React, { Component } from 'react';
import { Router, Switch, Route } from 'react-router-dom'
import Landing from './Landing';

class App extends Component {

  render(){
    return (
      <div>
       <Router>
       <div className="App">
       <main className="content">
       <Switch>
         <Route exact path="/" component={Landing} />
       </Switch>
       </main>
       </div>
       </Router>
      </div>
    );
  }

}


export default App;