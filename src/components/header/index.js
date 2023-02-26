import React, { useContext } from "react";
<<<<<<< HEAD
import { Menu, Image, Button, Icon } from "semantic-ui-react";
import { Link, useLocation, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import logout from "../../context/actions/auth/logout";
import { GlobalContext } from "../../context/Provider";
import isAuthenticated from "../../utils/isAuthenticated";
=======
import { Menu, Image, Button, Icon, Input } from "semantic-ui-react";
import { Link, useLocation, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import logout from "../../context/actions/auth/logout";
import { GlobalContext } from "../../context/Provider";
import isAuthenticated from "../../utils/isAuthenticated";
import searchContacts from "../../context/actions/contacts/searchContacts";
>>>>>>> a38cd17c33a8407cd58848f9a0936c7475ba66ae

const Header = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const { contactsDispatch: dispatch } = useContext(GlobalContext);

  const handleUserLogout = () => {
    logout(history)(dispatch);
  };
<<<<<<< HEAD

  return (
    <Menu secondary pointing className="mainMenu">
      <Link to="/">
        <Image className="logo" src={logo} />
      </Link>
      <Menu.Item position="right">
        <Button as={Link} to="/" className="menuBtn">
          Home
        </Button>
      </Menu.Item>
      {!isAuthenticated() && (
        <Menu.Item>
          <Button as={Link} to="/auth/login" className="menuBtn">
            Login
          </Button>
        </Menu.Item>
      )}
      {!isAuthenticated() && (
        <Menu.Item>
          <Button as={Link} to="/auth/register" className="menuBtn">
            Register
          </Button>
        </Menu.Item>
      )}
      {isAuthenticated() && (
        <Menu.Item>
          <Button as={Link} to="/user" className="menuBtn">
            User Profile
=======

  const onChange = (e, { value }) => {
    const searchText = value.trim().replace(/" "/g, "");

    searchContacts(searchText)(dispatch);
  };

  return (
    <Menu secondary pointing>
      <Image src={logo} width={60} />
      <Menu.Item as={Link} to="/" style={{ fontSize: 24 }}>
        TrulyContacts
      </Menu.Item>

      {isAuthenticated() && (
        <Menu.Item position="right">
          <Input
            style={{ width: 350 }}
            placeholder="Search Contacts"
            onChange={onChange}
          />
        </Menu.Item>
      )}

      {isAuthenticated() && (
        <Menu.Item position="right">
          <Button as={Link} to="/contacts/create" primary basic icon>
            <Icon name="add"></Icon>
            Create Contact
>>>>>>> a38cd17c33a8407cd58848f9a0936c7475ba66ae
          </Button>
        </Menu.Item>
      )}
      {isAuthenticated() && (
        <Menu.Item>
<<<<<<< HEAD
          <Button onClick={handleUserLogout} className="menuBtn">
=======
          {" "}
          <Button onClick={handleUserLogout} color="red" basic icon>
            <Icon name="log out"></Icon>
>>>>>>> a38cd17c33a8407cd58848f9a0936c7475ba66ae
            Logout
          </Button>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Header;
