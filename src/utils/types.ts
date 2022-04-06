export interface ObjectWithKeys {
    [key: string]: any
}

export interface AppContextState {
    darkMode: boolean
}

export type AppContextActionTypes = "toggle_dark_mode"

export interface AppContextAction {
    type: AppContextActionTypes
}

export type ContentSections = "home" | "about" | "work" | "contact"

export interface UseNavigationSections {
    sections: Sections,
    updateSection: (target: ContentSections) => void
}

export interface Sections extends ObjectWithKeys {
    home: boolean,
    about: boolean,
    work: boolean,
    contact: boolean
}

export interface ContactFormDataType extends ObjectWithKeys {
    name: string,
    email: string,
    message: string
}

export type ContactFormFields = "name" | "email" | "message"

export interface PrevExp {
    "url": string,
    "name": string,
    "description": string,
    "responabilities": string[],
    "img": string
}

export interface PreviusExperienceDataType {
    work: PrevExp[],
    personal: PrevExp[]
}