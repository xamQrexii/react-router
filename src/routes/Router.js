import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header/Header';
import Home from '../screens/Home/Home';
import About from '../screens/About/About';
import Profile from '../screens/Profile/Profile';
import Contact from '../screens/Contact/Contact';

class Router extends Component {
    render() {
        return(
            <BrowserRouter>
                
                <Header />
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route path='/about' component={About}/>
                    <Route path='/profile' component={Profile}/>
                    <Route exact path='/contact' component={Contact}/>
                </Switch>
                
            </BrowserRouter>
        );
    }
}

export default Router;