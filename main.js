var input = document.querySelector('input');
var preview = document.querySelector('.preview');
var skins = document.getElementById('skins');
var reseteo = document.getElementById('reseteo');
var nothing = document.getElementById('null');
var row1 = document.querySelector('.row-1');
var row2 = document.querySelector('.row-2');
var row3 = document.querySelector('.row-3');
var zipname = document.getElementById('zipname');
var dowload = document.getElementById('download');
var count = 0;

//iniciar el zip aqui hasta no saber como poder resetear
var zip = new JSZip;

input.style.visibility = 'hidden';

input.addEventListener('change', actualizarPreview);
reseteo.addEventListener('click', reset);
dowload.addEventListener('click', comprimir);

function actualizarPreview() {

    //eliminar mensaje de no archivos subidos
    Advertencia('eliminar');

    //atrapar los archivos subidos
    var curFiles = input.files;

    //devolver error si no se anaden archivos
    if (curFiles.length === 0) {
        Advertencia('crear');
    }

    //devolver error si se tratan de meter mas de 15 archivos
    else if (curFiles.length > 15 || count > 14) {
        alert("you reach the maximum of 15 files added");
    }

    //generar las cosas
    else {
        for (var i = 0; i < curFiles.length; i++) {
            var listItem = document.createElement('td');
            var nombre = document.createElement('input');

            if (validFileType(curFiles[i])) {
                //llamar a los archivos ingresados
                var name = curFiles[i].name;

                //crear preview e input
                nombre.id = 'nombres';
                nombre.value = name.replace('.png', '');
                var image = document.createElement('img');
                var dataimage = window.URL.createObjectURL(curFiles[i]);
                image.src = dataimage;
                listItem.appendChild(image);
                listItem.innerHTML += outerHTML = `<style> #skin-viewer-${count} * {background-image: url(\'${dataimage}\');}</style>`;
                listItem.innerHTML += outerHTML = `<div id=\"skin-viewer-${count}\" class=\"mc-skin-viewer-11x spin\"> <div class=\"player\"> <div class=\"head\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> <div class=\"accessory\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> </div> </div> <div class=\"body\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> <div class=\"accessory\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> </div> </div> <div class=\"left-arm\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> <div class=\"accessory\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> </div> </div> <div class=\"right-arm\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> <div class=\"accessory\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> </div> </div> <div class=\"left-leg\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> <div class=\"accessory\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> </div> </div> <div class=\"right-leg\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> <div class=\"accessory\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> </div> </div> </div> </div>`;
                listItem.appendChild(nombre);

                //anadir los archivos al zip
                zip.file(curFiles[i].name, curFiles[i]);

                //ir contando los archivos anadidos
                count += 1;

            }

            //error de archivo no aceptado
            else {
                var para = document.createElement('p');
                para.id = 'null';
                para.style = 'color:black';
                para.textContent = 'File name ' + curFiles[i].name + ': Not a valid file type. Update your selection.';
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
            //advertencia no mas archivos seran cargados
            else {
                alert("you reach the maximum of 15 files added");
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

    Advertencia('eliminar');
    
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
    zip.generateAsync({ type: 'blob' })
        .then(function (content) {
            //se le puede poner mcpack, no pasa nada
            console.log(zipname.value);
            saveAs(content, zipname.value+".zip");
        })
}


//no puedo borrar estas advertencias (-_-)
function Advertencia(modo) {
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