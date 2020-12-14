import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store'
import FacilityDetail from './pages/FacilityDetail'
import HotelDetail from './pages/HotelDetail'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/facility/:idx'>
            <FacilityDetail />
          </Route>
          <Route path='/'>
            <HotelDetail />
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
