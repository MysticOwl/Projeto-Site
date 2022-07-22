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
                <img src="${image}" ondblclick="popup(${(step).id}_${struct}_popup)">
                    <div class="footerButton"><button id="remove_button_${(step).id}" class="removeButton" onclick="removeThisStep(${(step).id}_${struct},${(step).id})"></button></div>
                <div id = "${(step).id}_${struct}_popup" class = "popupDiv popupStyle"></div>
                <div class="flexDisplay">

                    <div id="${(step).id}_${struct}_true" class="step borderOn"><span>If</span></div>
                        <div id = "${(step).id}_${struct}_popup_true" class = "popupDiv popupStyle"></div>
        
                    <div id="${(step).id}_${struct}_false" class="step borderOn"><span>Else</span></div>
                        <div id = "${(step).id}_${struct}_popup_false" class = "popupDiv popupStyle"></div>            
                </div>
            </div>`
    }
    else{
        step.innerHTML = 
        `<div id="${(step).id}_${struct}">
            <img src="${image}" ondblclick="popup(${(step).id}_${struct}_popup)">
                <div class="footerButton"><button id="remove_button_${(step).id}" class="removeButton" onclick="removeThisStep(${(step).id}_${struct},${(step).id})"></button></div>
            <div id = "${(step).id}_${struct}_popup" class = "popupDiv popupStyle"></div>
        </div>`
    }
    constructorPopUp(struct,
                    (step = document.getElementById(`${(step).id}_${struct}_popup`)))
}

function constructorPopUp(struct,step){ //Função que constroi a seção do popup.
    step.innerHTML =`    
        <a class="formA" href="#" onclick='popup(${step.id})'>x</a>
        <h4>${struct}.</h4>
    `
    switch(struct){
        case "variavel":
            step.innerHTML +=`
                <forms>
                    <div>
                    <lable for="${struct}_nome_${(step).id}">Nome:</lable>
                    <input class="inputForm" type="text" id="form_${struct}_nome_${(step).id}" name="${struct}_nome_${(step).id}">
                    <lable for="${struct}_valor_${(step).id}">Valor:</lable>
                    <input class="inputForm" type="text" id="form_${struct}_valor_${(step).id}" name="${struct}_valor_${(step).id}">
                    </div>
                </forms>    
            `
            break
        case "loop":
            step.innerHTML +=`
            <forms>
                <div>
                <lable for="start_${(step).id}">de:</lable>
                <input class="inputForm" type="number" id="form_start_${(step).id}" name="start_${(step).id}">
                <lable for="end_${(step).id}">até: </lable>
                <input class="inputForm" type="number" id="form_end_${(step).id}" name="end_${(step).id}">
                </div>
            </forms>
            `
            break
        default:
            step.innerHTML +=`
            <p><label for="${struct}_text_${(step).id}">Digite sua condição:</label></p>
            <textarea id="${struct}_text_${(step).id}" name="${struct}_text_${(step).id}" rows="4" cols=40" placeholder="Digite aqui sua condição"></textarea>
            </div>
        `
    }
}