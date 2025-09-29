import "./style.css";
export const Audios = ({ url }) => {
    return (
        <div className='text-center mt-3'>
            {url.split(',').map((audio, index) => (
                <iframe key={index} className="dimensions dimensions-xs" src={audio} title="Audio de ayuda"></iframe>
            ))}
            {/* <audio controls>
                <source src={url} type="audio/aac" />
                Tu navegador no soporta el audio.
            </audio> */}
        </div>
    );
};