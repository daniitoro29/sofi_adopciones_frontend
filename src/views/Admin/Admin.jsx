import React, { useState, useEffect } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import "./Admin.css";
import logo5 from "../../assets/img/logo5.png";
import Users from "./Components/Users/Users";
import Pets from "./Components/Pets/Pets";
import AllPets from "./Components/AllPets/AllPets";
import Campaigns from "./Components/Campaigns/Campaigns";
import Participants from "./Components/Participants/Participants";
import Reports from "./Components/Reports/Reports";
import Menu from "../../assets/img/menu.svg";
import { useNavigate } from "react-router-dom";

const Admin = () => {
    const navigate = useNavigate();
    const [isDrawerOpen, setDrawerOpen] = useState(true);
    const [isUser, setIsUser] = useState(false);
    const [isPet, setIsPet] = useState(false);
    const [isAllPet, setIsAllPet] = useState(false);
    const [isCampaign, setIsCampaign] = useState(false);
    const [isParticipant, setIsParticipant] = useState(false);
    const [isInform, setIsInform] = useState(false);

    const handleNavigateToUsers = () => {
        setIsUser(true);
        setIsPet(false);
        setIsAllPet(false);
        setIsParticipant(false);
        setIsCampaign(false);
        setIsInform(false);
    };

    const handleNavigateToPets = () => {
        setIsPet(true);
        setIsUser(false);
        setIsAllPet(false);
        setIsParticipant(false);
        setIsCampaign(false);
        setIsInform(false);
    };

    const handleNavigateAllPets = () => {
        setIsAllPet(true);
        setIsPet(false);
        setIsUser(false);
        setIsParticipant(false);
        setIsCampaign(false);
        setIsInform(false);
    };

    const handleNavigateCampaigns = () => {
        setIsAllPet(false);
        setIsPet(false);
        setIsUser(false);
        setIsParticipant(false);
        setIsCampaign(true);
        setIsInform(false);
    };

    const handleNavigateParticipants = () => {
        setIsAllPet(false);
        setIsPet(false);
        setIsUser(false);
        setIsCampaign(false);
        setIsParticipant(true);
        setIsInform(false);
    };

    const handleNavigateInforme = () => {
        setIsAllPet(false);
        setIsPet(false);
        setIsUser(false);
        setIsCampaign(false);
        setIsParticipant(false);
        setIsInform(true);
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleResetState = () => {
        setIsUser(false);
        setIsPet(false);
        setIsAllPet(false);
        setIsCampaign(false);
        setIsParticipant(false);
        setIsInform(false);
    };

    useEffect(() => {
        handleResetState();
    }, []);

    const rol = localStorage.getItem('rolUser');

    // Redirige al usuario a la página de inicio de sesión si el rol no es igual a 1
    useEffect(() => {
        if (rol !== '1') {
            navigate('/login');
        }
    }, [rol]);

    return (
        <>
            {rol === '1' && (
                <div className="admin-container">
                    <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                        <div className="sidebar">
                            <a href="/">
                                <img src={logo5} alt="logo5" className="logoAdmin" />
                            </a>
                            <List>
                                <ListItem button onClick={handleNavigateToUsers}>
                                    <ListItemText primary="Usuarios" />
                                </ListItem>
                                <ListItem button onClick={handleNavigateToPets}>
                                    <ListItemText primary="Registrar mascotas" />
                                </ListItem>
                                <ListItem button onClick={handleNavigateAllPets}>
                                    <ListItemText primary="Todas las mascotas" />
                                </ListItem>
                                <ListItem button onClick={handleNavigateCampaigns}>
                                    <ListItemText primary="Campañas" />
                                </ListItem>
                                <ListItem button onClick={handleNavigateParticipants}>
                                    <ListItemText primary="Participantes" />
                                </ListItem>
                                <ListItem button onClick={handleNavigateInforme}>
                                    <ListItemText primary="Informe participantes" />
                                </ListItem>
                            </List>
                        </div>
                    </Drawer>
                </div>
            )}
            {rol === '1' && !isDrawerOpen && (
                <div className="container-button_sidebar">
                    <img src={Menu} alt="Menu" className="sidebar_menu_img" onClick={toggleDrawer(!isDrawerOpen)} />
                </div>
            )}
            {rol === '1' && (
                <div>
                    {isUser && <Users />}
                    {isPet && <Pets />}
                    {isAllPet && <AllPets />}
                    {isCampaign && <Campaigns />}
                    {isParticipant && <Participants />}
                    {isInform && <Reports />}
                </div>
            )
            }
        </>
    );
};

export default Admin;
