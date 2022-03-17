import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './main';
import Homepage from './homepage';
import GroupList from './components/groups-list';
import EventList from './components/groups-list';
import Login from './components/login';
import Register from './components/register';
import { AuthProvider } from './hooks/useAuth';


function App() {


  const user = JSON.parse(localStorage.getItem('abts-user'));


  return (
    <AuthProvider user={user}>
      <Router>
        <Switch>
          <Route exact path={'/'}>
            <Main />
          </Route>
          <Route exact path={'/groups'}>
            <GroupList />
          </Route>
          <Route exact path={'/group/details/:id'}>
            <GroupList />
          </Route>
          <Route exact path={'/events'}>
            <EventList />
          </Route>
          <Route exact path={'/homepage'}>
            <Homepage />
          </Route>
          <Route path={'/login'}>
            <Login />
          </Route>
          <Route path={'/register'}>
            <Register />
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  )
}

export default App