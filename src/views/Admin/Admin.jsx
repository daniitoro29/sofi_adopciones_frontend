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


const Admin = () => {
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
    };

    const handleNavigateToPets = () => {
        setIsPet(true);
        setIsUser(false);
        setIsAllPet(false);
        setIsParticipant(false)
        setIsCampaign(false);
    };

    const handleNavigateAllPets = () => {
        setIsAllPet(true);
        setIsPet(false);
        setIsUser(false);
        setIsParticipant(false);
        setIsCampaign(false);
    };

    const handleNavigateCampaigns = () => {
        setIsAllPet(false);
        setIsPet(false);
        setIsUser(false);
        setIsParticipant(false);
        setIsCampaign(true);
    }

    const handleNavigateParticipants = () => {
        setIsAllPet(false);
        setIsPet(false);
        setIsUser(false);
        setIsCampaign(false);
        setIsParticipant(true);
    }

    const handleNavigateInforme = () => {
        setIsAllPet(false);
        setIsPet(false);
        setIsUser(false);
        setIsCampaign(false);
        setIsParticipant(false);
        setIsInform(true)
    }

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
    };

    useEffect(() => {
        handleResetState();
    }, []);

    return (
        <>
            <div className="admin-container">




                <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                    <div className="sidebar">
                        <img src={logo5} alt="logo5" className="logoAdmin" />
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
            {
                isUser && <Users />
            }
            {
                isPet && <Pets />
            }
            {
                isAllPet && <AllPets />
            }
            {
                isCampaign && <Campaigns />
            }
                        {
                isParticipant && <Participants />
            }
                                    {
                isInform && <Reports />
            }


            {
                !isDrawerOpen &&
                <button type="button" className="button-menu" onClick={toggleDrawer(!isDrawerOpen)}>
                    Menú
                </button>
            }

        </>
    );
};

export default Admin;
