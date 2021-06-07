import './App.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Nav from './components/Nav';
import Browse from './components/Browse';
import Searched from './components/Searched';
import Favorites from './components/Favorites';
import Plate from './components/Plate';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Payment from './components/Payment';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path='/' component={Browse} />
          <Route path='/search/:search' component={Searched} />
          <Route path='/favorites' component={Favorites} />
          <Route path='/plate/:name' component={Plate} />
          <Route path='/cart' component={Cart} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/payment' component={Payment} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
