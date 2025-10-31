// Máscaras simples para CPF, telefone, CEP
function mascaraCPF(v){
  v.value = v.value.replace(/\D/g,'').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d)/,'$1.$2').replace(/(\d{3})(\d{1,2})$/,'$1-$2');
}
function mascaraTelefone(v){
  v.value = v.value.replace(/\D/g,'').replace(/(\d{2})(\d)/,'($1) $2').replace(/(\d{5})(\d{4})$/,'$1-$2');
}
function mascaraCEP(v){
  v.value = v.value.replace(/\D/g,'').replace(/(\d{5})(\d{3})$/,'$1-$2');
}

// conecta máscara aos inputs existentes (aplica oninput)
document.addEventListener('DOMContentLoaded', function(){
  const cpf = document.getElementById('cpf');
  const tel = document.getElementById('telefone');
  const cep = document.getElementById('cep');

  if(cpf) cpf.addEventListener('input', function(){ mascaraCPF(this); });
  if(tel) tel.addEventListener('input', function(){ mascaraTelefone(this); });
  if(cep) cep.addEventListener('input', function(){ mascaraCEP(this); });

  // Validação simples do formulário
  const form = document.getElementById('form-cadastro');
  const mensagem = document.getElementById('mensagem');

  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      if(form.checkValidity()){
        mensagem.textContent = 'Cadastro enviado com sucesso (simulado). Obrigado!';
        form.reset();
      } else {
        mensagem.textContent = 'Por favor, preencha todos os campos obrigatórios corretamente.';
        form.reportValidity();
      }
    });
  }
});
