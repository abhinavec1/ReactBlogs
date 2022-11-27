import Topbar from "./components/topbar/Topbar";
import Homepage from "./pages/homepage/Homepage";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";

function App() {
  return (
    <Router history={history}>
      <Topbar />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/posts">
          <Homepage />
        </Route>
        <Route path="/post/:id">
          <Single />
        </Route>
        <Route path="/write/:blogid?">
          <Write />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
