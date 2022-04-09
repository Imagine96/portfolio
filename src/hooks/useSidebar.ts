import { useState, useEffect } from "react";
import { ContentSections, Sections } from "../utils/types";

/**
 * 
 * @param sections 
 * @param updateSection 
 * @returns 
 */

const useSidebar = (sections: Sections, updateSection: (target: ContentSections) => void) => {
  const [fixedSideBar, setFixedSidebar] = useState<boolean>(false);
  const [sideBarOpen, setSideBarOpen] = useState<boolean>(false);

  const toggleSideBar = (): void => {
    setSideBarOpen((prev) => !prev);
  };

  const enhancedUpdateNavigation = (target: ContentSections): void => {
    if (!fixedSideBar) {
      updateSection(target);
      toggleSideBar();
    } else {
      updateSection(target);
    }
  };

  const updateToNextSection = (): void => {
    let current: number = 0
    const sectionsKeys = Object.keys(sections).map(section => section)
    sectionsKeys.forEach((section, index) => {
      if (sections[section]) {
        current = index
      }
    })

    const next = current === sectionsKeys.length - 1 ? 0 : current + 1
    updateSection(sectionsKeys[next] as ContentSections)
  }

  useEffect(() => {

    if (window.screen.width <= window.screen.height && /Android|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent)) {
      setFixedSidebar(false);
    } else {
      setFixedSidebar(true);
    }
  }, [window.screen.width]);

  return { fixedSideBar, sideBarOpen, enhancedUpdateNavigation, setSideBarOpen, updateToNextSection }
}

export default useSidebar
