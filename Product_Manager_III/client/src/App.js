import './App.css';
import React from 'react';
import Main from './views/Main';
import Detail from './views/Detail';
import Update from './views/Update';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Switch>

    <Route path="/product/:id/edit">
      <Update />
    </Route>

        <Route path="/:id">
          <Detail />
          
        </Route>

        <Route exact path="/">
          <Main />
        </Route>
      </Switch>
    </div>
  </BrowserRouter>
  );
}

export default App;
