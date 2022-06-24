var cont_steps = 0

function creatNextStep(){
    cont_steps++
    var divStep = document.getElementById("montagemFluxograma");
    divStep.innerHTML += `<div id=${cont_steps} class="step borderOn" ondrop="dropThis(event)" ondragover="allowDropThis(event)"></div>`
}

function removeThisStep(step_id, numberStep){
    var thisStep = document.getElementById(step_id.id)
    thisStep.remove()
    var step = document.getElementById(`${numberStep}`)
    step.classList.add("borderOn")
}

function removeLastStep(){
    var lastStep = document.getElementById(`${cont_steps}`)
    lastStep.remove()
    cont_steps--
}