var input = document.querySelector('input');
var preview = document.querySelector('.preview');
var skins = document.getElementById('skins');
var reseteo = document.getElementById('reseteo');
var nothing = document.querySelector('.null');
var row1 = document.querySelector('.row-1');
var row2 = document.querySelector('.row-2');
var row3 = document.querySelector('.row-3');
//var zip = new JSZip;
var count = 0;

input.style.visibility = 'hidden';

input.addEventListener('change', updateImageDisplay);
reseteo.addEventListener('click', reset);

function updateImageDisplay() {
    /* seccion que limpia las anteriores imagenes subidas y las reemplaza por nuevas
    while (preview.firstChild) {
           preview.removeChild(preview.firstChild);
       }
   */
    try {
        preview.removeChild(nothing);
    }
    catch{
        console.error();
    }
    var curFiles = input.files;
    if (curFiles.length === 0) {
        var para = document.createElement('p');
        para.class = 'null';
        para.style = 'color:black';
        para.textContent = 'No files currently selected for upload';
        preview.insertBefore(para, skins);
    }
    else if (curFiles.length > 15 || count > 14) {
        alert("you reach the maximum of 15 files added");
    }
    else {
        for (var i = 0; i < curFiles.length; i++) {
            var listItem = document.createElement('td');
            var nombre = document.createElement('input');

            if (validFileType(curFiles[i])) {
                var name = curFiles[i].name;
                nombre.id = 'nombres';
                nombre.value = name.replace('.png', '');
                var image = document.createElement('img');
                var dataimage = window.URL.createObjectURL(curFiles[i]);
                image.src = dataimage;
                /*
                                intento de volver a componer el data url para usarlo en el codigo
                                let bloba = await fetch(dataimage).then(r => r.blob());
                
                                intento de sacado de aqui
                                https://stackoverflow.com/questions/11876175/how-to-get-a-file-or-blob-from-an-object-url/11901662
                */
                var pinche_imagen = 'lobi_verde.png'
                listItem.appendChild(image);
                listItem.innerHTML += outerHTML = `<style> #skin-viewer-${count} * {background-image: url(\'${dataimage}\');}</style>`;
                listItem.innerHTML += outerHTML = `<div id=\"skin-viewer-${count}\" class=\"mc-skin-viewer-11x spin\"> <div class=\"player\"> <div class=\"head\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> <div class=\"accessory\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> </div> </div> <div class=\"body\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> <div class=\"accessory\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> </div> </div> <div class=\"left-arm\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> <div class=\"accessory\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> </div> </div> <div class=\"right-arm\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> <div class=\"accessory\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> </div> </div> <div class=\"left-leg\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> <div class=\"accessory\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> </div> </div> <div class=\"right-leg\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> <div class=\"accessory\"> <div class=\"top\"></div> <div class=\"left\"></div> <div class=\"front\"></div> <div class=\"right\"></div> <div class=\"back\"></div> <div class=\"bottom\"></div> </div> </div> </div> </div>`;
                listItem.appendChild(nombre);
                count += 1;

            } else {
                var para = document.createElement('p');
                para.class = 'null';
                para.style = 'color:black';
                para.textContent = 'File name ' + curFiles[i].name + ': Not a valid file type. Update your selection.';
                preview.insertBefore(para, skins);
            }


            if (count < 6) {
                row1.appendChild(listItem);
            }
            else if (count > 5 && count < 11) {
                row2.appendChild(listItem);
            }
            else if (count > 10 && count < 16) {
                row3.appendChild(listItem);
            }
            else {
                var aler = document.createElement('p');
                aler.textContent = 'no more files will be added';
                preview.appendChild(aler);
                input.setAttribute('disabled', 'disabled');
            }
        }
    }
}

var fileTypes = [
    'image/png'
]

function validFileType(file) {
    for (var i = 0; i < fileTypes.length; i++) {
        if (file.type === fileTypes[i]) {
            return true;
        }
    }

    return false;
}

function returnFileSize(number) {
    if (number < 1024) {
        return number + 'bytes';
    } else if (number > 1024 && number < 1048576) {
        return (number / 1024).toFixed(1) + 'KB';
    } else if (number > 1048576) {
        return (number / 1048576).toFixed(1) + 'MB';
    }
}

function reset() {
    while (row1.firstChild) {
        var dentroTd = row1.firstChild;
        var imagen = dentroTd.firstChild;
        console.log(imagen.src);
        window.URL.revokeObjectURL(imagen.src);
        console.log(imagen.src);
        row1.removeChild(row1.firstChild);
    };
    
    while (row2.firstChild) {
        var dentroTd = row2.firstChild;
        var imagen = dentroTd.firstChild;
        window.URL.revokeObjectURL(imagen.src);
        row2.removeChild(row2.firstChild);
    };
    
    while (row3.firstChild) {
        var dentroTd = row3.firstChild;
        var imagen = dentroTd.firstChild;
        window.URL.revokeObjectURL(imagen.src);
        row3.removeChild(row3.firstChild);
    };

    var para = document.createElement('p');
    para.class = 'null';
    para.style = 'color:black';
    para.textContent = 'No files currently selected for upload';
    preview.insertBefore(para, skins);
    
    console.log('reset exitoso');
}

/*
function generarZip(nombre, dataurl) {
    zip.file(`${nombre}`, )
}
*/