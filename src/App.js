import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './components/Home'
import About from './components/About'
import Footer from './components/Footer'
import ContactUs from './components/ContactUs'
import Navbarr from './components/Navbarr'
import Services from './components/Services'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbarr />
        <Switch>
          {/* <Route path="/home" component={Home} /> */}
          <Route exact path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/services" component={Services} />
          <Route path="/" component={Home} />
          <Route component={Error} />
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
