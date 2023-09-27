$(document).ready( function(){

  $('#telefone').mask('(00) 00000-0000')
  // $('#telefone').mask('(00) 00000-0000', {
  //   placeholder: '(__) ______-____'
  // })

  $(document).ready(function() {
    const inputNome = $('#nome');
    inputNome.on('keyup', function() {
        let nomeCompleto = inputNome.val().split(' ');
        if (nomeCompleto.length > 1 && nomeCompleto[0].length >= 3 && nomeCompleto[1].length >= 3) {
            inputNome.css('color', 'black');
            $('#erroInput').text('');
        } else {
            $('#erroInput').text('Digite o nome completo');
            inputNome.css('color', '#e15f41');
        }
    });
});

})