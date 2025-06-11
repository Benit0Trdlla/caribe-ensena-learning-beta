'use client'
import { DataActivitiesContext } from "@/app/contexts/DataActivities-context";
import { useContext, useEffect } from "react"
import { useDataFromSheets } from "@/app/hooks/useDataFromSheets";

export default function RootLayout({ children }) {
    const { setData } = useContext(DataActivitiesContext);

    const { data: preguntas, isLoading, error } = useDataFromSheets("https://docs.google.com/spreadsheets/d/e/2PACX-1vRf__dqMxc9LHzaF2cdiMpxrfPu2EcK-77dvg4Ri5G-yEjgPUZzl-Dg23B8_xMc1ROCUCIrQ46XHd0P/pub?output=csv");

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