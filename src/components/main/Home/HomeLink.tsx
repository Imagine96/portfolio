import React from "react";
import { ContentSections } from "../../../utils/types";

interface Props {
  name: ContentSections;
  updateSection: (target: ContentSections) => void;
  as: string
}

const HomeLink: React.FC<Props> = ({
  name,
  updateSection,
  as
}) => {

  return (
    <p
      className="text-lg px-4 py-2 bg-redBg text-light w-32 text-center hover:transition hover:-translate-y-1 hover:shadow-md min-w-fit first-letter:uppercase "
      onClick={() => updateSection(name)}
    >
      {as}
    </p>
  );
};

export default HomeLink;
