import Image from 'next/image'
export default function PreguntasFrecuentesLista({ children, MyImage }) {
    return (
        <div id="preguntas" className="container p-5 border-top border-bottom">
            <div className="row">
                <div className="col-md-5 d-flex align-items-center">
                    <div className='d-flex justify-content-center'>
                        <Image src={MyImage} width={500} height={500} className="img-fluid w-100 h-100" alt="Imagen Preguntas Frecuentes" />
                    </div>
                </div>
                <div className='col-md-7 col-lg-7'>
                    <h2 className="py-4 text-center">PREGUNTAS <span className="text-danger">FRECUENTES</span></h2>
                    <div className="accordion accordion-flush" id="features">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}