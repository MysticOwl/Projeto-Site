function Usuario(){

  var Nome = "Sem nome";
  var Email = "Sem email";
  var Sugestao = "Sem sugestão";
  this.SetNome = SetNome;
  this.SetEmail = SetEmail;
  this.SetSugestao = SetSugestao;  
  this.GetNome = GetNome;
  this.GetEmail = GetEmail;
  this.GetSugestao = GetSugestao;

  function SetNome(_nome) {
    Nome = _nome;
  }

  function SetEmail(_email) {
      Email = _email;
  }

  function SetSugestao(_sugestao) {
    Sugestao = _sugestao;
  }

  function GetNome(){
    return Nome;
  }

  function GetEmail(){
    return Email;
  }
  
  function GetSugestao(){
    return Sugestao;
  }
}


const btn = document.querySelector('#send');

btn.addEventListener('click', function(e){
  e.preventDefault();


  var nome = document.querySelector('#name').value;
  var email = document.querySelector('#email').value;
  var sugestao = document.querySelector('#sugestion').value;

  var user = new Usuario();
  user.SetNome(nome);
  user.SetEmail(email);
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
  localStorage.setItem('Conectado', user.GetEmail());

  console.log("teste " + localStorage.getItem('Conectado'));
});









//console.log(teste);
//var x = user.GetNome();
//console.log('x ',x);
//export {x};