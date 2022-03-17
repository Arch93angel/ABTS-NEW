import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Body from './components/body';
import Header from './components/header';
import GroupList from './components/groups-list';
import Dashboard from './components/dashboard';

function Main() {
    return (
        <div className="main">
            <div className="header"><Header /></div>
            <Router>
                <Switch>
                    <Route exact path={'/'}>
                        <Body />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Main
