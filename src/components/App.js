// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom'

const Home = ()=> <h1>Strona strartowa</h1>
const News = ()=> <h1>SAktualnosci</h1>
const Contact = ()=> <h1>Kotnakt</h1>

function App() {
  return (
    <Router>
     <div>
      <header>
        <nav>
          <ul>
            <li><NavLink to="/" exact activeClassName="home_selected">Start</NavLink></li>
            <li><NavLink to="/news" activeClassName="news_selected">News</NavLink></li>
            <li><NavLink to="/contact" activeClassName="contact_selected">Kontakt</NavLink></li>
          </ul>
        </nav>
      </header>
      <section>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/news" component={News}/>
      </section>
    </div>
    </Router>
  );
}

export default App;