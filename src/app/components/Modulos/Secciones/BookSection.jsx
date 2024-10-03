import { FilePdf, Activities, ContenidoTeorico } from "../componentsSecciones";
export const BookSection = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center justify-content-center mt-4">
                <div className="col-md-6 text-center">
                    <p>Leer el contenido</p>
                    <FilePdf />
                    <Activities Enunciado="ejemplo" />
                </div>
                <div className="col-md-6">
                    <ContenidoTeorico maxHeight={"640px"} />
                </div>
            </div>
        </div>
    );
}