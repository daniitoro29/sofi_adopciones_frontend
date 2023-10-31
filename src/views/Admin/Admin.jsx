import React, { useState } from "react";
import { Button, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import logo5 from "../../assets/img/logo5.png";

const Admin = () => {
    const navigate = useNavigate();
    const [isDrawerOpen, setDrawerOpen] = useState(true);

    const handleNavigateToUsers = () => {
        navigate("/users");
    };

    const handleNavigateToPets = () => {
        navigate("/pets");
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setDrawerOpen(open);
    };

    return (
        <>
            <div className="admin-container">
                <Button variant="contained" className="toggle-button" onClick={toggleDrawer(!isDrawerOpen)}>
                    Abrir Barra de Navegación
                </Button>

                <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                    <div className="sidebar">
                    <img src={logo5} alt="logo5" className="logoAdmin" />
                        <List>
                            <ListItem button onClick={handleNavigateToUsers}>
                                <ListItemText primary="Usuarios" />
                            </ListItem>
                            <ListItem button onClick={handleNavigateToPets}>
                                <ListItemText primary="Mascotas" />
                            </ListItem>
                            
                        </List>
                        <Button
                            variant="contained"
                            onClick={() => console.log("Botón adicional")}
                            className="additional-button"
                        >
                            Otra acción
                        </Button>
                    </div>
                </Drawer>
            </div>
        </>
    );
};

export default Admin;
