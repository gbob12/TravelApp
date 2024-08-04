
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

import Contact from './pages/contact';
import About from './pages/About';

import home from './pages/home';
import products from './pages/product';
import background from '../Pictures/timthumb2.jpg';
import services from './pages/services';








function App() {
  return (

      <div className="App">
          <Router>

                  <Navbar/>

                      <Switch>
                          <Route path="/" exact component={home}/>
                          <Route path="/services" exact component={services}/>
                          <Route path="/products" exact component={products}/>
                          <Route path="/contact" exact component={Contact}/>
                          <Route path="/about" exact component={About}/>

                      </Switch>

                      <Footer/>
          </Router>
      </div>

);
}


export default App;
