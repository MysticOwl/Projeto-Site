function constructor(struct,image,step){ //Função construtora.
    /*
    Parâmetro (struct="string",image="string",step=DOMdiv)
    Struct sendo o tipo de input
    Image sendo o valor da estrutura
    Step sendo o passo onde encontra-se a estrutura
    */
    if (struct === "condition"){
            step.innerHTML =
            `<div id="${(step).id}_${struct}" class="flexDisplay insideStep">
                <img src="${image}" ondblclick="popup(${(step).id}_popup_${struct})">
                    <div class="footerButton"><button id="remove_button_${(step).id}" class="removeButton" onclick="removeThisStep(${(step).id}_${struct},${(step).id})"></button></div>
                <div id = "${(step).id}_popup_${struct}" class = "popupDiv popupStyle"></div>
                <div class="flexDisplay">

                    <div id="${(step).id}_${struct}_true" class="step borderOn"><span>If</span></div>
                        <div id = "${(step).id}_popup_${struct}_true" class = "popupDiv popupStyle"></div>
        
                    <div id="${(step).id}_${struct}_false" class="step borderOn"><span>Else</span></div>
                        <div id = "${(step).id}_popup_${struct}_false" class = "popupDiv popupStyle"></div>            
                </div>
            </div>`
    }
    else{
        step.innerHTML = 
        `<div id="${(step).id}_${struct}">
            <img src="${image}" ondblclick="popup(${(step).id}_popup_${struct})">
                <div class="footerButton"><button id="remove_button_${(step).id}" class="removeButton" onclick="removeThisStep(${(step).id}_${struct},${(step).id})"></button></div>
            <div id = "${(step).id}_popup_${struct}" class = "popupDiv popupStyle"></div>
        </div>`
    }
    constructorPopUp(struct,
                    (step = document.getElementById(`${(step).id}_popup_${struct}`))) 
}

function constructorPopUp(struct,step){ //Função que constroi a seção do popup.
    step.innerHTML =`    
        <a class="formA" href="#" onclick='popup(${step.id})'>x</a>
        <h4>${struct}.</h4>
    `
    switch(struct){
        case "variavel":
            step.innerHTML +=`
                <div>
                    <lable for="${(step).id}_nome_${struct}">Nome:</lable>
                    <input class="inputForm" type="text" id="form_${(step).id}_nome_${struct}" name="${(step).id}_nome_${struct}">
                    <lable for="${(step).id}_valor_${struct}">Valor:</lable>
                    <input class="inputForm" type="text" id="form_${(step).id}_valor_${struct}" name="${(step).id}_valor_${struct}">
                </div>
            `
            break
        case "loop":
            step.innerHTML +=`
                <div>
                    <p><label for="${(step).id}_enquanto_${struct}">Enquanto:</label></p>
                    <textarea id="${(step).id}_enquanto_${struct}" name="${(step).id}_enquanto_${struct}" rows="4" cols=40" placeholder="Digite aqui sua condição: var1 < var2"></textarea>

                    <p><label for="${(step).id}_faca_${struct}">Faça:</label></p>
                    <textarea id="${(step).id}_faca_${struct}" name="${(step).id}_faca_${struct}" rows="4" cols=40" placeholder="Digite aqui sua condição: var2 = var2 + 1"></textarea>
                </div>
            `
            break
        default:
            step.innerHTML +=`
                <div>
                    <p><label for="${(step).id}_text_${struct}">Insira o texto:</label></p>
                    <textarea id="${(step).id}_text_${struct}" name="${(step).id}_text_${struct}" rows="4" cols=40" placeholder="Digite aqui"></textarea>
                    <button type="button" onclick="buttonText(${step.id},(${(step).id}_text_${struct}))">Enviar</button>
                </div>
            `    
    }
}