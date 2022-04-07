import React from "react";
import { ContentSections } from "../../utils/types";

interface Props {
  darkMode: boolean;
  updateSection: (target: ContentSections) => void;
  updateToNextSection: () => void;
}

const SectionControllers: React.FC<Props> = ({
  darkMode,
  updateSection,
  updateToNextSection,
}) => {
  if (darkMode) {
    return (
      <>
        <svg
          onClick={() => updateSection("home")}
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 cursor-pointer absolute top-2 left-2 z-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#EFEFEF"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <svg
          onClick={() => updateToNextSection()}
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 cursor-pointer absolute bottom-2 right-2 z-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#EFEFEF"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
          />
        </svg>
      </>
    );
  } else {
    return (
      <>
        <svg
          onClick={() => updateSection("home")}
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 cursor-pointer absolute top-2 left-2 z-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#121212"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <svg
          onClick={() => updateToNextSection()}
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 cursor-pointer absolute bottom-2 right-2 z-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#121212"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z"
          />
        </svg>
      </>
    );
  }
};

export default SectionControllers;
