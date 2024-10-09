'use client'

import { useState, createContext } from "react";

export const DataActivitiesContext = createContext(null);

export default function DataActivitiesContextProvider({children}) {
    const [data, setData] = useState([{}]);
    const [indexContext, setIndexContext] = useState(0);
    return (
        <DataActivitiesContext.Provider value={{ data, setData, indexContext, setIndexContext }}>
            {children}
        </DataActivitiesContext.Provider>
    )
}