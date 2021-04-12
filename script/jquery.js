// AQUI TEM FOCUS
$(document).ready(function(){
$("#email").focus(function(){
    $("#email").css("background-color","rgb(213, 248, 213");
 })

 $("#click").ready(function(){
  $("#ancoraContato").hide();
 })

$("#click").click(function(){
  $("#ancoraContato").show();
 })
 

})


    // Função para aumentar a fonte
    window.onload = function() {
      var elementBody = document.querySelector('body');
      var elementDesenvolvedores = document.querySelector('.desenvolvedores');
      var elementBtnIncreaseFont = document.getElementById('increase-font');
      var elementBtnDecreaseFont = document.getElementById('decrease-font');
      var fontSize = 100;
      var increaseDecrease = 10;

      // Evento de click para aumentar a fonte
      elementBtnIncreaseFont.addEventListener('click', function(event) {
          fontSize = fontSize + increaseDecrease;
          elementBody.style.fontSize = fontSize + '%';
          elementDesenvolvedores.style.fontSize = fontSize + '%';
          $('#increase-font').hide()
      });

      // Evento de click para diminuir a fonte
      elementBtnDecreaseFont.addEventListener('click', function(event) {
          fontSize = fontSize - increaseDecrease;
          elementBody.style.fontSize = fontSize + '%';
          $('#increase-font').show()
      });
  }



        // DATA NO FOOTER
        const zeroFill = n => {
          return ('0' + n).slice(-2);
        }
  
        // Cria intervalo
        const interval = setInterval(() => {
          // Pega o horário atual
          const now = new Date();
  
          // Formata a data conforme dd/mm/aaaa hh:ii:ss
          const dataHora = (now.getUTCDate()) + '/' + zeroFill((now.getMonth() + 1)) + '/' + now.getFullYear() + ' ' + zeroFill(now.getHours()) + ':' + zeroFill(now.getMinutes()) + ':' + zeroFill(now.getSeconds());
  
      //exibe na tela usando a div#data-hora
      document.getElementById('data-hora').innerHTML = dataHora;
    }, 1000)