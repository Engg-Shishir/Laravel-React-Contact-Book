import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Nav from "./Nav";
import Contacts from "./Contacts";
import AddContact from "./AddContact";

function Example() {
    return (
        <Router>
        <>
        <Nav />
        <Switch>
           <Route path="/" exact component={Contacts} />
           <Route path="/addContact" exact component={AddContact} />
        </Switch>
        </>
        </Router>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
