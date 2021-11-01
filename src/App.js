import logo from './logo.svg';
import './App.css';
import Home from './component/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './component/Header/Header';
import Login from './component/Login/Login';
import About from './component/About/About';
import Footer from './component/Footer/Footer';
import MyBooking from './component/MyBooking/MyBooking';
import AllBooking from './component/AllBooking/AllBooking';
import PlaceBook from './component/PlaceBook/PlaceBook';
import AuthProvider from './Context/authProvider';
import PrivateRoute from './component/PrivateRoute/PrivateRoute';
import NotFound from './component/NotFound/NotFound';



function App() {
  return (
    <div>

      <AuthProvider>
        <Router>
          <Header></Header>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path='/home'>
              <Home></Home>
            </Route>

            <PrivateRoute path='/mybooking'>
              <MyBooking></MyBooking>
            </PrivateRoute>

            <PrivateRoute path='/allbooking'>
              <AllBooking></AllBooking>
            </PrivateRoute>

            <Route path='/login'>
              <Login></Login>
            </Route>

            <Route path='/about'>
              <About></About>
            </Route>
            <PrivateRoute path='/trips/:id'>
              <PlaceBook></PlaceBook>
            </PrivateRoute>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
