var fluxograma_passo = 0
//Função padrão
function allowDropThis(i){
    i.preventDefault();
}
//Coleta todas as informações do item selecionado, com o parametro 'id'
function dragThis(i){
    // coleta o id do target
    i.dataTransfer.setData("item_drag", i.target.id);
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
    
    // constante que seleciona a class do alvo   
    // função para tirar as bordas do alvo
    //step_css.style.border = 'none';
    // função para inserir o id e classe no alvo selecionado
    step.innerHTML = `<img id="${i.target.id}${fluxograma_passo}" src="${imagen_src}"> <div class="footerButton"><button id="remove_button_${i.target.id}${fluxograma_passo}" class="removeButton"></button><button id="add_button_${i.target.id}${fluxograma_passo}" class="addButton"></button></button></div>`
}