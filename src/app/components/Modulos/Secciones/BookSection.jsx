import { FilePdf, Activities, ContenidoTeorico } from "../componentsSecciones";
export const BookSection = () => {
    return (
        <div className="container">
            <div className="row d-flex justify-content-center mt-4">
                <div className="col-md-6">
                    <p className="text-center">Leer el contenido</p>
                    <FilePdf />
                    <Activities />
                </div>
                <div className="col-md-6">
                    <ContenidoTeorico maxHeight={"680px"} />
                </div>
            </div>
        </div>
    );
}