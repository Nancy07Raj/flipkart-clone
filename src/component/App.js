import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Catagories from './catagories';
import {MobileCard, MobileView, Fashion, Electronics, House, Appliances} from './catagoriesComponents';
import Header from './Header'
import Home from './HomeCard/Home.js'

function App() {
  return (<div className='AppContainer'>
  <Router>
    <Header />
    <Catagories />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/Mobiles' component={MobileCard} />
      <Route path='/MobileView' component={MobileView}/>
      <Route path='/Fashion' component={Fashion} />
        <Route path='/Home' component={Home} />
      <Route path='/Electronics' component={Electronics} />
      <Route path='/House' component={House} />
      <Route path='/Appliances' component={Appliances} />
    </Switch>
    </Router>
  </div>)
}

export default App;
