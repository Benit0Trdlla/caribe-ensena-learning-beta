// import VideoIframe from "./components/VideoIframe/VideoIframe"
// import Activities from "./components/Activities/Activities"
// import ContenidoTeorico from "./components/ContenidoTeorico/ContenidoTeorico"
import { VideoIframe, Activities, ContenidoTeorico } from "../componentsSecciones";
export const VideoSection = () => {
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