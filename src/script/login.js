document.querySelector('#send').addEventListener('click', function(){
    console.log(localStorage.getItem('Conectado'));

    if (localStorage.getItem('Conectado') == null){
        alert('Erro: Usuário Não encontrado, Faça o cadastro!');
        window.location='register.html';
    }else{
        console.log('Conectado');
        alert('Usuário Conectado!');
    }
});