import React from "react";
import { ContentSections, Sections } from "../../../utils/types";
import HomeLink from "./HomeLink";
import Data from "./content.json"

interface Props {
  updateSection: (target: ContentSections) => void;
  sections: Sections;
  idiom: boolean
}

const Home: React.FC<Props> = ({ updateSection, sections, idiom }) => {

  return (
    <div className="min-h-screen intro_opacity space-y-2 md:space-y-8 flex flex-col items-center  justify-center gap-8 md:pt-[15%] md:block md:pl-[10%]">
      <h1 className="text-light text-center md:text-left font-light text-5xl w-[50%]  md:w-[60%]">
        {idiom ? Data.eng.header : Data.esp.header}
      </h1>
      <p className="text-light font-light w-[70%] text-center md:text-left md:w-[55%] lg:w-[40%]">
        {idiom ? Data.eng.main : Data.esp.main}
      </p>
      {Object.keys(sections).map((key, index) => {
        const name = key as ContentSections;
        if (name === "home") return null;
        return (
          <HomeLink name={name} as={idiom ? Data.eng.buttons[index] : Data.esp.buttons[index]} key={name} updateSection={() => updateSection(name)} />
        );
      })}
    </div>
  );
};

export default Home;
