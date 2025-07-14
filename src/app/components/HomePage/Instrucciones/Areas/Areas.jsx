import Secciones from "./Secciones"
import Link from "next/link"
export default function Areas() {
    return (
        <div className="col-md-3">
            <div className="accordion" id="accordionExample2">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            ÁREAS
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample2">
                        <div className="accordion-body">
                            <Secciones title="Ciencias sociales y humanas">
                                <li className="dropdown-item"><Link href={"/EnglishBasic1"} className="text-decoration-none text-dark">English Basic 1</Link></li>
                                <li className="dropdown-item"><Link href={"/EnglishBasic2"} className="text-decoration-none text-dark">English Basic 2</Link></li>
                                <li className="dropdown-item"><Link href={"/EnglishIntermediate1"} className="text-decoration-none text-dark">English Intermediate 1</Link></li>
                                <li className="dropdown-item"><Link href={"/EnglishIntermediate2"} className="text-decoration-none text-dark">English Intermediate 2</Link></li>
                            </Secciones>
                            <Secciones title="Tecnología">
                                <li className="dropdown-item"><Link href="/Tica" className="text-decoration-none text-dark">Tica 1</Link></li>
                                <li className="dropdown-item"><Link href="/Tica2" className="text-decoration-none text-dark">Tica 2</Link></li>
                                <li className="dropdown-item"><Link href="/PythonProjectPro" className="text-decoration-none text-dark">Python Project Pro</Link></li>
                            </Secciones>
                            <Secciones title="Ciencias ambientales">
                                <li className="dropdown-item"><Link href="/Newskills" className="text-decoration-none text-dark">New Skills</Link></li>
                            </Secciones>
                            <Secciones title="Ciencias exactas y educación financiera">
                                <li className="dropdown-item"><Link href="/Poket" className="text-decoration-none text-dark">Poket</Link></li>
                            </Secciones>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}