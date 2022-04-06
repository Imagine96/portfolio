import React from "react";
import { ContentSections, Sections } from "../../../utils/types";
import HomeLink from "./HomeLink";

interface Props {
  updateSection: (target: ContentSections) => void;
  sections: Sections;
}

const Home: React.FC<Props> = ({ updateSection, sections }) => {
  return (
    <div className="min-h-screen intro_opacity space-y-4 md:space-y-8 flex flex-col items-center  justify-center gap-8 md:pt-[15%] md:block md:pl-[10%]">
      <h1 className="text-light text-center md:text-left font-light text-5xl w-[80%]">
        Hello,<br /> I am Ruben.
        <br /> Front End developer
      </h1>
      <p className="text-light font-light w-[70%] text-center md:text-left md:w-[55%] lg:w-[40%]">
        I specialize in building user interfaces and client-side
        functionalities. For that I manage html and different css and js tools
        and frameworks, which ensures greater scalability and customization even
        after the final product is delivered.
      </p>
      {Object.keys(sections).map((key) => {
        const name = key as ContentSections;
        if (name === "home") return null;
        return (
          <HomeLink name={name} key={name} updateSection={() => updateSection(name)} />
        );
      })}
    </div>
  );
};

export default Home;
