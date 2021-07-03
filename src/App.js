import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import { Route, Switch } from "react-router-dom";
function App() {
  
  return (
    <div className="App">
      <Switch>
        <Route exact path to="/">
          <SignUp />
        </Route>
        <Route to="homepage">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
