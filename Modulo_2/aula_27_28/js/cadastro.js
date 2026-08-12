import { registrar } from "./autenticador.js"

const form = document.querySelector('#form-cadastro')
const aviso = document.querySelector('#aviso')


//Registrar o usuario ao enviar o formulario

form.addEventListener('submit', (evento) => {

    evento.preventDefault() //impede o recaregamento da pagina

    const usuario = {
        email: document.querySelector('#email').value,
        senha: document.querySelector('#senha').value
    }

    try{
        registrar(usuario)
        alert('Cadastro Realizado com Sucesso! Faça o login para continuar.')
        window.location.href= 'login.html'
    }catch(erro){
        aviso.textContent = erro.message
    }

})