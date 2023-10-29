import { createContext } from "react";
import {useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getUsers } from "../redux/actions";

const UserContext = createContext();

const UserProvider = ({ children }) => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state?.users)  ;


  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <UserContext.Provider value={users}>
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserProvider };