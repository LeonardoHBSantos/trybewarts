// Valida Email e Senha;

const email = document.getElementById('email');
const senha = document.getElementById('password');
const buttonSignIn = document.getElementById('sign-in');

function loginValidation() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    window.alert('Olá, Tryber!');
  } else {
    window.alert('Email ou senha inválidos.');
  }
}

buttonSignIn.addEventListener('click', loginValidation);

// Verifica se a caixa está marcada ao clicar e ao carregar a página;

const buttonSubmit = document.getElementById('submit-btn');
const checkbox = document.getElementById('agreement');
function checkboxValidation() {
  if (checkbox.checked === true) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
}

checkbox.addEventListener('click', checkboxValidation);
window.onload = checkboxValidation;

// Contador de caracteres

const text = document.getElementById('counter');
const areaTexto = document.getElementById('textarea');

areaTexto.addEventListener('input', () => {
  const sizeText = areaTexto.value.length;
  const diference = 500 - sizeText;
  text.innerText = diference.toString();
});
