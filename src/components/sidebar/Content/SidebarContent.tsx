import React from "react";
import { Sections, ContentSections } from "../../../utils/types";
import StateSwitch from "./StateSwitch";
import SectionMenuItem from "./SectionMenuItem";
import RRSS from "../../rrss/RRSS";
import Data from "./sections.json"

interface Props {
  sections: Sections;
  updateSection: (target: ContentSections) => void;
  eng: boolean;
}

const SidebarContent: React.FC<Props> = ({ sections, updateSection, eng }) => {
  return (
    <div className="row-span-5 pt-8 relative flex flex-col gap-4 xl:gap-6 2xl:justify-around 2xl:pb-10 2xl:w-[80%] items-center">
      <StateSwitch />
      <ul className="list-none space-y-3 w-full">
        {Object.keys(sections).map((key, index) => {
          const section = key as ContentSections;
          return (
            <SectionMenuItem
              updateSection={updateSection}
              as={eng ? Data.eng.sections[index] : Data.esp.sections[index]}
              key={key}
              name={section}
              isSelected={sections[key]}
            />
          );
        })}
      </ul>
      <a
        className="text-light text-xl w-full pl-[20%] flex flex-row items-center gap-4"
        href="/cv/test.pdf"
        target="_blank"
        rel="noreferrer"
      >
        CV
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
          />
        </svg>
      </a>
      <h3 className="text-lg pl-[20%] w-full text-light font-light">
        {eng ? Data.eng.message : Data.esp.message}
      </h3>
      <div className="flex flex-row px-[20%] w-full items-center justify-start gap-16">
        <RRSS darkMode={true} />
      </div>
      <div className="text-xs w-full absolute bottom-8 pl-[20%] text-light">
        Photo by{" "}
        <a
          className="underline"
          target="_blank"
          rel="noreferrer"
          href="https://unsplash.com/@masamasa3?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          masahiro miyagi
        </a>{" "}
        on{" "}
        <a
          className="underline"
          target="_blank"
          rel="noreferrer"
          href="https://unsplash.com/collections/1499877/landscape-nature?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Unsplash
        </a>
      </div>
    </div>
  );
};

export default SidebarContent;
