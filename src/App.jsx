import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Components/Pages/Home';
import Products from './Components/Pages/Products';
import Services from './Components/Pages/Services';
import SignUp from './Components/Pages/SignUp';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' exact component={Services} />
          <Route path='/products' exact component={Products} />
          <Route path='/sign-up' exact component={SignUp} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
