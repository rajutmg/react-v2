import React, { useContext } from "react";
import { Menu, Image, Button, Icon } from "semantic-ui-react";
import { Link, useLocation, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import logout from "../../context/actions/auth/logout";
import { GlobalContext } from "../../context/Provider";
import isAuthenticated from "../../utils/isAuthenticated";

const Header = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const { contactsDispatch: dispatch } = useContext(GlobalContext);

  const handleUserLogout = () => {
    logout(history)(dispatch);
  };

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
          </Button>
        </Menu.Item>
      )}
      {isAuthenticated() && (
        <Menu.Item>
          <Button onClick={handleUserLogout} className="menuBtn">
            Logout
          </Button>
        </Menu.Item>
      )}
    </Menu>
  );
};

export default Header;
