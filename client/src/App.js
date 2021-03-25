import './App.css';
import Nav from './components/Nav';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Browse from './components/Browse';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path='/browse' component={Browse} />
          <Route path='/cart' component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
