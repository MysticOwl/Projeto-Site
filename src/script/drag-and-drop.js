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
    // variavel que coleta o id do alvo
    let step = document.getElementById(i.target.id);    
    let step_id = step.id
    //Variável resonsável por modular a classe do elemento step
    let classChange = document.getElementById(step_id)
    classChange.className = "step"
    //Função construtora
    constructor(i.dataTransfer.getData("item_drag"),
                document.getElementById(image_id).src,
                document.getElementById(i.target.id))
}
