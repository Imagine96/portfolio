import React, { createContext, useReducer } from "react";
import { AppContextState, AppContextAction } from "../utils/types"

interface Props {
    children: React.ReactNode
}

const initialState: AppContextState = {
    darkMode: true,
}

export const appContext = createContext<{
    state: AppContextState,
    dispatch: React.Dispatch<AppContextAction>
}>({state: initialState, dispatch: () => null})

const reducer = (state: AppContextState, action: AppContextAction): AppContextState => {
    switch(action.type){
        case "toggle_dark_mode": {
            return {
                darkMode: !state.darkMode
            }
        }
        default: {
            return state
        }
    }
}

export const AppContextProvider: React.FC<Props> = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState)

    const context = {state, dispatch}

    return(
        <appContext.Provider value={context}>
            {children}
        </appContext.Provider>
    )
}