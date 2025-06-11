'use client'
import { useRef, useEffect, useState } from 'react';
import { isSeccionCompleted } from '../lib';
import { usePathData } from '../hooks/usePathData';

const Certificado = ({ nombre }) => {
    // Hidration problem, solution
    const [isClient, setIsClient] = useState(false)
    useEffect(() => {
        setIsClient(true)
    }, [])

    const { cursoName, cursoLevel } = usePathData();
    const { Seccion7 } = isSeccionCompleted(cursoName, cursoLevel);

    const canvasRef = useRef(null);

    const generarYDescargarCertificado = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const image = new Image();
        image.src = '/Images/Certificados/Certificado-Curso.png'; // Ruta del archivo subido

        image.onload = () => {
            // Dibujar la imagen en el canvas
            ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

            // Agregar el texto
            ctx.font = '30px Arial';
            ctx.fillStyle = 'black';
            ctx.textAlign = 'center';
            // Ajustar las coordenadas para colocar el texto en el lugar correcto
            ctx.fillText(`${nombre}`, canvas.width / 2, 265); // Ajustar Y según sea necesario

            // Descargar el canvas como imagen
            const link = document.createElement('a');
            link.href = canvas.toDataURL('image/png');
            link.download = 'certificado.png';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        };
    };

    return (
        <>
            {Seccion7 && isClient &&
                <div className="container text-center mt-5">
                    <canvas ref={canvasRef} width={800} height={600} style={{ display: 'none' }}></canvas>
                    <button className="btn btn-primary" onClick={generarYDescargarCertificado}>
                        Descargar tu certificado
                    </button>
                </div>
            }
        </>
    );
};

export default Certificado;
