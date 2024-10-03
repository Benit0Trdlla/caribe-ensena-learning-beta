import Image from 'next/image'

export const Prelogin = ({ ImgLeft, ImgTitle }) => {
    return (
        <section className='gradient-custom'>
            <div className="container py-5">
                <div className="row mt-2">
                    <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center align-items-center">
                        <Image src={ImgLeft} width={300} height={200} className="img-fluid d-none d-md-block" alt="Imagen de Login" style={{ width: "auto" }} />
                    </div>
                    <div className="col-12 col-md-6 col-lg-6">
                        <div className="row gy-5 justify-content-center">
                            <div className="col-12 d-flex justify-content-center">
                                <Image src={ImgTitle} width={100} height={100} className="img-fluid" alt="Imagen Logo del Login" style={{ width: "auto" }} />
                            </div>
                            <div className='text-center'>
                                <h1 className='display-6 fw-bold text-body-emphasis'>Haz login para entrar a los cursos</h1>
                                <a href="/api/auth/login?returnTo=/Cursos" className='text-black btn btn-info' style={{ backgroundColor: "#beefff", borderColor: "#beefff" }}>Iniciar sesión</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}