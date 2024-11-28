'use client'
import BtnLocked from "./BtnLocked"
import BtnUnlocked from "./BtnUnlocked"
import { useState, useEffect } from "react"
import { readPercentage, readLastSeccion } from "@/app/lib"
export default function Botones({ BtnHref }) {
    // Hidration problem, solution
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    const { NumberSeccionModulo1, NumberSeccionModulo2, NumberSeccionModulo3, NumberSeccionModulo4 } = readLastSeccion(BtnHref);
    console.log({ NumberSeccionModulo1, NumberSeccionModulo2, NumberSeccionModulo3, NumberSeccionModulo4 });

    const { Modulo1, Modulo2, Modulo3, Modulo4 } = readPercentage(BtnHref);
    const modulos = [
        { id: 1, modulo: Modulo1, href: `/Modulo-1/1` },
        { id: 2, modulo: Modulo2, href: `/Modulo-2/1` },
        { id: 3, modulo: Modulo3, href: `/Modulo-3/1` },
        { id: 4, modulo: Modulo4, href: `/Modulo-4/1` },
    ];

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {modulos.map((modulo) => (
                    <li key={modulo.id} className="breadcrumb-item active" aria-current="page">
                        {isClient && modulo.modulo === 100 ? (
                            <BtnUnlocked href={`/${BtnHref}${modulo.href}`} />
                        ) : (
                            <BtnLocked href={modulo.href === `/Modulo-1/1` ? `${BtnHref}${modulo.href}` : ''} />
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    )
}