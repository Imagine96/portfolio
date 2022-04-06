import React, { useContext } from "react";
import { ContentSections } from "../../../utils/types";
import { appContext } from "../../AppContextProvider"

interface Props {
  name: ContentSections;
  isSelected: boolean;
  updateSection: (target: ContentSections) => void;
}

const SectionMenuItem: React.FC<Props> = ({
  name,
  isSelected,
  updateSection,
}) => {

    const { state } = useContext(appContext)

  return (
    <li
      className="text-light relative pl-[20%]"
      onClick={() => updateSection(name)}
    >
      {isSelected && name !== "home" ? <span className={`${ state.darkMode ? "triangle_dark" : "triangle"} intro absolute top-1 left-0`} /> : null}
      {name.toUpperCase()} 
    </li>
  );
};

export default SectionMenuItem;
