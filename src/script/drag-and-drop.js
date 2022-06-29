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
    let image_id = i.dataTransfer.getData("item_drag");                
    
    // variavel que seta a imagem do item segurado
    let image_src = document.getElementById(image_id).src;
    
    // variavel que coleta o id do alvo
    let step = document.getElementById(i.target.id);    
    let step_id = step.id

    let classChange = document.getElementById(step_id)
    classChange.className = "step"

    step.innerHTML = `
    <div id="${image_id}_passo_${step_id}" ondblclick="popup(${image_id}_popup_${step_id})">
        <img src="${image_src}">
        <div class="footerButton">
            <button id="remove_button_${step_id}" class="removeButton" onclick="removeThisStep(${image_id}_passo_${step_id}, ${step_id})"></button>
        </div>
    </div>
    <div id = "${image_id}_popup_${step_id}" class = "conditionPopup hiddenPopup">
        <div id = "${image_id}_closePopup_${step_id}">
            <a href="#" onclick='popup(${image_id}_popup_${step_id})'>X</a>
            <h6>${image_id}. Passo ${step_id}</h6>
        </div>
    </div>`
}