import React from "react";
import PreviusExperienceListItem from "./PreviusExpereinceListItem";
import Data from "./theJourneySoFar.json";

interface Props {
  darkMode: boolean;
  eng: boolean
}

const Work: React.FC<Props> = ({ darkMode, eng }) => {

  return (
    <div
      className={`${darkMode ? "dark_scroll" : "light_scroll text-dark"
        } intro_opacity relative flex flex-col max-h-screen overflow-y-scroll gap-4 py-10 items-center min-h-screen w-full text-light`}
    >
      <h1
        className={`${darkMode ? "text-darkMode" : "text-dark"
          } text-3xl text-left mx-auto w-[70%]`}
      >
        {eng ? "My Journey" : "El viaje"}
      </h1>
      <ul className=" w-[70%] grid grid-flow-rows gap-6" >
        <li>
          <h2 className="text-2xl font-medium my-4 border-b-2 border-b-gray-300 ">
            {eng ? "Previus experience" : "Experiencia previa"}
          </h2>
          <ul className="grid grid-flow-rows gap-6">
            {Data.work.map(item => <PreviusExperienceListItem eng={eng} darkMode={darkMode} key={item.url} {...item} />)}
          </ul>
        </li>
        <li>
          <h2 className={`text-2xl font-medium my-12 border-b-2 ${darkMode ? "border-b-gray-300" : "border-b-gray-900"} `}>
            {eng ? "Personal Proyects" : "Algunos proyectos personales"}
          </h2>
          <ul className="grid grid-flow-rows gap-6">
            {Data.personal.map(item => <PreviusExperienceListItem eng={eng} darkMode={darkMode} key={item.url} {...item} />)}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Work;
