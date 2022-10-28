import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/pages/home';
import Company from './components/pages/company';
import Contact from './components/pages/contact';
import NewProject from './components/pages/newproject';
import Projects from './components/pages/projects';

import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'



function App() {
  return (
    <Router>

      <Navbar />

      <Container customClass="min-height">
        <Routes>

          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/company" element={<Company />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/newproject" element={<NewProject />}></Route>

        </Routes>





      </Container>

      <Footer />
    </Router>
  );
}

export default App;
