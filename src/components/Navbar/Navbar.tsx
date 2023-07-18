import React, { useCallback, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext, AppContextType } from "../../store/AppContext";

import Styles from "./style.module.css";

const Navbar = () => {
  const { token, setToken } = useContext(AppContext) as AppContextType;

  const logout = useCallback(() => {
    localStorage.removeItem("access_token");
    setToken("");
  }, [setToken]);

  return (
    <div className={Styles.navbar}>
      <div className={Styles.title}>React Wordpress Demo</div>
      <div className={Styles.spacer}></div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-post">Create Post</Link>
        </li>
        <li>
          {token ? (
            <Link to="/login" onClick={logout}>
              Logout
            </Link>
          ) : (
            <Link to="/login">Login</Link>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
