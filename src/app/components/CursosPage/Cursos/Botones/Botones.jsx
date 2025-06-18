'use client'
import BtnLocked from "./BtnLocked"
import BtnUnlocked from "./BtnUnlocked"
import { useState, useEffect, useMemo } from "react"
import { readPercentage, readLastModuloAndSeccion } from "@/app/lib"
export default function Botones({ BtnHref }) {
    const [lastData, setLastData] = useState({ lastModuloAndSeccion: 'Modulo-1/1', lastModulo: 'Modulo-1', });

    const [isClient, setIsClient] = useState(false);
    useEffect(() => {
        setIsClient(true);
        const data = readLastModuloAndSeccion(BtnHref);
        setLastData(data);
    }, [BtnHref]);

    const readPercentageMemo = useMemo(() => readPercentage(BtnHref), [BtnHref]);
    const { Modulo1, Modulo2, Modulo3, Modulo4 } = readPercentageMemo;

    const modulos = [
        { id: 1, modulo: Modulo1, href: `/Modulo-1` },
        { id: 2, modulo: Modulo2, href: `/Modulo-2` },
        { id: 3, modulo: Modulo3, href: `/Modulo-3` },
        { id: 4, modulo: Modulo4, href: `/Modulo-4` },
    ];

    // Crear un lookup de módulos por ID para evitar búsquedas en each render
    const modulosById = useMemo(
        () => modulos.reduce((acc, m) => ({ ...acc, [m.id]: m }), {}),
        [modulos]
    );

    // Función para calcular el enlace del componente BtnLocked
    const getHref = (mod) => {
        if (mod.id === 1) {
            return `/${BtnHref}/${lastData.lastModuloAndSeccion}`;
        }

        const prev = modulosById[mod.id - 1];
        const prevCompleted = prev?.modulo === '100';

        if (prevCompleted) {
            return lastData.lastModulo === mod.href
                ? `/${BtnHref}/${lastData.lastModuloAndSeccion}`
                : `/${BtnHref}${mod.href}/1`;
        }

        if (lastData.lastModulo === mod.href) {
            return `/${BtnHref}/${lastData.lastModuloAndSeccion}`;
        }

        return '#';
    };

    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {modulos.map((mod) => {
                    const href = getHref(mod);
                    return (
                        <li key={mod.id} className="breadcrumb-item active" aria-current="page">
                            {isClient && mod.modulo === '100' ? (
                                <BtnUnlocked href={`/${BtnHref}${mod.href}/1`} />
                            ) : (
                                <BtnLocked href={href} />
                            )}
                        </li>
                    );
                })}
            </ol>
        </nav>
    )
}