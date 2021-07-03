import SignUp from "./components/SignUp";
import HomePage from "./components/HomePage";
import { Redirect, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path to="/">
          {localStorage.getItem("pinCode") ? (
            <Redirect to="/homepage" />
          ) : (
            <SignUp />
          )}
        </Route>
        <Route to="homepage">
          <HomePage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
