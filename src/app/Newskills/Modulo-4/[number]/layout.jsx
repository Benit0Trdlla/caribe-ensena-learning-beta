'use client'
import { DataActivitiesContext } from "@/app/contexts/DataActivities-context";
import { useContext, useEffect } from "react"
import { useDataFromSheets } from "@/app/hooks/useDataFromSheets";
import { useModuloStatus } from "@/app/hooks/useModuloStatus";
import Loading from "@/app/components/loading";


export default function RootLayout({ children }) {
    const modulo = useModuloStatus()    

    const { setData } = useContext(DataActivitiesContext);
    const { data: preguntas, isLoading, error } = useDataFromSheets("https://docs.google.com/spreadsheets/d/e/2PACX-1vRf__dqMxc9LHzaF2cdiMpxrfPu2EcK-77dvg4Ri5G-yEjgPUZzl-Dg23B8_xMc1ROCUCIrQ46XHd0P/pub?output=csv");
    useEffect(() => {
        if (!isLoading && !error) {
            setData(preguntas);
        }
    }, [preguntas, isLoading, error, setData]);

    if (error) return <div>Error: {error.message}</div>;
    
    if (isLoading) return <Loading styleSpinner="text-success" />

    if (modulo < 100) return <div className="d-flex mt-5 text-danger align-items-center justify-content-center">El Modulo 3 no fue completado, tienes {modulo}%</div>

    return (
        <>
            {children}
        </>
    );
}