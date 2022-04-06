import React, { useContext } from "react";
import { appContext } from "../AppContextProvider";

interface Props {
  children: React.ReactNode;
  type?: "submit" | "button" | "reset";
  action?: () => void;
}

const Button: React.FC<Props> = ({ children, type, action }) => {
  const { state } = useContext(appContext);

  if (state.darkMode) {
    return (
      <button
        type={type ?? "button"}
        onClick={action ?? undefined}
        className="bg-transparent border-2 border-lightBg py-2 px-4 hover:transition hover:bg-darkBg text-light text-center font-semibold"
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        type={type ?? "button"}
        onClick={action ?? undefined}
        className="bg-transparent border-2 border-dark py-2 px-4 hover:transition hover:bg-lightBg text-dark text-center font-semibold"
      >
        {children}
      </button>
    );
  }
};

export default Button;
