import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/Common/Button/Button";
import { AUTH_URL } from "../constants/requestUrl";
import { AppContext, AppContextType } from "../store/AppContext";

const LoginPage = () => {
  const { setToken } = useContext(AppContext) as AppContextType;

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("access_token")) {
      const urlHash = window.location.hash.slice(1);

      const urlParams = new URLSearchParams(urlHash);

      const urlToken = urlParams.get("access_token");

      // getSettings().then((res) => {
      //   console.log(res);
      // });

      if (urlToken) {
        localStorage.setItem("access_token", urlToken);
        setToken(urlToken);
        navigate("/");
      }
    } else {
      navigate("/");
    }
  }, [navigate, setToken]);

  return (
    <div className="app-container">
      <h1>Login With Wordpress.com</h1>
      <Button
        onClick={() => {
          window.location.href = AUTH_URL;
        }}
      >
        Login
      </Button>
    </div>
  );
};

export default LoginPage;
