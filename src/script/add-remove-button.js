var steps = 1
function creatNextStep(){
    steps++
    var nextStep = document.getElementById("montagemFluxograma");
    nextStep.innerHTML += `
    <div id=${steps} class="step" ondrop="dropThis(event)" ondragover="allowDropThis(event)"></div>`
}

function removeThisStep(){
    var thisStep = document.getElementById(`${steps}`)
    thisStep.remove()
    steps --
    console.log(steps)
}