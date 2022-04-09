import React, { lazy } from "react";
import { AppContextProvider } from "./components/AppContextProvider";
import Main from "./components/main/Main";
import Sidebar from "./components/sidebar/SideBar";
import useNavigation from "./hooks/useNavigation";
import useSidebar from "./hooks/useSidebar";
import Hamburger from "hamburger-react";

const App: React.FC = () => {

  const { sections, updateSection } = useNavigation();

  const { fixedSideBar, sideBarOpen, enhancedUpdateNavigation, setSideBarOpen, updateToNextSection } = useSidebar(sections, updateSection)

  return (
    <AppContextProvider>
      <div className="relative lg:grid lg:grid-cols-3 h-full lg:min-h-screen md:overflow-x-hidden">
        {fixedSideBar ? (
          <>
            <Main updateToNextSection={updateToNextSection} updateSection={updateSection} sections={sections} />
            <Sidebar sections={sections} updateSection={updateSection} />
          </>
        ) : sideBarOpen ? (
          <Sidebar
            sections={sections}
            updateSection={enhancedUpdateNavigation}
          />
        ) : (
          <Main updateSection={updateSection} updateToNextSection={updateToNextSection} sections={sections} />
        )}
        {!fixedSideBar ? (
          <div className="absolute top-8 right-2">
            <Hamburger
              color={"#BFBFBF"}
              toggled={sideBarOpen}
              toggle={setSideBarOpen}
            />
          </div>
        ) : null}
      </div>
    </AppContextProvider>
  );
};

export default App;
