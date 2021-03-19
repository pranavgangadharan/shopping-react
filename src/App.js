import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import itemList from './components/items';
import Example from './components/cart';

function App() {
  return (
    <Router>
    <div>
      <ul>
  <li><Link to='/'>Home</Link></li>
  <li id="cart"><Link to='/cart'>Cart</Link></li>
</ul>
  <div class="App">
    <Switch>
      <Route exact path='/' component={itemList}></Route>
      <Route exact path='/cart' component={Example}></Route>
      
    </Switch>
  </div>
    </div>
    </Router>

  );
}

export default App;
