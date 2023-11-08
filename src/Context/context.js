import { createContext } from "react";
import {useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers, getPets, getVolunteers, getForm, getCampaigns, getParticipants, getAdopter } from "../redux/actions";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
    const dispatch = useDispatch();
    const users = useSelector((state) => state?.users)  ;
    const pets = useSelector((state) => state?.pets)  ;
    const volunteers= useSelector((state) => state?.volunteers)  ;
    const form= useSelector((state) => state?.form)  ;
    const campaigns= useSelector((state) => state?.campaigns)  ;
    const participant= useSelector((state) => state?.participant)  ;
    const adopter = useSelector((state) => state?.adopter)  ;




  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPets());
    dispatch(getVolunteers());
    dispatch(getForm());
    dispatch(getCampaigns());
    dispatch(getParticipants());
    dispatch(getAdopter());
  }, [dispatch]);

  return (
    <UserContext.Provider value={{ users, pets, volunteers, form, campaigns, participant, adopter, isAuthenticated, setIsAuthenticated }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };