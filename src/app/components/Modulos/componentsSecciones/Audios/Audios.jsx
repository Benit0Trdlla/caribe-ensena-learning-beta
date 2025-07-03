import "./style.css";
export const Audios = ({ url }) => {
    return (
        <div className='d-flex justify-content-center mt-3'>
            {/* <audio controls>
                <source src={url} type="audio/aac" />
                Tu navegador no soporta el audio.
            </audio> */}
            <iframe className="dimensions dimensions-xs" src={url} title="Audio de ayuda"></iframe>
        </div>
    );
};