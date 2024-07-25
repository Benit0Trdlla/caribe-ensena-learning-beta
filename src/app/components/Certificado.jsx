'use client'

// import { jsPDF } from 'jspdf';
// const Certificado = ({ nombre, curso }) => {
//     const generarPDF = () => {
//         const doc = new jsPDF({ orientation: 'landscape' });
//         // Aquí puedes diseñar tu certificado
//         doc.setFontSize(22);
//         doc.text('Certificado de Finalización', 148.5, 30, null, null, "center");
//         doc.setFontSize(16);
//         doc.text(`Este certificado se otorga a ${nombre}`, 20, 50);
//         doc.text(`Por haber completado el curso: ${curso}`, 20, 70);
//         // Agregar imagen
//         doc.addImage("Images/Certificado-Curso.png", "PNG", 15, 80, 260, 150);
//         // Guarda el PDF
//         doc.save('certificado.pdf');
//     };
//     return (
//         <div className="text-center mt-5">
//             <button className="btn btn-primary" onClick={generarPDF}>
//                 Descargar Certificado
//             </button>
//         </div>
//     );
// };
// export default Certificado;

import { useRef } from 'react';

const Certificado = ({ nombre }) => {
    const canvasRef = useRef(null);

    const generarYDescargarCertificado = () => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        const image = new Image();
        image.src = '/Images/Certificado-Curso.png'; // Ruta del archivo subido

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
        <div className="container text-center mt-5">
            <canvas ref={canvasRef} width={800} height={600} style={{ display: 'none' }}></canvas>
            <button className="btn btn-primary" onClick={generarYDescargarCertificado}>
                Generar y Descargar Certificado
            </button>
        </div>
    );
};

export default Certificado;
