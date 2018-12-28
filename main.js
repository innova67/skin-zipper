var input = document.querySelector('input');
var preview = document.querySelector('.preview');
var skins = document.getElementById('skins');

var reseteo = document.getElementById('reseteo');

var row1 = document.querySelector('.row-1');
var row2 = document.querySelector('.row-2');
var row3 = document.querySelector('.row-3');
var row4 = document.querySelector('.row-4');
var row5 = document.querySelector('.row-5');
var row6 = document.querySelector('.row-6');
var row7 = document.querySelector('.row-7');
var row8 = document.querySelector('.row-8');
var row9 = document.querySelector('.row-9');
var row10 = document.querySelector('.row-10');


var zipname = document.getElementById('zipname');
var dowload = document.getElementById('download');
var count = 0;

//iniciar el zip aqui hasta no saber como poder resetear
var zip = new JSZip;
var fileList = [];

input.style.visibility = 'hidden';

input.addEventListener('change', actualizarPreview);
reseteo.addEventListener('click', reset);
dowload.addEventListener('click', comprimir);

function actualizarPreview() {

    //eliminar mensaje de no archivos subidos
    Advertencia('eliminar');

    //atrapar los archivos subidos
    var fileInput = input.files;

    //devolver error si no se anaden archivos
    if (fileInput.length === 0) {
        Advertencia('crear');
    }

    //devolver error si se tratan de meter mas de 50 archivos
    else if (fileInput.length > 50 || count > 49) {
        alert("you reach the maximum of 50 files added");
    }

    //generar las cosas
    else {

        //habilitar el boton de descarga
        dowload.disabled = '';

        for (var i = 0; i < fileInput.length; i++) {
            var listItem = document.createElement('td');
            var nombre = document.createElement('input');

            if (validFileType(fileInput[i])) {
                //llamar a los archivos ingresados
                var name = fileInput[i].name;

                //crear preview e input
                nombre.id = 'nombres';
                nombre.maxLength = '30';
                nombre.value = name.replace('.png', '');
                var image = document.createElement('img');
                var dataimage = window.URL.createObjectURL(fileInput[i]);
                image.src = dataimage;
                listItem.appendChild(image);
                listItem.innerHTML += outerHTML = `<style> #skin-viewer-${count} * {background-image: url(\'${dataimage}\');}</style>`;
                listItem.innerHTML += outerHTML = `<div id=\"skin-viewer-${count}\" class=\"mc-skin-viewer-11x spin\"> <div class=\"player\"> <div class=\"head\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> <div class=\"accessory\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> </div> </div> <div class=\"body\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> <div class=\"accessory\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> </div> </div> <div class=\"left-arm\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> <div class=\"accessory\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> </div> </div> <div class=\"right-arm\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> <div class=\"accessory\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> </div> </div> <div class=\"left-leg\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> <div class=\"accessory\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> </div> </div> <div class=\"right-leg\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> <div class=\"accessory\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> </div> </div> </div> </div>`;
                listItem.appendChild(nombre);

                //guardando los archivos en una variable auxiliar
                fileList.push(fileInput[i]);

                //ir generando los archivos adicionales


                //ir contando los archivos anadidos
                count += 1;

            }

            //error de archivo no aceptado
            else {
                var para = document.createElement('p');
                para.id = 'null';
                para.style = 'color:black';
                para.textContent = 'File name ' + fileInput[i].name + ': Not a valid file type. Update your selection.';
                preview.insertBefore(para, skins);
            }

            //ordenar las previews
            if (count < 6) {
                row1.appendChild(listItem);
            }
            else if (count > 5 && count < 11) {
                row2.appendChild(listItem);
            }
            else if (count > 10 && count < 16) {
                row3.appendChild(listItem);
            }
            else if (count > 15 && count < 21) {
                row4.appendChild(listItem);
            }
            else if (count > 20 && count < 26) {
                row5.appendChild(listItem);
            }
            else if (count > 25 && count < 31) {
                row6.appendChild(listItem);
            }
            else if (count > 30 && count < 36) {
                row7.appendChild(listItem);
            }
            else if (count > 35 && count < 41) {
                row8.appendChild(listItem);
            }
            else if (count > 40 && count < 46) {
                row9.appendChild(listItem);
            }
            else if (count > 45 && count < 51) {
                row10.appendChild(listItem);
            }
            //advertencia no mas archivos seran cargados
            else {
                alert("you reach the maximum of 50 files added");
                var aler = document.createElement('p');
                aler.textContent = 'no more files will be added';
                preview.appendChild(aler);
                input.setAttribute('disabled', 'disabled');
            }
        }
    }
}

//validar el archivo solo png
var fileTypes = ['image/png']
function validFileType(file) {
    for (var i = 0; i < fileTypes.length; i++) {
        if (file.type === fileTypes[i]) {
            return true;
        }
    }
    return false;
}


function reset() {

    //resetear los archivos
    fileList = [];

    //crear la advertencia de 0 archvios subidos
    Advertencia('eliminar');

    //desabilitar la descarga
    dowload.disabled = 'disabled';

    //iniciar un nuevo zip despreciando los anteriores datos guardados
    zip = new JSZip();

    //limpiar las previews y cualquier mensaje anterior
    while (row1.firstChild) {
        var dentroTd = row1.firstChild;
        var imagen = dentroTd.firstChild;
        console.log(imagen.src);
        window.URL.revokeObjectURL(imagen.src);
        console.log(imagen.src);
        row1.removeChild(row1.firstChild);
    }

    while (row2.firstChild) {
        var dentroTd = row2.firstChild;
        var imagen = dentroTd.firstChild;
        window.URL.revokeObjectURL(imagen.src);
        row2.removeChild(row2.firstChild);
    }

    while (row3.firstChild) {
        var dentroTd = row3.firstChild;
        var imagen = dentroTd.firstChild;
        window.URL.revokeObjectURL(imagen.src);
        row3.removeChild(row3.firstChild);
    }

    Advertencia('crear');

    console.log('reset exitoso');
}

function comprimir() {
    var enus = `skinpack.${limpiar(zipname)}=${zipname.value}\n`;
    var enusAux = '';

    var skinsjson =
        `{
    "skins":[
        @
    ],
    "serialize_name": "${limpiar(zipname)}",
    "localization_name": "${limpiar(zipname)}"
}`;
    var skinAux = '';

    //anadir los archivos al zip
    for (var i = 0; i < fileList.length; i++) {


        //chekear los nombres y eliminar cualquier espacio en blanco
        var skinName = document.querySelectorAll('#nombres');
        var nombre = limpiar(skinName[i]);
        console.log(nombre);
        zip.file(nombre + '.png', fileList[i]);

        //recoger datos para el en_US.lang
        enusAux += `skin.${limpiar(zipname)}.${i}ab=${skinName[i].value}\n`;

        //recoger datos para el skins.json
        if (fileList.length - 1 === i) {
            skinAux += `{\n"localization_name": "${i}ab",\n"texture": "${nombre}.png",\n"type": "free"\n}`;
        }
        else {
            skinAux += `{\n"localization_name": "${i}ab",\n"texture": "${nombre}.png",\n"type": "free"\n},\n`;
        }
    }

    //crear el en_US.lang
    enus += enusAux;
    zip.file("texts/en_US.lang", enus);

    //crear el skins.json
    skinsjson = skinsjson.replace('@', skinAux);
    zip.file("skins.json", skinsjson);

    //crear el manifiesto
    var manifiesto =
        `{
    "format_version": 1,
    "header": {
        "description": "${limpiar(zipname)} skin pack\\nskin pack generated using Skin Zipper\\nhttps://innova67.github.io/skin-zipper/",
        "name": "${limpiar(zipname)}",
        "uuid": "${uuid()}",
        "version": [1, 0, 0],
        "min_engine_version": [1, 2, 6]
    },
    "modules": [
    {
        "type": "skin_pack",
        "uuid": "${uuid()}",
        "version": [1, 0, 0]
        }
    ]
}`;
    zip.file("manifest.json", manifiesto);

    //comprimir todo
    zip.generateAsync({ type: 'blob' })
        .then(function (content) {
            //se le puede poner mcpack, no pasa nada
            saveAs(content, limpiar(zipname) + ".mcpack");
        })
}

function limpiar(esto) {
    var contenido = "";
    for (var i = 0; i < esto.value.length; i++) {
        // condicion ? if : else <--- todo comprimido (ineteresante :v)
        contenido += (esto.value.charAt(i) == " ") ? "_" : esto.value.charAt(i);
    };
    contenido = limpiarEnc(contenido);
    return contenido;
}

function limpiarEnc(cadena){
    var contenido = "";
    for (var i = 0; i < cadena.length; i++) {
        if(cadena.charAt(i) === "§"){ 
        contenido += "";
        i += 1;
        }
        else {
            contenido += cadena.charAt(i);
        }
    }
    return contenido;
}

function uuid() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
};

//no puedo borrar estas advertencias (-_-)
function Advertencia(modo) {
	var nothing = document.getElementById('null');
    try {
        if (modo === 'crear') {
            var para = document.createElement('p');
            para.id = 'null';
            para.style = 'color:black';
            para.textContent = 'No files currently selected for upload';
            preview.insertBefore(para, skins);
        }
        else if (modo === 'eliminar') {
            console.log('advertencia eliminada');
            preview.removeChild(nothing);
        }
    }
    catch (err) { }
}

/*
    ERRORES

conocidos:
 el mensaje de "ningun archvio seleccionado" no se borra despues de usar el boton reset
 los dataURL no se borran al usar el reset

*/