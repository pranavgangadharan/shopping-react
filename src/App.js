import './App.css';
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import Example from './components/cart';
import {useState} from 'react'
import ItemList from './components/items';

function App(props) {
  const [itemCount, setCount] = useState(0)
  let cartCount = (cnt) => {
      setCount(cnt);
  }
  return (
    <Router>
    <div>
      <ul>
  <li><Link to='/'>Home</Link></li>
  <li id="cart"><Link to='/cart'>Cart ({itemCount})</Link></li>
  
</ul>
  <div className="App">
    <Switch>
      <Route exact path='/'><ItemList cartFun={cartCount}></ItemList></Route>
      <Route exact path='/cart'>
        <Example cartFun={cartCount}>
        </Example>
      </Route>
    </Switch>
  </div>
    </div>
    </Router>

  );
}

export default App;
