import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

import Homepage from "./pages/Homepage";
import Projects from "./pages/Projects";
import CreateProject from "./pages/CreateProject";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/projects" component={Projects} />
        <Route path="/create" component={CreateProject} />
      </Switch>
    </Router>
  );
}

export default App;
