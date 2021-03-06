// import logo from './logo.svg';
import './App.css';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Course from './Component/Course/Course'
import Mentor from './Component/Mentor/Mentor'
import NotFound from './Component/NotFound/Notfound';
import Footer from './Component/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Component/Header/Header';
import UpcommingReserch from './Component/UpcommingReserch/UpcommingReserch';
import OngoingReserch from './Component/OngoingReserch/OngoingReserch';
import PublishedReserch from './Component/PublishedReserch/PublishedReserch';
import Accountcreation from './Component/Accountcreation/Accountcreation';
import Login from './Component/Login/Login';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Profile from './Component/Profile/Profile';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import { StickyNav } from 'react-js-stickynav';
import CheckOut from './Component/CheckOut/CheckOut';
import AuthProvider from './Component/context/AuthProvider';
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

function App() {

  return (

    <div>

      <AuthProvider>
        <Router>
          <Header></Header>

          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/about">
              <About></About>
            </Route>
            <PrivateRoute exact path="/course">
              <Course></Course>
            </PrivateRoute>
            <Route exact path="/upcommingreserch">
              <UpcommingReserch></UpcommingReserch>
            </Route>
            <Route exact path="/ongoingreserch">
              <OngoingReserch></OngoingReserch>
            </Route>
            <Route exact path="/publishedreserch">
              <PublishedReserch></PublishedReserch>
            </Route>
            <Route exact path="/mentor">
              <Mentor></Mentor>
            </Route>
            <Route exact path="/accountcreation">
              <Accountcreation></Accountcreation>
            </Route>
            <Route exact path="/profile">
              <Profile></Profile>
            </Route>
            <Route exact path="/CheckOut">
              <CheckOut></CheckOut>
            </Route>
            <Route exact path="/login">
              <Login ></Login>
            </Route>

            <Route exact path="*">
              <NotFound></NotFound>
            </Route>


          </Switch>

        </Router>
      </AuthProvider>

      <MessengerCustomerChat
        pageId="110291651516813" appId="1288428648340884" />
      <br />
      <br />
      <br />
      <Footer></Footer>
    </div>


  );
}

export default App;
