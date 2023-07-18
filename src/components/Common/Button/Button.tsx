import React from "react";
import Styles from "./styles.module.css";

interface ButtonProps {
  children: string;
  onClick?: () => void;
  outlined?: boolean;
}

const Button = ({ children, onClick, outlined }: ButtonProps) => {
  return (
    <button
      className={`${Styles["btn"]} ${
        outlined ? Styles["btn-outlined"] : Styles["btn-primary"]
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
