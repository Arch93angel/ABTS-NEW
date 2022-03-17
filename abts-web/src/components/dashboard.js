import React from 'react';
import { Switch, Route } from 'react-router-dom';
import GroupDetail from './group-detail';
import EventDetail from './event-details';
import EventList from './event-list';
import Login from './login';
import Register from './register';

function Dashboard() {
    return (
        // <Switch>

        //     {/* <Route path={'/groups/details/:id'}>
        //         <GroupDetail />
        //     </Route>
        //     <Route path={'/events'}>
        //         <EventList />
        //     </Route>
        //     <Route path={'/event/details/:id'}>
        //         <EventDetail />
        //     </Route>
        //     <Route path={'/login'}>
        //         <Login />
        //     </Route>
        //     <Route path={'/register'}>
        //         <Register />
        //     </Route> */}
        // </Switch>
        <div><h1>Dashboard in here</h1></div>

    )
}

export default Dashboard