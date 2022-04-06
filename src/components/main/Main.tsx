import React, { useContext, lazy, Suspense } from "react";
import { appContext } from "../AppContextProvider";
import { Sections, ContentSections } from "@utils/types"
import Home from "./Home/Home";

const About = lazy(() => import("./About/About"));
const Work = lazy(() => import("./Work/Work"));
const Contact = lazy(() => import("./Contact/Contact"))
const SectionControlers = lazy(() => import("./SectionControllers"));

interface Props {
  sections: Sections;
  updateSection: (target: ContentSections) => void;
  updateToNextSection: () => void;
}

const Main: React.FC<Props> = ({
  sections,
  updateSection,
  updateToNextSection,
}) => {
  const { state } = useContext(appContext);

  return (
    <>
      {sections.home ? (
        <div className={`col-span-2 h-screen md:min-h-screen pb-4 bg-dark bg-opacity-[0.85]`}>
          <Home sections={sections} updateSection={updateSection} />{" "}
        </div>
      ) : (
        <Suspense fallback={null}>
          <div
            className={`col-span-2 h-screen intro relative ${state.darkMode ? "bg-darkBg" : "bg-lightBg"
              }`}
          >
            <SectionControlers
              updateToNextSection={updateToNextSection}
              darkMode={state.darkMode}
              updateSection={updateSection}
            />
            {sections.about ? <About darkMode={state.darkMode} /> : null}
            {sections.work ? <Work darkMode={state.darkMode} /> : null}
            {sections.contact ? <Contact darkMode={state.darkMode} /> : null}
          </div>
        </Suspense>
      )}
    </>
  );
};

export default Main;
