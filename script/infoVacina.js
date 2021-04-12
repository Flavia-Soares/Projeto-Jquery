// Aqui está a função do accordion contando com 1 Ui
//AQUI TEM JQUERY UI ACCORDION//
$(function () {
  $("#accordion").accordion();
});

// aqui acaba a função de accordion

// aqui começa a função de scroll

function animeScroll() {
  let tela = ($(window).height() * 3) / 4;
  let distTopoScroll = $(document).scrollTop();
  $(".anime_inicial").each(function () {
    itemTopo = $(this).offset().top;
    if (distTopoScroll > itemTopo - tela) {
      $(this).addClass("anime_final");
    } else {
      $(this).removeClass("anime_final");
    }
  });
}
//AQUI TEM SCROLL//
animeScroll();
$(window).scroll(animeScroll);

// aqui acaba a função de scroll

// função de slideToggle nas divs com informações do que pode e do que não pode
//TEM CLICK e SLIDETOGGLE AQUI JQUERY//
$("#funciona, #naoFunciona").hide();

$("#funcionaToggle").click(function () {
  $("#funcionaToggle").hide()
  $("#funciona, #naoFunciona").slideToggle("slow");
});

$("#funciona").click(function () {
  $("#funciona").hide()
  $("#funcionaToggle").show()
});

// acaba função slideToggle

// função que troca de cores dependendo da fase

document.getElementById("enviar").addEventListener("click", function (e) {
  e.preventDefault();
  const taxaUti = document.getElementById("taxaOcupacao").value;
  if (taxaUti < 0 || taxaUti > 100) {
    alert("Taxa de Uti inválida");
    return;
  }
  
  if (taxaUti >= 0 && taxaUti <= 60) {
    $(".corPadrao").css("background-color", "green");
    $("#fase1Div").css("display", "none");
    $("#fase2Div").css("display", "none");
    $("#fase3Div").css("display", "none");
    $("#fase4Div").css("display", "block");
    $("#fase5Div").css("display", "none");
  }
  if (taxaUti > 60 && taxaUti <= 70) {
    $(".corPadrao").css("background-color", "yellow");
    $("#fase1Div").css("display", "none");
    $("#fase2Div").css("display", "none");
    $("#fase3Div").css("display", "block");
    $("#fase4Div").css("display", "none");
    $("#fase5Div").css("display", "none");
  }

  if (taxaUti > 70 && taxaUti <= 80) {
    $(".corPadrao").css("background-color", "orange");
    $("#fase1Div").css("display", "none");
    $("#fase2Div").css("display", "block");
    $("#fase3Div").css("display", "none");
    $("#fase4Div").css("display", "none");
    $("#fase5Div").css("display", "none");
  }
  if (taxaUti > 80 && taxaUti <= 100) {
    $(".corPadrao").css("background-color", "red");
    $("#fase1Div").css("display", "block");
    $("#fase2Div").css("display", "none");
    $("#fase3Div").css("display", "none");
    $("#fase4Div").css("display", "none");
    $("#fase5Div").css("display", "none");
  }
});

  document.getElementById("enviar").addEventListener("dblclick", function (e) {
    e.preventDefault();
    const taxaEnfermaria = document.getElementById("leitosEnfermaria").value;
    if (taxaEnfermaria < 0 || taxaEnfermaria > 100) {
      alert("Taxa de enfermaria inválida");
      return;
    } 
    
    if (taxaEnfermaria >= 0 && taxaEnfermaria <= 60) {
      $(".corPadrao").css("background-color", "green");
      $("#fase1Div").css("display", "none");
      $("#fase2Div").css("display", "none");
      $("#fase3Div").css("display", "none");
      $("#fase4Div").css("display", "block");
      $("#fase5Div").css("display", "none");
    }
    if (taxaEnfermaria > 60 && taxaEnfermaria <= 70) {
      $(".corPadrao").css("background-color", "yellow");
      $("#fase1Div").css("display", "none");
      $("#fase2Div").css("display", "none");
      $("#fase3Div").css("display", "block");
      $("#fase4Div").css("display", "none");
      $("#fase5Div").css("display", "none");
    }
  
    if (taxaEnfermaria > 70 && taxaEnfermaria <= 80) {
      $(".corPadrao").css("background-color", "orange");
      $("#fase1Div").css("display", "none");
      $("#fase2Div").css("display", "block");
      $("#fase3Div").css("display", "none");
      $("#fase4Div").css("display", "none");
      $("#fase5Div").css("display", "none");
    }
    if (taxaEnfermaria > 80 && taxaEnfermaria <= 100) {
      $(".corPadrao").css("background-color", "red");
      $("#fase1Div").css("display", "block");
      $("#fase2Div").css("display", "none");
      $("#fase3Div").css("display", "none");
      $("#fase4Div").css("display", "none");
      $("#fase5Div").css("display", "none");
    }
  }

);


// fim função que troca de cores dependendo da fase

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

