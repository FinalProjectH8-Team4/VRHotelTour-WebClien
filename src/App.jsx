import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap'

import logo from './assets/inepinn-logo.png'
import store from './store'
import FacilityDetail from './pages/FacilityDetail'
import RoomDetail from './pages/RoomDetail'
import Home from './pages/Home';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
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
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
