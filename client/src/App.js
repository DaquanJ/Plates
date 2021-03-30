import './App.css';
import Nav from './components/Nav';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Browse from './components/Browse';
import Cart from './components/Cart';
import Searched from './components/Searched';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/' exact component={Browse} />
          <Route path='/cart' component={Cart} />
          <Route path='/search/:search' component={Searched} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
