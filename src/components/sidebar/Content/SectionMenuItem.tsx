import React, { useContext } from "react";
import { ContentSections } from "../../../utils/types";
import { appContext } from "../../AppContextProvider"

interface Props {
  name: ContentSections;
  as: string;
  isSelected: boolean;
  updateSection: (target: ContentSections) => void;
}

const SectionMenuItem: React.FC<Props> = ({
  name,
  isSelected,
  updateSection,
  as
}) => {

  const { state } = useContext(appContext)

  return (
    <li
      className="text-light relative pl-[20%]"
      onClick={() => updateSection(name)}
    >
      {isSelected && name !== "home" ? <span className={`${state.darkMode ? "triangle_dark" : "triangle"} intro absolute top-1 left-0`} /> : null}
      {as.toUpperCase()}
    </li>
  );
};

export default SectionMenuItem;
