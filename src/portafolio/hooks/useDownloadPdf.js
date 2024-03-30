
import React from 'react'
import pdfURL from '../../assets/cv/RafaelFranciscoCV.pdf'

export const useDownloadPdf = () => {

    const descargarCV = () => {
    
        // Crea un elemento <a> en el DOM y establece su atributo 'href' a la URL del archivo PDF
        const link = document.createElement('a');
        link.href = pdfURL;
        // Establece el atributo 'download' para indicar que se debe descargar el archivo en lugar de abrirlo
        link.download = 'RafaelFranciscoCV.pdf';
        // Dispara el evento click en el elemento <a>
        link.click();
    }


    return {
        descargarCV
    }

}
