import { VideoIframe, Activities, ContenidoTeorico } from "../componentsSecciones";
export const VideoSection = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center mt-4">
                <div className="col-md-6">
                    <p className="text-center">Ve el video</p>
                    <VideoIframe />
                    <Activities />
                </div>
                <div className="col-md-6">
                    <ContenidoTeorico maxHeight={"550px"} />
                </div>
            </div>
        </div>
    )
}