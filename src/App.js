import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Services from './components/Services'
import Navbar from './components/Navbar'
import Page404 from './components/Page404'


class App extends Component {
  render() {
    return (
        <div>
          <div className="App">
            <Navbar/>
          </div>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/services' component={Services}/>
            <Route component={Page404}/>
          </Switch>
        </div>

    );
  }
}

export default App;
