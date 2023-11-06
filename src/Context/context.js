import { createContext } from "react";
import {useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers, getPets, getVolunteers, getForm, getCampaigns, getParticipants } from "../redux/actions";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state?.users)  ;
    const pets = useSelector((state) => state?.pets)  ;
    const volunteers= useSelector((state) => state?.volunteers)  ;
    const form= useSelector((state) => state?.form)  ;
    const campaigns= useSelector((state) => state?.campaigns)  ;
    const participant= useSelector((state) => state?.participant)  ;


  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPets());
    dispatch(getVolunteers());
    dispatch(getForm());
    dispatch(getCampaigns());
    dispatch(getParticipants());
  }, [dispatch]);

  return (
    <UserContext.Provider value={{ users, pets }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };