import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import {Header} from './Header';
import {Footer} from './Footer';
import { About } from './About';
import  Home  from './Home';
import Deck from './Deck'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const style ={
        paddingBottom: '50px'
    }
    return (
        <>
            <Header />
            <div style={style}>
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/deck" component={Deck}/>
                        <Route path="/about" component={About} />
                    </Switch>
                </BrowserRouter>
            </div>
            <Footer />
        </>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)