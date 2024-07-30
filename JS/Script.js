window.onscroll = SeccionActiva;
window.onload = SeccionActiva;

function SeccionActiva() {
    let y = window.scrollY;

    if (y > 200) {
        document.querySelector("nav").classList.add("abajo");
    } else {
        document.querySelector("nav").classList.remove("abajo");
    }

    if (y >= 0 && y < 749) {
       CambiarColorSecLink(0);
    } else if (y > 749 && y < 1679) {
        CambiarColorSecLink(1);
    } else if (y > 1679 && y < 2608) {
        CambiarColorSecLink(2);
    } else if (y > 2608 && y < 3538) {
        CambiarColorSecLink(3);
    } else if (y > 3538 && y < 3768) {
        CambiarColorSecLink(4);
    }
}

function CambiarColorSecLink(No) {
    document.querySelectorAll(".navlink").forEach(element => {
        element.classList.remove("SecAct");
    });

    document.querySelectorAll(".navlink")[No].classList.add("SecAct");
}

document.getElementById("CerrarVentana").addEventListener("click", function() {
    document.querySelector(".DetallesVentana").classList.add("Oculto");
    document.querySelector("body").style.overflowY = "visible";
})

function MostrarDetalles(No) {
    let Nombre = document.getElementById("NombreServ");
    let Info = document.getElementById("DescripcionDetalles");
    let Lista = document.getElementById("Incluye");
    let Notas = document.getElementById("InfoExtraDetalles");

    switch (No) {
        case 0:
            Nombre.innerHTML = "Diseño Publicitario";
            Info.innerHTML = "Todo lo que necesites para darle publicidad a tu proyecto: tarjetas de presentación, pósters, folletos, etc."
            Lista.innerHTML = "<li>Archivo de imagen (.png)</li><li>Archivo editable de Illustrator (.ai)</li><li>Archivo editable de Photoshop (.psd)</li><li><i>No incluye impresiones físicas</i></li>";
            Notas.innerHTML = "Para resultados óptimos, necesitarás proporcionar tu <b>logotipo</b> y, de preferencia, un <b>manual de identidad</b>.";
            break;
        case 1:
            Nombre.innerHTML = "Identidad de Marca";
            Info.innerHTML = "La primera impresión cuenta, y mucho. Consigue tu propio logotipo para representar la identidad y la escencia de tu proyecto, así como un manual de identidad para guiarte a tí mismo y a futuros colaboradores en el buen uso de su identidad."
            Lista.innerHTML = "<li>Set de archivos de imagen del logotipo (.png)</li><li>Archivo editable de Illustrator con las siguientes versiones del logotipo: normal, monocromático, negativo (.ai)<li>Set de archivos de imagenes de tipo <i>mockup</i> (.jpg)</li><li>Documento con los diferentes usos del logotipo: ejemplos, <i>mockups</i>, combinaciones y notas. (.pdf)</li>";
            Notas.innerHTML = "Necesitarás proporcionar los detalles más relevantes con los que desees que cuente tu logotipo. Es preferible que menciones, por ejemplo: estilo (formal, gamer...), referencias (otros logotipos que le hayan agradado), colores, la naturaleza de su proyecto (restaurante, canal de internet, organización pública...) y cualquier detalle que consideres útil.<br><br>También ten en cuenta que el diseño de una identidad es un proceso que puede ser tardado y que requiere de retroalimentación por tu parte para saber si el resultado está siendo de tu agrado durante el desarrollo. Durante este proceso la comunicación contigo será importante.";
            break;
        case 2:
            Nombre.innerHTML = "Set Redes Sociales";
            Info.innerHTML = "Haz notar tu presencia en redes sociales como Facebook, Instagram, YouTube o Twitter a través de imágenes de perfil, banners o plantillas de publicaciones entre otras opciones."
            Lista.innerHTML = "<li>Archivo de imagen de cada elemento (.png)</li><li>Archivo editable de Illustrator con cada elemento (.ai)</li><li>Archivo editable de Photoshop de cada elemento (.psd)</li><li><b>Elementos disponibles:</b><ul><li>Imagen de perfil</li><li>Banners o cabeceras</li><li>Plantillas de publicaciones</li><li>Plantillas para historias</li></ul></li>";
            Notas.innerHTML = "Necesitarás proporcionar tu logotipo en un formato adecuado (.ai, .svg...) y, preferiblemente, tu manual de identidad. Puedes preguntar por elementos individuales o por el set completo para cada red social, también puedes pedir para varias redes sociales. Los archivos entregados pueden variar según la red social que elijas.";
            break;
        case 3:
            Nombre.innerHTML = "Landing Page";
            Info.innerHTML = "Permite que futuros clientes o usuarios te encuentren con facilidad, una <i>landing page</i> es una página web que recibirá a las personas que quieran conocer tu proyecto y les permitirá conocer toda la información que tengas para ellos."
            Lista.innerHTML = "<li>Acceso para administrar el hosting</li><li>Podrás descargar el repositorio completo, que incluyen los archivos HTML, CSS y JavaScript</li><li>El precio incluirá dominio y hosting durante el primer año</li>";
            Notas.innerHTML = "Necesitarás proporcionar tu logotipo y, preferiblemente, tu manual de identidad. Ten en cuenta que será una página web simple que servirá específicamente para mostrar los detalles y la información de tu proyecto. Según la complejidad de lo que desees, el tiempo de entrega puede ser desde dos semanas a más. El mantenimiento de un sitio web de cualquier tipo requiere un pago recurrente y después del primer año este pago será su responsabilidad.";
            break;
        case 4:
            Nombre.innerHTML = "Aplicación Web Simple";
            Info.innerHTML = "¿Tienes en mente una herramienta para su proyecto? Contacta y descubre si es viable. Una aplicación web es una página web interactiva con una funcionalidad específica, puede ser atractiva para sus usuarios o útil para administrar la página web de su proyecto."
            Lista.innerHTML = "<li>Acceso para administrar el hosting</li><li>Podrás descargar el repositorio completo, que incluyen los archivos HTML, CSS y JavaScript</li><li>El precio incluirá dominio y hosting durante el primer año</li>";
            Notas.innerHTML = "Necesitarás proporcionar tu logotipo y, preferiblemente, tu manual de identidad. El mantenimiento de una página web de cualquier tipo requiere un pago recurrente y después del primer año este pago será su responsabilidad.";
            break;
    
        default:
            break;
    }
    document.querySelector(".DetallesVentana").classList.remove("Oculto");
    document.querySelector("body").style.overflowY = "hidden";
}

document.getElementById("AbrirMenu").addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("ListaNav").classList.add("Mostrar");
    document.querySelector("body").style.overflowY = "hidden";
})

document.getElementById("CerrarMenu").addEventListener("click", e => {
    e.preventDefault();
    document.getElementById("ListaNav").classList.remove("Mostrar");
    document.querySelector("body").style.overflowY = "visible";
})

document.querySelectorAll(".navlink").forEach(element => {
    element.addEventListener("click", CerrarMenu);
});

function CerrarMenu() {
    document.getElementById("ListaNav").classList.remove("Mostrar");
    document.querySelector("body").style.overflowY = "visible";
}