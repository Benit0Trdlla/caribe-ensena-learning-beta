import Image from "next/image";
export default function Donaciones() {
    return (
        <div id="donate" className="py-4 mt-3">
            <div className="container">
                <div className="text-center">
                    <h4 className="mb-4">¡Haz Clik y Sé el Cambio! Apoya la Educación en el Caribe Colombiano</h4>
                    {/* <hr className="w-24 mx-auto mb-4" /> */}
                </div>
                <div className="row d-flex align-items-center justify-content-center py-2">
                    <div className="col-md-6 text-center">
                        <p className='fs-6'>
                            <small className='text-justify'>
                                <strong>¿Quieres ser parte del cambio?</strong><br />
                                <strong>Caribe Enseña</strong> tiene el compromiso de brindar oportunidades de formación a estudiantes y docentes rurales en todo el Caribe colombiano.
                                <br />
                                <br />
                                <strong>¿Cómo puedes ayudar?</strong> <br />
                                ¡Con tu solidaridad! Al contribuir con nuestro proyecto, estás abriendo las puertas a una formación de alta calidad a muchas personas. ¡Únete a nuestra causa y sé el héroe que transforma vidas!
                                Para mayor información: <strong>donaciones@caribeensena.org</strong>
                            </small>
                        </p>
                        <button className='btn btn-warning' style={{ backgroundColor: "#beefff ", borderColor: "#beefff" }}>
                            <a className='text-black link-underline-info' href="https://www.paypal.com/paypalme/caribeensena?country.x=CO&locale.x=es_XC" target="_blank"><strong>¡Haz tu donación aqui!</strong></a>
                        </button>
                    </div>
                    <div className="col-md-6 d-flex justify-content-center py-4">
                        <Image className="img-fluid" src='/Images/Donaciones.png' width={250} height={250} alt='Imagen de donaciones' priority={true} />
                    </div>
                </div>
            </div>
        </div>
    )
}