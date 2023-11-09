import React, { useState, useEffect } from "react";
import { Drawer, List, ListItem, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./Admin.css";
import logo5 from "../../assets/img/logo5.png";
import Users from "./Components/Users/Users";
import Pets from "./Components/Pets/Pets";
import AllPets from "./Components/AllPets/AllPets";
import Campaigns from "./Components/Campaigns/Campaigns";
import Participants from "./Components/Participants/Participants";
import Reports from "./Components/Reports/Reports";

const Volunteer = () => {
    const navigate = useNavigate();
    const [isDrawerOpen, setDrawerOpen] = useState(true);
    const [isPet, setIsPet] = useState(false);
    const [isAllPet, setIsAllPet] = useState(false);
    const [isCampaign, setIsCampaign] = useState(false);

    const handleNavigateToPets = () => {
        setIsPet(true);
        setIsAllPet(false);
        setIsCampaign(false);
    };

    const handleNavigateAllPets = () => {
        setIsAllPet(true);
        setIsPet(false);
        setIsCampaign(false);
    };

    const handleNavigateCampaigns = () => {
        setIsAllPet(false);
        setIsPet(false);
        setIsCampaign(true);
    };

    const toggleDrawer = (open) => (event) => {
        if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
            return;
        }
        setDrawerOpen(open);
    };

    const handleResetState = () => {
        setIsAllPet(false);
        setIsPet(false);
        setIsCampaign(false);
    };

    useEffect(() => {
        handleResetState();
    }, []);

    const rol = localStorage.getItem('rolUser');
    
    if (rol !== '2') {
        navigate('/login'); 
        return null; 
    }

    return (
        <>
            <div className="admin-container">
                <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                    <div className="sidebar">
                        <img src={logo5} alt="logo5" className="logoAdmin" />
                        <List>
                            <ListItem button onClick={handleNavigateToPets}>
                                <ListItemText primary="Registrar mascotas" />
                            </ListItem>
                            <ListItem button onClick={handleNavigateAllPets}>
                                <ListItemText primary="Todas las mascotas" />
                            </ListItem>
                            <ListItem button onClick={handleNavigateCampaigns}>
                                <ListItemText primary="Campañas" />
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </div>

            {isPet && <Pets />}
            {isAllPet && <AllPets />}
            {isCampaign && <Campaigns />}

            {!isDrawerOpen && (
                <button type="button" className="button-menu" onClick={toggleDrawer(!isDrawerOpen)}>
                    Menú
                </button>
            )}
        </>
    );
};

export default Volunteer;
