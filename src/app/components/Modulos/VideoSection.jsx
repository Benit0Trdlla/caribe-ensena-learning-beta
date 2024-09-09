import VideoIframe from "./Secciones/VideoIframe"
import Activities from "./Secciones/Activities"
import ContenidoTeorico from "./Secciones/ContenidoTeorico"
export default function VideoSection() {
    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center mt-4">
                <div className="col-md-6 text-center">
                    <p>Ve el video</p>
                    <VideoIframe href={"https://www.youtube.com/embed/TYo3h6mPBvc?si=FQJ5ysE1ALfYVDt4"} />
                    <Activities Enunciado="ejemplo" />
                </div>
                <div className="col-md-6">
                    <ContenidoTeorico maxHeight={"550px"}/>
                </div>
            </div>
        </div>
    )
}