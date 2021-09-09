
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import Home from "./Home";
import Profile from "./Pages/profile";


function App() {
  
   
  return (
    <div className="App">
      <BrowserRouter>
        <div className="content">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/login">
                <LogIn />
              </Route>

              <Route path="/signup">
                <SignUp />
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
