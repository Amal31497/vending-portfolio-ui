import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Product from "./pages/Product/Product";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Route
            path={[
              '/',
              '/Products'
            ]}
          >
            <Navbar />
          </Route>

          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/Products' component={Product} />
            <Route exact path='/Contact' component={Contact} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
