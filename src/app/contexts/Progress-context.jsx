'use client'
import { useState, createContext } from "react";

export const ProgressContext = createContext(null);

export default function ProgressContextProvider({ children }) {
    const [activitiesSheetsLength, setActivitiesSheetsLength] = useState(0);
    const [activitiesLocalStorageLength, setActivitiesLocalStorageLength] = useState(0);
    return (
        <ProgressContext.Provider value={{ activitiesSheetsLength, setActivitiesSheetsLength, activitiesLocalStorageLength, setActivitiesLocalStorageLength }}>
            {children}
        </ProgressContext.Provider>
    )
}