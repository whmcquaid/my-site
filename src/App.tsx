import Header from './components/Header';
import ProjectCard from './components/ProjectCard';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from 'components/Home';

function App() {
  return (
    <div className='App-Container'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Projects' exact component={ProjectCard} />
          <Route path='/About' exact component={About} />
          <Route path='/Contact' exact component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
