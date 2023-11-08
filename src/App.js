import { Route, Routes  } from "react-router-dom";
import Login from "./views/Login/Login";
import Home from "./views/Home/Home";
import Admin from "./views/Admin/Admin";
import Users from './views/Admin/Components/Users/Users';
import Pets from './views/Admin/Components/Pets/Pets';
import FormCreateUser from "./views/FormCreateUser/FormCreateUser";
import Gallery from "./views/Gallery/Gallery";
import AdoptionForm from "./views/AdoptionForm/AdoptionForm";
import AllPets from "./views/Admin/Components/AllPets/AllPets";
import Campaña from "./views/Campanas/Campanas";
import Volunteer from "./views/Admin/Volunteer";

function App() {
 return (
  <div className="App" style={{ width: "100%" }}>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/register" element={<FormCreateUser/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/admin" element={<Admin/>} />
        <Route exact path="/users" element={<Users/>} />
        <Route exact path="/pets" element={<Pets/>} />
        <Route exact path="/gallery" element={<Gallery/>} />
        <Route exact path="/adoptions" element={<AdoptionForm/>} />
        <Route exact path="/allpets" element={<AllPets/>} />
        <Route exact path="/campana" element={<Campaña/>} />
        <Route exact path="/volunteer" element={<Volunteer/>} />
      </Routes>
  </div>
 );
}

export default App;
