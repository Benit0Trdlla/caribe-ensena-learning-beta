import Image from "next/image";
export const LandingSection = ({ ImgUrl }) => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-md-6 px-1 lh-lg text-wrap text-center">
                    <Image className="img-fluid ms-1 ms-md-0" src='/Images/Titulo.png' width={400} height={400} alt='Imagen Principal' priority />
                    <p>🌍<strong>CEL</strong> es más que una plataforma: es un espacio creado para abrirte puertas hacia el futuro. Aquí encontrarás un lugar donde la educación se convierte en oportunidad, inclusión y transformación.</p>
                    <p>💡 Nuestro propósito es simple pero poderoso: que cada estudiante, sin importar dónde esté, pueda acceder a recursos de calidad que lo inspiren a aprender, crecer y construir sus sueños. En <strong>CEL</strong> no solo vas a adquirir conocimientos, también vas a descubrir nuevas formas de pensar, de crear y de participar en el mundo que hoy está en constante cambio.</p>
                    <p className="mb-0">🚀 Prepárate para explorar, para aprender a tu ritmo, y para ser parte de una comunidad que cree firmemente que la educación es el verdadero motor del cambio.</p>
                    <p>🎉 Bienvenid@ a CEL, donde la educación se convierte en tu futuro. 🎉</p>
                </div>
                <div className="col-md-6 row mt-2">
                    <Image className="img-fluid" src={ImgUrl} width={400} height={400} alt='Imagen Principal' />
                </div>
            </div>
        </div>
    )
}