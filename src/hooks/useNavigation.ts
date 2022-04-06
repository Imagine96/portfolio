import { useState } from "react";
import { ContentSections, UseNavigationSections, Sections } from "../utils/types"

const emptySections: Sections= {
    home: false,
    about: false,
    work: false,
    contact: false
}

const useNavigation = (): UseNavigationSections  => {

    const [sections, setSections] = useState<Sections>({
        home: true,
        about: false,
        work: false,
        contact: false
    })

    const updateSection = (target: ContentSections) => {
        setSections({
            ...emptySections,
            [target]: true
        })
    }

    return { sections, updateSection }
}

export default useNavigation