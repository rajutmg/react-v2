import React, { useContext, useEffect } from "react";
import Header from "../../components/header";
import getContacts from "../../context/actions/contacts/getContacts";
import { GlobalContext } from "../../context/Provider";
import { useHistory } from "react-router-dom";

const ContactsContainer = () => {
  const context = useContext(GlobalContext);

  const history = useHistory();

  useEffect(() => {
    getContacts(history);
  }, []);
  console.log("context", context);

  return (
    <div>
      <Header />
      <h1>Contacts</h1>
    </div>
  );
};

export default ContactsContainer;
