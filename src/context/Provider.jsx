import React, { Children, createContext, useReducer } from "react";
import authInitialState from "./initialstates/authInitialState";
import contactsInitialState from "./initialstates/contactsInitialState";
import auth from "./reducers/auth";
import contacts from "./reducers/contacts";

export const GlobalContext = createContext({});
export const GlobalProvider = ({ children }) => {
  const [authState, authdispatch] = useReducer(auth, authInitialState);
  const [contactsState, contactsdispatch] = useReducer(
    contacts,
    contactsInitialState
  );

  return (
    <GlobalContext.Provider
      value={{
        authState,
        authdispatch,
        contactsState,
        contactsdispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
