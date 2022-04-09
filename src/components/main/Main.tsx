import React, { useContext, lazy, Suspense } from "react";
import { appContext } from "../AppContextProvider";
import { Sections, ContentSections } from "@utils/types"
import Home from "./Home/Home";
import About from "./About/About";
import Work from "./Work/Work";
import Contact from "./Contact/Contact"

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
      <div className={`col-span-2 min-h-full border border-transparent relative ${state.darkMode ? "bg-darkBg" : sections.home ? "bg-darkBg" : "bg-lightBg"
        }`}>
        {sections.home ? (
          <Home sections={sections} idiom={state.eng} updateSection={updateSection} />
        ) : (

          <Suspense fallback={"loading..."}>
            <SectionControllers
              updateToNextSection={updateToNextSection}
              darkMode={state.darkMode}
              updateSection={updateSection}
            />
            {sections.about ? <About eng={state.eng} darkMode={state.darkMode} /> : null}
            {sections.experience ? <Work eng={state.eng} darkMode={state.darkMode} /> : null}
            {sections.contact ? <Contact eng={state.eng} darkMode={state.darkMode} /> : null}
          </Suspense>

        )
        }
      </div>
    </>
  );
};

export default Main;
