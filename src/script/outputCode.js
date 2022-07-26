const storage = [] //Arry para guardar as informações do fluxograma

function getCode(){ //Função que pega a quantidade de passos que serão executados
    storage.splice(0,storage.length) //Retesa to storage para que não tenha sobreposição
    cont_steps.forEach(setStorage)
    
    outputCode()
}

function setStorage(element){ //Inputa as informações no array
    storage.push(element)
}

function outputCode(){ //Transforma as informações do banco em output
    let output = document.getElementById("saida")

    output.innerText = ''

    storage.forEach(insert)

    function insert(element){
        output.innerHTML += `
            <div id=output_${element}>
                <a>
                    <pre>
                        Code
                    </pre>
                </a>
            </div>
        `
    }
    let div = document.getElementById('passo_1')
    console.log(div)    
}