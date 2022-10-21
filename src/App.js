import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/home';
import Company from './components/pages/company';
import Contact from './components/pages/contact';
import NewProject from './components/pages/newproject';


function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>
      <Conteiner>
        <Routes>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/company">
            <Company />
            <Route exact path="/contato">
              <Contato />
              <Route exact path="/newproject">
                <NewProject />
              </Route>
            </Route>
          </Route>
        </Routes>
      </Conteiner>

      <footer />
    </Router>
  );
}

export default App;
