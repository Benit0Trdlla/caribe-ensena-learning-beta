'use client'

import { DataActivitiesContext } from "@/app/contexts/DataActivities-context";
import { useContext, useEffect } from "react"
import { useDataFromSheets } from "@/app/hooks/useDataFromSheets";

export default function RootLayout({ children }) {
    const { setData } = useContext(DataActivitiesContext);

    const { data: preguntas, isLoading, error } = useDataFromSheets("https://docs.google.com/spreadsheets/d/e/2PACX-1vRyDtH-42AIYMCwpsg0GMZJP85ATip3H2i8DsPyf4TL3DsP5oVnpI6wYFEwD-evr989qIooAOkF6ndx/pub?output=csv");

    useEffect(() => {
        if (!isLoading && !error) {
            setData(preguntas);
        }
    }, [preguntas, isLoading, error, setData]);

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <>
            {children}
        </>
    );
}