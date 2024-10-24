'use client'

import "./styles.css";
import { usePathData } from "@/app/hooks/usePathData";
import { isSeccionCompleted } from "@/app/lib/isSeccionCompleted";
import { Book, Exam, Video } from "./Icons";

export const SectionNavigation = () => {
    const { cursoName, cursoLevel } = usePathData();
    const { Seccion1, Seccion2, Seccion3, Seccion4, Seccion5, Seccion6, Seccion7 } = isSeccionCompleted(cursoName, cursoLevel);

    return (
        <div className="container">
            <div className="mt-3 d-flex justify-content-center gap-3 gap-lg-5">
                <div className="d-flex gap-4 gap-lg-5 p-2">
                    <Book href={`/${cursoName}/${cursoLevel}/1`} isCompleted={true} />
                    <Book href={Seccion1 ? `/${cursoName}/${cursoLevel}/2` : ""} isCompleted={Seccion1} />
                    <Video href={Seccion2 ? `/${cursoName}/${cursoLevel}/3` : ""} isCompleted={Seccion2} />
                    <Book href={Seccion3 ? `/${cursoName}/${cursoLevel}/4` : ""} isCompleted={Seccion3} />
                    <Video href={Seccion4 ? `/${cursoName}/${cursoLevel}/5` : ""} isCompleted={Seccion4} />
                    <Video href={Seccion5 ? `/${cursoName}/${cursoLevel}/6` : ""} isCompleted={Seccion5} />
                    <Exam href={Seccion6 ? `/${cursoName}/${cursoLevel}/7` : ""} isCompleted={Seccion6} />
                </div>
            </div>
        </div>
    )
}