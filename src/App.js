import { Route, Switch } from "react-router-dom";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import Welcome from "./views/Welcome/Welcome";
import Admin from "./views/Admin/Admin";
import FormCreateUser from "./views/FormCreateUser/FormCreateUser";;

function App() {
 return (
  <div className="App" style={{ width: "100%" }}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/register" component={FormCreateUser} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/welcome" component={Welcome} />
        <Route exact path="/admin" component={Admin} />
      </Switch>

  </div>
 );
}

export default App;
