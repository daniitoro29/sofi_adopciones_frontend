import { Route } from "react-router-dom";
import Home from "./views/Home/Home";
import FormCreateUser from "./views/FormCreateUser/FormCreateUser";
import User from "./views/User/User";
import Login from "./views/Login/Login";
import Welcome from "./views/Welcome/Welcome";

function App() {
  return (
    <div className="App" style={{ width: "100%"}}>

      <Route path="/" render={() => <Home/>}/>

      <Route path="/register">
        <FormCreateUser />
      </Route>
      <Route path="/users">
        <User />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/welcome">
        <Welcome />
      </Route>
    </div>
  );
}

export default App;
