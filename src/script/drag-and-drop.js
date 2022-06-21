function allowDropThis(i){
    i.preventDefault();
}

function dragThis(i){
    i.dataTransfer.setData("action", i.target.id);
}

function dropThis(i){
    i.preventDefault();
    var data = i.dataTransfer.getData("action");
    i.target.appendChild(document.getElementById(data));
}