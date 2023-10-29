import { createContext } from "react";
import {useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers, getPets } from "../redux/actions";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state?.users)  ;
    const pets = useSelector((state) => state?.pets)  ;


  useEffect(() => {
    dispatch(getUsers());
    dispatch(getPets());
  }, [dispatch]);

  return (
    <UserContext.Provider value={{ users, pets }}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };