import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap'

import logo from './assets/inepinn-logo.png'
import store from './store'
import FacilityDetail from './pages/FacilityDetail'
import HotelDetail from './pages/HotelDetail'
import RoomDetail from './pages/RoomDetail'
import Home from './pages/Home';
import BookRoom from './pages/BookRoom';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        {/* <Navbar fixed='top' bg="light" style={{alignContent:'center'}}>
          <Navbar.Brand as={Link} to='/'>
            <img
              src={logo}
              height="60"
              className="d-inline-block align-center"
              alt="InepInn"
            />
          </Navbar.Brand>
        </Navbar> */}
        <Nav className="justify-content-center fixed-top bg-white">
          <Nav.Item as={Link} to='/'>
          <img
              src={logo}
              height="70"
              className="d-inline-block align-center"
              alt="InepInn"
            />
          </Nav.Item>
        </Nav>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/facility/:idx'>
            <FacilityDetail />
          </Route>
          <Route path='/room/:roomType'>
            <RoomDetail />
          </Route>
          <Route path='/bookroom/:roomType'>
            <BookRoom />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
