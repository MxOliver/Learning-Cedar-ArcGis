import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Landing from './Landing';

class App extends Component {

  render(){
    return (
      <div>
       <BrowserRouter>
       <div className="App">
       <main className="content">
       <Switch>
         <Route exact path="/" component={Landing} />
       </Switch>
       </main>
       </div>
       </BrowserRouter>
      </div>
    );
  }

}


export default App;