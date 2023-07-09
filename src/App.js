import { Route } from "react-router-dom";
import Home from "./views/Home/Home";
import Form from "./views/Form/Form";
import User from "./views/User/User";
import Login from "./views/Login/Login";
import Welcome from "./views/Welcome/Welcome";

function App() {
  return (
    <div className="App">

      <Route path="/home" render={() => <Home/>}/>

      <Route path="/register">
        <Form />
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
