import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Catagories from './catagories';
import {MobileCard, MobileView, Fashion} from './catagoriesComponents';
import Deal from './HomeCard/Deal.js'
import Header from './Header'

function App() {
  return (<div className='AppContainer'>
  <Router>
    <Header />
    <Catagories />
    <Switch>
      <Route path='/Mobiles' component={MobileCard} />
      <Route path='/MobileView' component={MobileView}/>
      <Route path='/Fashion' component={Fashion} />
      <Route path='/Home' component={Deal} />
    </Switch>
    </Router>
    <Deal />
  </div>)
}

export default App;
