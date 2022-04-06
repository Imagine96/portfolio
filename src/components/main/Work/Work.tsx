import React, { useMemo } from "react";
import PreviusExperienceListItem from "./PreviusExpereinceListItem";
import Data from "./theJourneySoFar.json";
import { PreviusExperienceDataType } from "../../../utils/types"

interface Props {
  darkMode: boolean;
}

const Work: React.FC<Props> = ({ darkMode }) => {

  const data = useMemo(() => Data as PreviusExperienceDataType, [])

  return (
    <div
      className={`${darkMode ? "dark_scroll" : "light_scroll text-dark"
        } intro_opacity relative flex flex-col max-h-screen overflow-y-scroll gap-4 pb-8 items-center pt-20 min-h-screen w-full text-light`}
    >
      <h1
        className={`${darkMode ? "text-darkMode" : "text-dark"
          } text-3xl mb-4 text-left mx-auto w-[70%]`}
      >
        The journey so far
      </h1>
      <ul className=" w-[70%] grid grid-flow-rows gap-6" >
        <li>
          <h2 className="text-2xl font-medium my-4" >
            Previus experience
          </h2>
          <ul className="grid grid-flow-rows gap-6">
            {data.work.map(item => <PreviusExperienceListItem darkMode={darkMode} key={item.url} {...item} />)}
          </ul>
        </li>
        <li>
          <h2 className="text-2xl font-medium my-4" >
            Personal Proyects
          </h2>
          <ul className="grid grid-flow-rows gap-6">
            {data.personal.map(item => <PreviusExperienceListItem darkMode={darkMode} key={item.url} {...item} />)}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Work;
