//Função padrão
function allowDropThis(i){
    i.preventDefault();
}
//Coleta todas as informações do item selecionado, com o parametro 'id'
function dragThis(i){
    // coleta o id do target
    i.dataTransfer.setData("item_drag", i.target.id)
}
//Função para alterar quando realiza o drop
function dropThis(i){
    i.preventDefault();

    // variavel para setar o id do intem segurado
    var imagen_id = i.dataTransfer.getData("item_drag");                
    
    // variavel que seta a imagem do item segurado
    var imagen_src = document.getElementById(imagen_id).src;
    
    // variavel que coleta o id do alvo
    var step = document.getElementById(i.target.id);    
    var step_id = step.id

    var classChange = document.getElementById(step_id)
    classChange.className = "step"

    step.innerHTML = `<div id="${imagen_id}_passo_${step_id}"><img src="${imagen_src}"> <div class="footerButton"><button id="remove_button_${step_id}" class="removeButton" onclick="removeThisStep(passo_${step_id})"></button></div></div><style>.step:before {border: none;};</style>`

    
}