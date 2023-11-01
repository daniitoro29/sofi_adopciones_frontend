import { Route, Routes  } from "react-router-dom";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import Welcome from "./views/Welcome/Welcome";
import Admin from "./views/Admin/Admin";
import Users from './views/Admin/Components/Users/Users';
import Pets from './views/Admin/Components/Pets/Pets';
import FormCreateUser from "./views/FormCreateUser/FormCreateUser";
import Gallery from "./views/Gallery/Gallery";
import AdoptionForm from "./views/AdoptionForm/AdoptionForm";

function App() {
 return (
  <div className="App" style={{ width: "100%" }}>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/register" element={<FormCreateUser/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/welcome" element={<Welcome/>} />
        <Route exact path="/admin" element={<Admin/>} />
        <Route exact path="/users" element={<Users/>} />
        <Route exact path="/pets" element={<Pets/>} />
        <Route exact path="/gallery" element={<Gallery/>} />
        <Route exact path="/adoptions" element={<AdoptionForm/>} />
      </Routes>
  </div>
 );
}

export default App;
