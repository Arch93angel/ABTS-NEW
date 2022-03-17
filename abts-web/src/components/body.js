import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GroupList from './groups-list';

// import { useAuth } from '../hooks/useAuth';

import Dashboard from './dashboard';
import Login from './login';


function Body() {

    // const { authData } = useAuth();
    return (

        <div className='body'>
            <Switch>
                <Route exact path={'/'}>
                    <Dashboard />
                </Route>
                <Route path={'/groups'}>
                    <GroupList />
                </Route>
            </Switch>
        </div>
    )
}

export default Body