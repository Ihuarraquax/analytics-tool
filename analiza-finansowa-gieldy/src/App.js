import React from 'react';
import './App.css';
import Menu from './components/Menu'
import About from './components/main/About'
import Analyze from './components/main/Analyze'
import Indexes from './components/main/Indexes'
import Formulas from './components/main/Formulas'
import Tools from './components/main/Tools'
import Contact from './components/main/Contact'

import {
  Switch,
  Route
} from "react-router-dom";
function App() {
  return (
    <>
      <Menu />
      <Switch>
        <Route exact path="/" component={About}/>
        <Route path="/analiza" component={Analyze}/>
        <Route path="/indeksy" component={Indexes}/>
        <Route path="/wzory" component={Formulas}/>
        <Route path="/narzedzia" component={Tools}/>
        <Route path="/kontakt" component={Contact}/>
      </Switch>
    </>
  );
}

export default App;
