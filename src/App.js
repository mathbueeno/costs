import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <Router>
      <ul>
        <li>Home</li>
        <li>Contato</li>
      </ul>

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


      <footer />
    </Router>
  );
}

export default App;
