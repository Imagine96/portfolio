import React, { useContext, lazy, Suspense } from "react";
import { appContext } from "../AppContextProvider";
import { Sections, ContentSections } from "@utils/types"
import Home from "./Home/Home";

const About = lazy(() => import("./About/About"));
const Work = lazy(() => import("./Work/Work"));
const Contact = lazy(() => import("./Contact/Contact"))
const SectionControllers = lazy(() => import("./SectionControllers"));

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
          <Home sections={sections} idiom={state.eng} updateSection={updateSection} />{" "}
        </div>
      ) : (
        <Suspense fallback={null}>
          <div
            className={`col-span-2 h-screen relative ${state.darkMode ? "bg-darkBg" : "bg-lightBg"
              }`}
          >
            <SectionControllers
              updateToNextSection={updateToNextSection}
              darkMode={state.darkMode}
              updateSection={updateSection}
            />
            {sections.about ? <About eng={state.eng} darkMode={state.darkMode} /> : null}
            {sections.experience ? <Work eng={state.eng} darkMode={state.darkMode} /> : null}
            {sections.contact ? <Contact eng={state.eng} darkMode={state.darkMode} /> : null}
          </div>
        </Suspense>
      )}
    </>
  );
};

export default Main;
