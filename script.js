const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.cabecalho-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})


////////////////////////////////////////////

function formulario() {
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let mensagem = document.getElementById("mensagem").value;
 
    // Verificando se os campos estão preenchidos
    if (nome === "" || email === "" || mensagem === "") {
       alert("Por favor, preencha todos os campos do formulário antes de enviar.");
       return false;
    } else {
       alert(`Olá ${nome}, sua mensagem foi enviada com sucesso! Nosso time de atendimento ao cliente entrará em contato em até 24 horas. Desde já agradecemos pela sua colaboração.`)
    }
 }

 function login() {
   let email = document.getElementById("email").value;
   let senha = document.getElementById("senha").value;

   // Verificando se os campos estão preenchidos
   if (email === "" || senha === "") {
      alert("Por favor, preencha todos os campos para fazer o LOGIN.");
      return false;
   } else {
      alert(`USUÁRIO LOGADO COM SUCESSO. \nPara acessar a ÁREA DO CLIENTE, pressione OK para provar que não é um robô.`)
   }
}