import React from 'react';
import './App.css';

import Home from "./pages/Home";
import Propertys from "./pages/Propertys";
import About from "./pages/About";
import Covid from "./pages/Covid";
import Apply from "./pages/Apply";
import SingleProperty from "./pages/SingleProperty";
import Error from "./pages/Error";

import {Route, Switch} from 'react-router-dom';

import Navbar  from "./components/Navbar"

function App() {
  return (
  <>
   <Navbar />
   <Switch>
     <Route exact path="/"  component={Home} />
     <Route exact path="/properties/" component={Propertys} />

     <Route exact path="/properties/:slug" component={SingleProperty} />
     <Route component={Error} />
   </Switch>
  </>
  );
}

export default App;
