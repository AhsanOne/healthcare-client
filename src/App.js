import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Appoinment from './components/Appoinment/Appoinment';
import Banner from './components/Banner/Banner';
import Blogs from './components/Blogs/Blogs';
import AuthProvider from './components/context/AuthProvider';
import Doctors from './components/Doctors/Doctors';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Register from './components/Register/Register';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import Services from './components/Services/Services';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Banner></Banner>
              <Services></Services>
              <Doctors></Doctors>
              <Appoinment></Appoinment>
            </Route>
            <Route exact path="/home">
              <Banner></Banner>
              <Services></Services>
              <Doctors></Doctors>
              <Appoinment></Appoinment>
            </Route>
            <PrivateRoute exact path="/services/:serviceId">
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route exact path="/about">
              <About></About>
            </Route>
            <PrivateRoute exact path="/blogs">
              <Blogs></Blogs>
            </PrivateRoute>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
