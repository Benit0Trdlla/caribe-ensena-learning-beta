'use client'
import BtnLocked from "./BtnLocked"
import BtnUnlocked from "./BtnUnlocked"
import { useState, useEffect } from "react"
import { readPercentage } from "@/app/lib"
export default function Botones({ BtnHref }) {
    // Hidration problem, solution
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

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
                {/* <li className="breadcrumb-item active" aria-current="page">
                    {isClient && Modulo1 === 100 ?
                        <BtnUnlocked href={`/${BtnHref}/Modulo-1/1`} />
                        :
                        <BtnLocked href={`/${BtnHref}/Modulo-1/1`} />
                    }
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    {isClient && Modulo2 === 100 ?
                        <BtnUnlocked href={`/${BtnHref}/Modulo-2/1`} />
                        :
                        <BtnLocked href='' />
                    }
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    {isClient && Modulo3 === 100 ?
                        <BtnUnlocked href={`/${BtnHref}/Modulo-3/1`} />
                        :
                        <BtnLocked href='' />
                    }
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                    {isClient && Modulo4 === 100 ?
                        <BtnUnlocked href={`/${BtnHref}/Modulo-4/1`} />
                        :
                        <BtnLocked href='' />
                    }
                </li> */}
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