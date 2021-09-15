
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Home from "./Home";
import Profile from "./Pages/profile";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext"

function App() {
  
   const {user} = useContext(AuthContext)
  return (
    <div className="App">
      <BrowserRouter>
        <div className="content">
            <Switch>
              <Route exact path="/">
                {user ? <Home /> : <LogIn />}
                {/* <Home /> */}
              </Route>

              <Route path="/login">
                {user ? <Redirect to="/" /> : <LogIn />}
              </Route>

              <Route path="/signup">
                {user ? <Redirect to="/" /> : <SignUp />}
              </Route>

              <Route path="/profiles/:name">
                <Profile />
              </Route>
              <Route path="/about">

              </Route>

            </Switch>

        </div>

      </BrowserRouter>
    </div>
  );
}

export default App;
