// JQUERY UI SLIDE
$(document).ready(function() {
    $("#content-slider").lightSlider({
        loop:true,
        keyPress:true
    });
    $('#image-gallery').lightSlider({
        gallery:true,
        item:1,
        thumbItem:9,
        slideMargin: 0,
        speed:500,
        auto:true,
        loop:true,
        onSliderLoad: function() {
            $('#image-gallery').removeClass('cS-hidden');
        }  
    });
});

$(document).ready(function() {
    var slider = $("#lightSlider").lightSlider();
    slider.goToSlide(3);
    slider.goToPrevSlide();
    slider.goToNextSlide();
    slider.getCurrentSlideCount();
    slider.refresh();
    slider.play(); 
    slider.pause();    
  });

// FUNÇÃO PARA ONGS
// AQUI TEM TOGGLE
$("#ongs-parceiras").hide()
$("#botaoOngs").click(function(){
    $("#ongs-parceiras").slideToggle("slow")})

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


    // Função para aumentar a fonte
    window.onload = function() {
      var elementBody = document.querySelector('body');
      var elementBtnIncreaseFont = document.getElementById('increase-font');
      var elementBtnDecreaseFont = document.getElementById('decrease-font');
      var fontSize = 120;
      var increaseDecrease = 10;

      // Evento de click para aumentar a fonte
      elementBtnIncreaseFont.addEventListener('click', function(event) {
          fontSize = fontSize + increaseDecrease;
          elementBody.style.fontSize = fontSize + '%';
          $('#increase-font').hide()
          $('#decrease-font').show()
      });

      // Evento de click para diminuir a fonte
      elementBtnDecreaseFont.addEventListener('click', function(event) {
          fontSize = fontSize - increaseDecrease;
          elementBody.style.fontSize = fontSize + '%';
          $('#increase-font').show()
          $('#decrease-font').hide()
      });
  }