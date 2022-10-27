import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/home';
import Company from './components/pages/company';
import Contact from './components/pages/contact';
import NewProject from './components/pages/newproject';

import Container from './components/layout/Container';




function App() {
  return (
    <Router>

      <ul>
        <div>
          <Link to='/'>Home</Link>
          <Link to='/company'>Empresa</Link>
          <Link to='/contact'>Contato</Link>
          <Link to='/newproject'>Novo Projeto</Link>
        </div>
      </ul>


      <Container customClass="min-height">
        <Routes>

          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/company" element={<Company />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/newproject" element={<NewProject />}></Route>

        </Routes>





      </Container>
    </Router>
  );
}

export default App;
