var emailValido; // variavel global para testar email.

// Comorbidade teste
var testaIMC;
var gestacao;
var etnia;
var prof;

const valoresComorbidades = function () {
  let array = [];
  let checkboxes = document.querySelectorAll("input[type=checkbox]:checked");

  for (let i = 0; i < checkboxes.length; i++) {
    array.push(checkboxes[i].value);
  }
  return array;
};

$("#gestante").blur(function seGestante() {
  const gestante = document.getElementById("gestante");
  let optGestante = gestante.options[gestante.selectedIndex];

  if (optGestante.value == "sim") {
    gestacao = true;

    return gestacao;
  } else {
    gestacao = false;

    return gestacao;
  }
});

// etnia

// AQUI TEM BLUR

$("#etnia").blur(function seEtnia() {
  const raca = document.getElementById("etnia");
  let optEtnia = raca.options[raca.selectedIndex];

  if (optEtnia.value == "indigena") {
    etnia = true;
    return etnia;
  } else {
    etnia = false;
    return etnia;
  }
});

// profissao

$("#profissao").blur(function seProfissao() {
  const profissao = document.getElementById("profissao");
  let optProfissao = profissao.options[profissao.selectedIndex];

  if (optProfissao.value == "0") {
    prof = false;

    return prof;
  } else {
    prof = true;

    return prof;
  }
});

function comorbidade() {
  let arrayDeComorbidades = valoresComorbidades();

  if (arrayDeComorbidades.length > 0 && gestacao == false) {
    return true;
  } else {
    return false;
  }
}

// Comorbidade teste

// Função para aumentar a fonte
window.onload = function () {
  var elementBody = document.querySelector("body");
  var elementBtnIncreaseFont = document.getElementById("increase-font");
  var elementBtnDecreaseFont = document.getElementById("decrease-font");
  // Padrão de tamanho, equivale a 100% do valor definido no Body
  var fontSize = 120;
  // Valor de incremento ou decremento, equivale a 10% do valor do Body
  var increaseDecrease = 10;

  // Evento de click para aumentar a fonte
  elementBtnIncreaseFont.addEventListener("click", function (event) {
    fontSize = fontSize + increaseDecrease;
    elementBody.style.fontSize = fontSize + "%";
    $("#increase-font").hide();
  });

  // Evento de click para diminuir a fonte
  elementBtnDecreaseFont.addEventListener("click", function (event) {
    fontSize = fontSize - increaseDecrease;
    elementBody.style.fontSize = fontSize + "%";
    $("#increase-font").show();
  });
};

// Barra de progresso - jQUERY UI

$(function () {
  var $progress = $("#progress"), // Barra de Progresso.
    $progressElements = $(".progress"), // Elementos que devem ser checados
    // para modificar o valor da barra.
    TOTAL = $progressElements.length; // Total de elementos.

  $progressElements.on("blur, change", function () {
    // Faz um filtro com o total elementos válidos.
    // Nesse caso, campos que não estejam "em branco" e que não estejam marcados
    // como ':invalid'.
    var valid = $progressElements.filter(function () {
      return (
        ($(this).val() || $(this).prop("checked")) && !$(this).is(":invalid")
      );
    }).length;

    // Calcula a porcentagem e altera o valor da barra.
    var percent = (valid * 100) / TOTAL,
      current = $progress.val();

    var increase = percent > current;

    var transition = setInterval(function () {
      if ((increase && current >= percent) || (!increase && current <= percent))
        clearInterval(transition);

      var value = $progress.val();
      value = increase ? value + 1 : value - 1;
      current = value;

      $progress.val(current);
    }, 10);
  });
});

// Comorbidades

$("#comorbidades").blur(function temComorbidade() {
  const comorbidade = document.getElementById("comorbidades");

  const optComorbidade = comorbidade.options[comorbidade.selectedIndex];

  if (optComorbidade.value == "sim") {
    $("#opcoesComorbidades").show();
    return optComorbidade.value;
  } else if (optComorbidade.value == "nao") {
    $("#opcoesComorbidades").hide();
    return optComorbidade.value;
  } else {
    return optComorbidade.value;
  }
});

//////////////////////////

// Checa sexo e abre opçao gestante se for feminino

// TEM BLUR AQUI

$("#sexo").blur(function seFeminino() {
  const feminino = document.getElementById("sexo");
  const optGest = feminino.options[sexo.selectedIndex];
  console.log(optGest.value);
  if (optGest.value == "feminino") {
    $(".gestante").fadeIn("slow"); // aqui está o FADE!
  } else {
    $(".gestante").hide();
    return;
  }
});

// DATA NO FOOTER
const zeroFill = (n) => {
  return ("0" + n).slice(-2);
};

// Cria intervalo
const interval = setInterval(() => {
  // Pega o horário atual
  const now = new Date();

  // Formata a data conforme dd/mm/aaaa hh:ii:ss
  const dataHora =
    now.getUTCDate() +
      "/" +
    zeroFill(now.getMonth() + 1) +
    "/" +
    now.getFullYear() +
    " " +
    zeroFill(now.getHours()) +
    ":" +
    zeroFill(now.getMinutes()) +
    ":" +
    zeroFill(now.getSeconds());

  //exibe na tela usando a div#data-hora
  document.getElementById("data-hora").innerHTML = dataHora;
}, 1000);
// função que valida o email
function validacaoEmail(field) {
  // variaveis para testar se é valido
  let usuario = field.value.substring(0, field.value.indexOf("@"));
  // criação de substring que devolve 0 e o index de @
  let dominio = field.value.substring(
    field.value.indexOf("@") + 1,
    field.value.length
  );
  // criação de substring que devolve index de @ + 1 e o tamanhdo do campo field
  // if para testar se acha os simbolos @, . e espaço
  if (
    usuario.length >= 1 &&
    dominio.length >= 3 &&
    usuario.search("@") == -1 &&
    dominio.search("@") == -1 &&
    usuario.search(" ") == -1 &&
    dominio.search(" ") == -1 &&
    dominio.search(".") != -1 &&
    dominio.indexOf(".") >= 1 &&
    dominio.lastIndexOf(".") < dominio.length - 1
  ) {
    // se encontrar retorna true e passa o email
    emailValido = true;
    return emailValido;
  } else {
    // se n encontrar retorna false e fica vermelho a div
    emailValido = false;
    return emailValido;
  }
}

// a função escopo engloba todas as funções, usamos prevent default para impedir que a pagina atualize
// guardando os dados

function escopo() {
  //as variaveis form e resultado vão nos permitir pegar somente os valores do form e depois substituir dentro
  // da constante resultado que tera o valor da classe resposta
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resposta");

  function resultadoDoForm(evento) {
    evento.preventDefault(); // impede que atualize a página salvando os dados do form

    // constantes para armazenar os dados que o usuario nos deu

    const nome = document.getElementById("nome");
    const sexo = document.getElementById("sexo");
    const cpf = document.getElementById("cpf");
    const ano = document.getElementById("ano");
    const mes = document.getElementById("mes");
    const dia = document.getElementById("diaNascimento");
    const email = document.getElementById("email");

    // essa função passa todas as letras do nome para letra maiuscula

    function nomeEmcaixaAlta(nome) {
      const nomeCaps = nome.value.toUpperCase();
      return nomeCaps;
    }

    // essa função testa o CPF. Retirado de -> https://www.devmedia.com.br/validar-cpf-com-javascript/23916

    function TestaCPF(strCPF) {
      let Soma;
      let Resto;
      Soma = 0;
      if (strCPF == "00000000000") {
        // se a string for igual a zero retorna false
        return false;
      }

      for (i = 1; i <= 9; i++)
        // soma = 0 + parseInt do primeiro valor de strCpf * (11 - 1);
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
      // Resto = (Novo valor de Soma * 10) modulo 11);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) {
        // se o resto é igual a 10 OU 11 resto = 0;
        Resto = 0;
      }

      if (Resto != parseInt(strCPF.substring(9, 10))) {
        // se resto é diferente do valor na 9 posição volta falso e cpf inválido
        return false;
      }

      // Repetimos a lógica
      Soma = 0;
      for (i = 1; i <= 10; i++)
        Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
      Resto = (Soma * 10) % 11;

      if (Resto == 10 || Resto == 11) {
        Resto = 0;
      }
      if (Resto != parseInt(strCPF.substring(10, 11))) {
        return false;
      }
      return true;
    }

    // Essa função testa se o usário tem idade maior que 0 ou menor que 130

    function testaIdade(anoNascimento) {
      // criamos o date para comparar a data atual com o ano de nascimento do usuário
      const date = new Date();

      const rangeIdade = parseInt(date.getFullYear()) - parseInt(anoNascimento);

      if (rangeIdade < 0 || rangeIdade > 130) {
        return "false";
      } else {
        return parseInt(rangeIdade);
      }
    }

    // Essa função pega o valor do seletor sexo e retorna para adicionarmos na div

    function qualSexo() {
      const opt = sexo.options[sexo.selectedIndex];

      if (opt.value == "masculino") {
        return opt.value;
      } else if (opt.value == "feminino") {
        return opt.value;
      } else {
        return opt.value;
      }
    }

    // função que testa caso o mes ou o dia do nascimento já tenha passado

    function idadeMesDia() {
      const diaHoje = new Date(); // cria obj data de referencia de hoje.
      const optMes = mes.options[mes.selectedIndex]; // pega o mes selecionado no input select]
      const optDia = parseInt(dia.value); // pega o valor do dia que o usuario colocou e transforma em inteiro
      const idadeMes = parseInt(diaHoje.getMonth()) - parseInt(optMes.value); // se esse valor é menor que zero ->
      // -> o mes de aniversario já passou e mantém a idade.
      const idadeDia = parseInt(diaHoje.getDate()) - parseInt(optDia); // se esse valor é menor que zero ->
      // -> o dia de aniversario já passou e mantém a idade.

      // baseado nos valores idadeMes e idadeDia testamos se o usuario ja fez aniversario esse ano ou não
      // se ele ainda não fez diminui 1 se ele ja fez mantem o valor
      if (idadeMes < 0 || (idadeMes == 0 && idadeDia < 0)) {
        return true;
      } else {
        return false;
      }
    }

    // a função printar tela usa todas as funções anteriores para testar e printar na div o resultado

    function printarTela() {
      const NOME = nomeEmcaixaAlta(nome);
      let idade = testaIdade(ano.value);
      const genero = qualSexo();
      const testandoIdade = idadeMesDia();
      const temComorbidade = comorbidade();
      const peso = document.getElementById("peso");
      const altura = document.getElementById("altura");
      let fasePessoa;

      const IMC = Number(peso.value) / Math.pow(Number(altura.value), 2);

      if (IMC > 30) {
        testaIMC = true;
      } else {
        testaIMC = false;
      }

      if (testandoIdade) {
        // diminui um ano se ja passou o aniversário da pessoa
        idade = idade - 1;
      }

      console.log("Ver esse" + gestacao);

      function fase() {
        if ( ((idade > 18 && etnia == "indigena") || prof == 1 || idade >= 75) && gestacao === false ) 
        { return "1";
        } else if ((idade >= 60 && idade <= 74) && gestacao === false) {
          return "2";
        } else if (
          ((idade > 18 && temComorbidade === true) && gestacao === false) ||
          testaIMC === true
        ) {
          return "3";
        } else if ((prof > 1 && prof < 5) && gestacao === false) {
          return "4";
        } else {
          return `sem prioridade`;
        }
      }

      fasePessoa = fase();

      if (
        temComorbidade === true ||
        testaIMC === true ||
        idade > 60 ||
        etnia == true ||
        prof == true
      ) {
        // printa o resultado na div abaixo do form
        resultado.style.backgroundColor = "#79FFA0";
        resultado.innerHTML = `Olá ${NOME}, o senhor/senhora possui comorbidades, pedimos que você tenha paciência, 
      pois entraremos em contato pelo email informado para agendar a primeira dose da Vacina para a COVID-19. Informamos
      que você se encontra no grupo ${fasePessoa}`;
      } else {
        resultado.style.backgroundColor = "#79FFA0";
        resultado.innerHTML = `Olá ${NOME}, o senhor/senhora não possui comorbidades ou é gestante, pedimos que você tenha paciência, 
      já já chegará a sua vez de tomar a primeira dose da Vacina para a COVID-19`;
      }
    }

    const cpfValido = TestaCPF(cpf.value);
    const idadeValida = testaIdade(ano.value);

    // se o cpf for invalido (false) ele retorna CPF invalido e assim para a idade e email
    if (!cpfValido) {
      document.getElementById("resposta").innerHTML = "CPF invalido";
      resultado.style.backgroundColor = "red";
    } else if (isNaN(idadeValida)) {
      document.getElementById("resposta").innerHTML = "Idade invalida";
      resultado.style.backgroundColor = "red";
    } else if (!emailValido) {
      document.getElementById("resposta").innerHTML = "E-mail invalido";
      resultado.style.backgroundColor = "red";
    } else {
      printarTela();
    }
  }

  // esse comando faz com que a pagina nao de refresh e que
  // quando cliquemos no botao chamamos a função resultadoDoForm()
  form.addEventListener("submit", resultadoDoForm);
}

// chamamos a função que encapsula todas as outras menos a função de email
escopo();
