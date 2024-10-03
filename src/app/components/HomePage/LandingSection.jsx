import Image from "next/image";
export const LandingSection= ({ ImgUrl }) => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6 px-1 lh-lg text-wrap">
                    <Image className="img-fluid" src='/Images/Titulo.png' width={800} height={800} alt='Imagen Principal' priority/>
                    <p className="text-center">
                        Nuestra plataforma e-learning tiene un gran propósito, ofrecer cursos, talleres y diplomados relacionados
                        con las necesidades educativas de la región,  para potenciar el aprendizaje en contextos formales y no formales.
                        Esta herramienta educativa virtual se puede usar en computadoras y dispositivos móviles como teléfonos y tabletas,
                        lo que brinda a los usuarios acceso al contenido educativo en cualquier momento y lugar.
                    </p>
                </div>
                <div className="col-md-6 row mt-2">
                    <Image className="img-fluid" src={ImgUrl} width={800} height={800} alt='Imagen Principal' />
                </div>
            </div>
        </div>
    )
}