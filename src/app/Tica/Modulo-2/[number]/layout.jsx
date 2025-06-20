'use client'
import { DataActivitiesContext } from "@/app/contexts/DataActivities-context";
import { useContext, useEffect } from "react"
import { useDataFromSheets } from "@/app/hooks/useDataFromSheets";
import { useModuloStatus } from "@/app/hooks/useModuloStatus";
import Loading from "@/app/components/loading";

export default function RootLayout({ children }) {
    const modulo = useModuloStatus()

    const { setData } = useContext(DataActivitiesContext);
    const { data: preguntas, isLoading, error } = useDataFromSheets("https://docs.google.com/spreadsheets/d/e/2PACX-1vRnZ-dBQY5dLEZ_comubwQB0mcbyw_MTvUIQ0dO-CCgX3c8KXWj_1BsRYenAO0-zZePAIyc0ONC35ld/pub?output=csv");
    useEffect(() => {
        if (!isLoading && !error) {
            setData(preguntas);
        }
    }, [preguntas, isLoading, error, setData]);

    if (error) return <div>Error: {error.message}</div>;
    
    if (isLoading) return <Loading styleSpinner="text-primary"/>

    if (modulo < 100) return <div className="d-flex mt-5 text-danger align-items-center justify-content-center">El Modulo 1 no fue completado, tienes {modulo}%</div>

    return (
        <>
            {children}
        </>
    );
}