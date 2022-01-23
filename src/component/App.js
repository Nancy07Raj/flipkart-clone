import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Catagories from './catagories';
import {MobileCard} from './catagoriesComponents';
import Header from './Header'

function App() {
  return (<div className='AppContainer'>
  <Router>
    <Header />
    <Catagories />
    <Switch>
      <Route path='/Mobiles' component={MobileCard} />
    </Switch>
    </Router>
  </div>)
}

export default App;
