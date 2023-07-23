import { Route, Switch } from "react-router-dom";
import Home from "./views/Home/Home";
import FormCreateUser from "./views/FormCreateUser/FormCreateUser";
import User from "./views/User/User";
import Login from "./views/Login/Login";
import Welcome from "./views/Welcome/Welcome";

function App() {
 return (
  <div className="App" style={{ width: "100%" }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={FormCreateUser} />
        <Route exact path="/users" component={User} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/welcome" component={Welcome} />
      </Switch>

  </div>
 );
}

export default App;
