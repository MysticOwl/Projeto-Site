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

    if (image_id == "condition"){
        
        step.innerHTML = 
        `<div id="${step_id}_${image_id}" class="flexDisplay insideStep">
            <img src="${image_src}" ondblclick="popup(${step_id}_${image_id}_popup)">
                <div class="footerButton"><button id="remove_button_${step_id}" class="removeButton" onclick="removeThisStep(${step_id}_${image_id},${step_id})"></button></div>
            <div id = "${step_id}_${image_id}_popup" class = "popupDiv popupStyle"></div>
            <div id = "${image_id}_closePopup_${step_id}"></div>
            <div class="flexDisplay">

                <div id="${step_id}_${image_id}_true" class="step borderOn"><span>If</span></div>
                    <div id = "${step_id}_${image_id}_popup_true" class = "popupDiv popupStyle"></div>
                    <div id = "${image_id}_closePopup_${step_id}"></div>   
                <div id="${step_id}_${image_id}_false" class="step borderOn"><span>Else</span></div>
                    <div id = "${step_id}_${image_id}_popup_false" class = "popupDiv popupStyle"></div>
                    <div id = "${image_id}_closePopup_${step_id}"></div>
        
            </div>
        </div>`
    }
    else{

        step.innerHTML = 
        `<div id="${step_id}_${image_id}">
            <img src="${image_src}" ondblclick="popup(${step_id}_${image_id}_popup)">
                <div class="footerButton"><button id="remove_button_${step_id}" class="removeButton" onclick="removeThisStep(${step_id}_${image_id},${step_id})"></button></div>
            <div id = "${step_id}_${image_id}_popup" class = "popupDiv popupStyle"></div>
            <div id = "${image_id}_closePopup_${step_id}"></div>
        </div>`

    }

    switch (image_id){
        case "variavel":
            let variavel_popup = `${step_id}_${image_id}_popup`
            let var_popup = document.getElementById(variavel_popup)
            var_popup.innerHTML =`
                <a class="formA" href="#" onclick='popup(${step_id}_${image_id}_popup)'>x</a>
                <h4>Atributos-${image_id}.</h4>
                <forms>
                    <div>
                    <lable for="variavel_nome_${step_id}">Nome da variável:</lable>
                    <input class="inputForm" type="text" id="form_variavel_nome_${step_id}" name="variavel_nome_${step_id}">
                    <lable for="variavel_valor_${step_id}">Valor: </lable>
                    <input class="inputForm" type="text" id="form_variavel_valor_${step_id}" name="variavel_valor_${step_id}">
                    </div>
                </forms>
            `
        break;
        case "input":
            let input_popup = `${step_id}_${image_id}_popup`
            let in_popup = document.getElementById(input_popup)
            in_popup.innerHTML =`
                <a class="formA" href="#" onclick='popup(${step_id}_${image_id}_popup)'>x</a>
                <h4>Atributos-${image_id}.</h4>
                <div>
                <p><label for="input_text_${step_id}">Digite seu input:</label></p>
                <textarea id="input_text_${step_id}" name="input_text_${step_id}" rows="4" cols=40" placeholder="Digite aqui sua mensagem de input"></textarea>
                </div>
            `
        break;
        case "output":
            let output_popup = `${step_id}_${image_id}_popup`
            let out_popup = document.getElementById(output_popup)
            out_popup.innerHTML =`
                <a class="formA" href="#" onclick='popup(${step_id}_${image_id}_popup)'>x</a>
                <h4>Atributos-${image_id}.</h4>
                <div>
                <p><label for="output_text_${step_id}">Digite seu output:</label></p>
                <textarea id="output_text_${step_id}" name="output_text_${step_id}" rows="4" cols=40" placeholder="Digite aqui sua mensagem de output"></textarea>
                </div>
            `
        break;
        case "condition":
            let condition_popup = `${step_id}_${image_id}_popup`
            let cond_popup = document.getElementById(condition_popup)
            cond_popup.innerHTML =`
                <a class="" href="#" onclick='popup(${step_id}_${image_id}_popup)'>x</a>
                <h4>Atributos-${image_id}.</h4>
                <div>
                <p><label for="condition_text_${step_id}">Digite sua condição:</label></p>
                <textarea id="condition_text_${step_id}" name="condition_text_${step_id}" rows="4" cols=40" placeholder="Digite aqui sua condição"></textarea>
                </div>
            `
        break;
        case "loop":
            let loop_popup = `${step_id}_${image_id}_popup`
            let lp_popup = document.getElementById(loop_popup)
            lp_popup.innerHTML =`
                <a class="formA" href="#" onclick='popup(${step_id}_${image_id}_popup)'>x</a>
                <h4>Atributos-${image_id}.</h4>
                <forms>
                    <div>
                    <lable for="loop_start_${step_id}">de:</lable>
                    <input class="inputForm" type="number" id="form_loop_start_${step_id}" name="loop_start_${step_id}">
                    <lable for="loop_end_${step_id}">até: </lable>
                    <input class="inputForm" type="number" id="form_loop_end_${step_id}" name="loop_end_${step_id}">
                    </div>
                </forms>
            `            
        default:
    }
}