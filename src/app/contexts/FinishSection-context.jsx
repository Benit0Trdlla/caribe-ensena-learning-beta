'use client'

import { useState, createContext } from "react";

export const FinishSectionContext = createContext(null);

export default function FinishSectionContextProvider({ children }) {
    const [finished, setFinished] = useState(false);

    return (
        <FinishSectionContext.Provider value={{ finished, setFinished }}>
            {children}
        </FinishSectionContext.Provider>
    )
}