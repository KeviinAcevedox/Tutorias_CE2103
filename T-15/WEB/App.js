import Navbar from './Navbar';
import Home from './Home';
import NewCourse from  './NewCourse';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/new-course">
              <NewCourse></NewCourse>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>

  );
}

export default App;
