//
var digitoA;
var digitoB;
var operacion;
var cifra = 0;
var igual = 0;

$(document).ready(function () {
  //ingreso de las cifras
  $("#uno").on("click", function () {
    if (cifra == 1 || igual == 1) {
      limpiar();
      cifra = 0;
      igual = 0;
    }
    $("#resultado").append("1");
  });
  $("#dos").on("click", function () {
    if (cifra == 1 || igual == 1) {
      limpiar();
      cifra = 0;
      igual = 0;
    }
    $("#resultado").append("2");
  });
  $("#tres").on("click", function () {
    if (cifra == 1 || igual == 1) {
      limpiar();
      cifra = 0;
      igual = 0;
    }
    $("#resultado").append("3");
  });
  $("#cuatro").on("click", function () {
    if (cifra == 1 || igual == 1) {
      limpiar();
      cifra = 0;
      igual = 0;
    }
    $("#resultado").append("4");
  });
  $("#cinco").on("click", function () {
    if (cifra == 1 || igual == 1) {
      limpiar();
      cifra = 0;
      igual = 0;
    }
    $("#resultado").append("5");
  });
  $("#seis").on("click", function () {
    if (cifra == 1 || igual == 1) {
      limpiar();
      cifra = 0;
      igual = 0;
    }
    $("#resultado").append("6");
  });
  $("#siete").on("click", function () {
    if (cifra == 1 || igual == 1) {
      limpiar();
      cifra = 0;
      igual = 0;
    }
    $("#resultado").append("7");
  });
  $("#ocho").on("click", function () {
    if (cifra == 1 || igual == 1) {
      limpiar();
      cifra = 0;
      igual = 0;
    }
    $("#resultado").append("8");
  });
  $("#nueve").on("click", function () {
    if (cifra == 1 || igual == 1) {
      limpiar();
      cifra = 0;
      igual = 0;
    }
    $("#resultado").append("9");
  });
  $("#cero").on("click", function () {
    if (cifra == 1 || igual == 1) {
      limpiar();
      cifra = 0;
      igual = 0;
    }
    $("#resultado").append("0");
  });
  $("#punto").on("click", function () {
    if (cifra == 1 || igual == 1) {
      limpiar();
      cifra = 0;
      igual = 0;
    }
    $("#resultado").append(".");
  });

  //resetea las variables
  $("#reset").on("click", function () {
    resetear();
  });

  //operaciones
  $("#suma").on("click", function () {
    digitoA = $("#resultado").html();
    operacion = "+";
    cifra = 1;
  });
  $("#resta").on("click", function () {
    digitoA = $("#resultado").html();
    operacion = "-";
    cifra = 1;
  });
  $("#multiplicacion").on("click", function () {
    digitoA = $("#resultado").html();
    operacion = "*";
    cifra = 1;
  });
  $("#division").on("click", function () {
    digitoA = $("#resultado").html();
    operacion = "/";
    cifra = 1;
  });
  $("#raiz").on("click", function () {
    digitoA = $("#resultado").html();
    operacion = "√";
    cifra = 1;
    resolver();
  });
  $("#potencia").on("click", function () {
    digitoA = $("#resultado").html();
    operacion = "^";
    cifra = 1;
  });
  $("#igual").on("click", function () {
    digitoB = $("#resultado").html();
    resolver();
    igual = 1;
  });
});

//Operaciones
function limpiar() {
  $("#resultado").html("");
}

function resetear() {
  $("#resultado").html("");
  digitoA = 0;
  digitoB = 0;
  operacion = "";
  cifra = 0;
}

function resolver() {
  var res = 0;
  switch (operacion) {
    case "+":
      res = parseFloat(digitoA) + parseFloat(digitoB);
      break;

    case "-":
      res = parseFloat(digitoA) - parseFloat(digitoB);
      break;

    case "*":
      res = parseFloat(digitoA) * parseFloat(digitoB);
      break;

    case "/":
      res = parseFloat(digitoA) / parseFloat(digitoB);
      break;

    case "√":
      res = Math.sqrt(parseFloat(digitoA));
      break;

    case "^":
      res = Math.pow(parseFloat(digitoA), parseFloat(digitoB));
      break;
  }
  resetear();
  $("#resultado").html(res);
}
