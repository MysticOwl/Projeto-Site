function allowDropThis(i){
    i.preventDefault();
}

function dragThis(i){
    i.dataTransfer.setData("imagen", i.target.id);
    console.log(i);
}

function dropThis(i){
    i.preventDefault();
    var imagen_id = i.dataTransfer.getData("imagen");
    var imagen_src = document.getElementById(imagen_id).src
    document.getElementById(i.target.id).innerHTML = `<img id="${i.target.id}" src="${imagen_src}">`;
    console.log(imagen_src);
}