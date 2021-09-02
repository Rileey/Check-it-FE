
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LogIn from "./LogIn";
import SignUp from "./SignUp";

function App() {
  
  
   
  return (
    <div className="App">
      <BrowserRouter>
        <div className="content">
            <Switch>
              <Route exact path="/">

              </Route>

              <Route path="/login">
                <LogIn />
              </Route>

              <Route path="/signup">
                <SignUp />
              </Route>

              <Route path="/dishes/:id">

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
