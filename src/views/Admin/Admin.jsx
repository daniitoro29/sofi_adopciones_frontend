import "./Admin.css";
import NavBar from "../NavBar/NavBar";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const navigate = useNavigate();

    const handleNavigateToUsers = () => {
        navigate("/users");
    };

    const handleNavigateToPets = () => {
        navigate("/pets");
    };

    return (
        <>
            <NavBar />
            <Button
                variant="contained"
                className="buttonForm"
                onClick={handleNavigateToUsers}
            >
                Usuarios
            </Button>
            <Button
                variant="contained"
                className="buttonForm"
                onClick={handleNavigateToPets}
            >
                Mascotas
            </Button>
        </>
    );
};

export default Admin;
