import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import AddContact from "./AddContact";
import Home from "./Home";
import EditContact from "./EditContact";
import './app.css';

function Example() {
    return (
        <Router>
        <>
        <Nav />
        <Switch>
           <Route path="/" exact component={Home} />
           <Route path="/addContact" exact component={AddContact} />
           <Route path="/edit/:id" exact component={EditContact} />
        </Switch>
        <Footer />
        </>
        </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
