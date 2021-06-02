import './App.css';
import Nav from './components/Nav';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Browse from './components/Browse';
import Cart from './components/Cart';
import Searched from './components/Searched';
import Plate from './components/Plate';
import Checkout from './components/Checkout';
import Payment from './components/Payment';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Browse} />
          <Route path='/search/:search' component={Searched} />
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
