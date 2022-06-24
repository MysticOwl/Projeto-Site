var steps = 1
function creatNextStep(){
    steps++
    var nextStep = document.getElementById("montagemFluxograma");
    nextStep.innerHTML += `
    <div id=${steps} class="step" ondrop="dropThis(event)" ondragover="allowDropThis(event)"></div>`
}

function removeThisStep(step_id){
    var thisStep = document.getElementById(step_id)
    thisStep.remove()
}