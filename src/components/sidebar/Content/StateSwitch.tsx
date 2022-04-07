import { appContext } from "../../AppContextProvider";
import React, { useContext } from "react";

const StateSwitch: React.FC = () => {

  const { state, dispatch } = useContext(appContext)

  return (
    <>
      <div className="w-full px-10" >
        <label htmlFor="toogler-darkmode" className="flex items-center cursor-pointer">
          <div className="relative">
            <input id="toogler-darkmode" onChange={() => dispatch({ type: "toggle_dark_mode" })} checked={state.darkMode} type="checkbox" className="sr-only" />
            <div className="w-8 h-3 bg-gray-400 rounded-full shadow-inner"></div>
            <div className="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
          </div>
          <div className="ml-3 text-light text-sm font-light">Dark Mode</div>
        </label>
      </div>
      <div className="w-full px-10" >
        <label htmlFor="toogler-idiom" className="flex items-center cursor-pointer">
          <div className="relative">
            <input id="toogler-idiom" onChange={() => dispatch({ type: "toggle_idiom" })} checked={state.eng} type="checkbox" className="sr-only" />
            <div className="w-8 h-3 bg-gray-400 rounded-full shadow-inner"></div>
            <div className="dot absolute w-5 h-5 bg-white rounded-full shadow -left-1 -top-1 transition"></div>
          </div>
          <div className="ml-3 text-light text-sm font-light">ESP / ENG</div>
        </label>
      </div>
    </>
  );
};

export default StateSwitch;
