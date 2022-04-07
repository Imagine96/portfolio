import React, { lazy, Suspense, useContext } from "react";
import { Sections, ContentSections } from "../../utils/types";
import Intro from "./Intro";
import { appContext } from "../AppContextProvider"

interface Props {
  sections: Sections;
  updateSection: (target: ContentSections) => void
}

const SidebarContent = lazy(() => import("./Content/SidebarContent"))

const Sidebar: React.FC<Props> = ({ sections, updateSection }) => {

  const { state: { eng } } = useContext(appContext)

  return (
    <div className="sidebar bg-redBg pb-8 md:pb-0 min-h-screen md:py-4 md:relative grid grid-rows-6">
      <Intro eng={eng} />
      <Suspense fallback={<p className="text-light" >loading</p>} >
        <SidebarContent eng={eng} sections={sections} updateSection={updateSection} />
      </Suspense>
    </div>
  );
};

export default Sidebar;
