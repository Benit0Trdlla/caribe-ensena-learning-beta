'use client'
// import { useCallback } from 'react'
// import { usePathname, useSearchParams, useRouter } from 'next/navigation'
// import Link from 'next/link'
import Header from "@/app/components/Secciones/Header";
import BtnLocked from "@/app/components/CursosPage/Cursos/Botones/BtnLocked";
import BtnUnlocked from "@/app/components/CursosPage/Cursos/Botones/BtnUnlocked";
export default function SectionsPage({ params }) {
    const number = params.number
    const Botones = [<BtnUnlocked />, <BtnLocked />, <BtnLocked />, <BtnUnlocked />]

    // const pathname = usePathname()
    // const searchParams = useSearchParams()
    // Get a new searchParams string by merging the current
    // searchParams with a provided key/value pair
    // const createQueryString = useCallback(
    //     (name, value) => {
    //         const params = new URLSearchParams(searchParams)
    //         params.set(name, value)

    //         return params.toString()
    //     },
    //     [searchParams]
    // )
    return (
        <>
            <Header />
            <div className="container">
                <div className="px-1 py-5 row">
                    La seccion es: {number}
                </div>
                    {Botones[number - 1]}
                {/* <>
                <p>Sort By</p>
                <Link
                    href={
                        // <pathname>?sort=desc
                        pathname + '?' + createQueryString('Seccion', '1')
                    }
                >
                    DESC
                </Link>
            </> */}
            </div>
        </>

    );
}