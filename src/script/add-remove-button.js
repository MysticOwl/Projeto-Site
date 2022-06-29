var cont_steps = 0

function creatNextStep(){
    cont_steps++
    let divStep = document.getElementById("montagemFluxograma");
    divStep.innerHTML += `<div id=${cont_steps} class="step borderOn" ondrop="dropThis(event)" ondragover="allowDropThis(event)"></div>`
}

function removeThisStep(step_id, numberStep,step_popup){
    let thisStep = document.getElementById(step_id.id)
    let thisPopup = document.getElementById(step_popup.id)
    thisStep.remove()
    thisPopup.remove()
    let step = document.getElementById(`${numberStep}`)
    step.classList.add("borderOn")
}

function removeLastStep(){
    let lastStep = document.getElementById(`${cont_steps}`)
    lastStep.remove()
    cont_steps--
}