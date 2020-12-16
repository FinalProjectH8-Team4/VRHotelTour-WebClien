import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav } from 'react-bootstrap'
import logo from './assets/inepinn-logo.png'
import store from './store'
import FacilityDetail from './pages/FacilityDetail'
import RoomDetail from './pages/RoomDetail'
import Dashboard from './pages/Dashboard'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav className="justify-content-start fixed-top" style={{backgroundImage: 'linear-gradient(to left, rgba(245, 246, 252, 0.52), rgba(82, 58, 115, 1), rgba(35, 8, 53, 1), rgba(35, 8, 53, 1))'}}>
          <Nav.Item as={Link} to='/'>
            <div className="d-flex flex-row mt-3 ml-5">
              <h2 style={{fontStyle: 'italic', color: 'white'}}>Inep</h2><h2 style={{fontWeight: 'bold', color: 'white'}}>Inn</h2>
            </div>
          </Nav.Item>
        </Nav>
        <Switch>
          <Route path='/' exact>
            <Dashboard/>
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
