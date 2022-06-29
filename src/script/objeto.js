// Criação do objeto Usuário com nome, e-mail, senha e sugestão a serem pegos no formulário de cadastro
function Usuario(){

  var Nome = "Sem nome";
  var Email = "Sem email";
  var Senha = "Sem senha";
  var Sugestao = "Sem sugestão";
  this.SetNome = SetNome;
  this.SetEmail = SetEmail;
  this.SetSenha = SetSenha;
  this.SetSugestao = SetSugestao;  
  this.GetNome = GetNome;
  this.GetEmail = GetEmail;
  this.GetSenha = GetSenha;
  this.GetSugestao = GetSugestao;
// Funções para definirem nome, e-mail, senha e sugestão passadas pelo usuário
  function SetNome(_nome) {
    Nome = _nome;
  }

  function SetEmail(_email) {
      Email = _email;
  }

  function SetSenha(_senha) {
    Senha = _senha;
}

  function SetSugestao(_sugestao) {
    Sugestao = _sugestao;
  }

// Funções para retornarem as informações passadas pelo usuário para serem manipuladas
  function GetNome(){
    return Nome;
  }

  function GetEmail(){
    return Email;
  }

  function GetSenha(){
    return Senha;
  }
  
  function GetSugestao(){
    return Sugestao;
  }
}

//Função acionada por evento, ao clicar no botão enviar no formulário é iniciada a função
//para criar o novo objeto e inserir nele os dados passados pelo usuário no cadastro
document.querySelector('#send').addEventListener('click', function(){

//criação de variáveis para armazenar os dados passados no cadastro do usuário
  var nome = document.querySelector('#name').value;
  var email = document.querySelector('#email').value;
  var senha = document.querySelector('#password').value;
  var sugestao = document.querySelector('#sugestion').value;

//Criação do novo objeto
  var user = new Usuario();
//Definição das variavés do objeto
  user.SetNome(nome);
  user.SetEmail(email);
  user.SetSenha(senha);
  user.SetSugestao(sugestao);

  if(user.GetNome() != 'Sem nome'){
    console.log(user.GetNome());
    console.log(user.GetSugestao());
    if(user.GetSugestao() != ""){
      alert('Bem-vindo ' + user.GetNome() + 
      '\nSeu e-mail para o login é o: ' + user.GetEmail() +
      '\nObrigado pela sugestão, ela foi repassada para nossos *colaboradores* 😁');
    }else{
      alert('Bem-vindo ' + user.GetNome() + 
      '\n Seu e-mail para o login é o: ' + user.GetEmail());
    }
  }else{
    console.log('nop');
  }
  //Definição das variáveis que ficaram guardadas no cache do navegador
  localStorage.setItem('Conectado', user.GetEmail());
  localStorage.setItem('Usuario', user.GetNome());

  console.log("teste " + localStorage.getItem('Conectado'));
});