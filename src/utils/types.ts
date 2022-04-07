export interface ObjectWithKeys {
    [key: string]: any
}

export interface AppContextState {
    darkMode: boolean,
    eng: boolean
}

export type AppContextActionTypes = "toggle_dark_mode" | "toggle_idiom"

export interface AppContextAction {
    type: AppContextActionTypes
}

export type ContentSections = "home" | "about" | "experience" | "contact"

export interface UseNavigationSections {
    sections: Sections,
    updateSection: (target: ContentSections) => void
}

export interface Sections extends ObjectWithKeys {
    home: boolean,
    about: boolean,
    experience: boolean,
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
    "description": {
        eng: string,
        esp: string
    },
    "responabilities": {
        eng: string[],
        esp: string[]
    },
    "img": string
}

export interface PreviusExperienceDataType {
    work: PrevExp[],
    personal: PrevExp[]
}