const cont_steps = new Array()

function creatNextStep(){
    let divStep = document.getElementById("montagemFluxograma");
    cont_steps.push({key:`passo_${cont_steps.length+1}`})
    divStep.innerHTML += `<div id=passo_${cont_steps.length} class="step borderOn" ondrop="dropThis(event)" ondragover="allowDropThis(event)"></div>`
    return console.log(cont_steps)
}

function removeThisStep(step_id,step){
    let thisStep = document.getElementById(step_id.id)
    thisStep.remove()
    step.classList.add("borderOn")
}

function removeLastStep(){
    let lastStep = document.getElementById(`passo_${cont_steps.length}`)
    lastStep.remove()
    cont_steps.pop()
}