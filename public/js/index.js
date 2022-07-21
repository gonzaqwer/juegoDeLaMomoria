let iconos;
let tiempoBase = 0;
let tiempoRestante = 0;
let intentosMaximos = 0;
let movimientos = 0;
let cantidadCartas = 0;

let duracionPartidaInicial = null;
let tipoCartas = null;

function carcarIconos() {
    tipoCartas = document.getElementById("tipoCartas").value
  if (tipoCartas == "ajedrez") {
    iconos = [
      '<i class="fa-solid fa-chess-king"></i>',
      '<i class="fa-solid fa-chess-queen"></i>',
      '<i class="fa-solid fa-chess-knight"></i>',
      '<i class="fa-solid fa-chess-rook"></i>',
      '<i class="fa-solid fa-chess-bishop"></i>',
      '<i class="fa-solid fa-chess-pawn"></i>',
      '<i class="fa-solid fa-chess"></i>',
      '<i class="fa-solid fa-hourglass-empty"></i>',
      '<i class="fa-solid fa-chess-board"></i>',
      '<i class="fa-regular fa-chess-knight"></i>',
      '<i class="fa-regular fa-chess-king"></i>',
      '<i class="fa-regular fa-chess-queen"></i>',
    ];
  } else if (document.getElementById("tipoCartas").value == "animales") {
    iconos = [
      '<i class="fa-solid fa-otter"></i>',
      '<i class="fa-solid fa-bugs"></i>',
      '<i class="fa-solid fa-dog"></i>',
      '<i class="fa-solid fa-spider"></i>',
      '<i class="fa-solid fa-cat"></i>',
      '<i class="fa-solid fa-horse"></i>',
      '<i class="fa-solid fa-dove"></i>',
      '<i class="fa-solid fa-hippo"></i>',
      '<i class="fa-solid fa-cow"></i>',
      '<i class="fa-solid fa-fish"></i>',
      '<i class="fa-solid fa-shrimp"></i>',
      '<i class="fa-solid fa-dragon"></i>',
    ];
  } else {
    iconos = [
      '<i class="fa-solid fa-terminal"></i>',
      '<i class="fa-solid fa-code"></i>',
      '<i class="fa-solid fa-code-fork"></i>',
      '<i class="fa-solid fa-code-merge"></i>',
      '<i class="fa-solid fa-code-pull-request"></i>',
      '<i class="fa-regular fa-code-pull-request"></i>',
      '<i class="fa-solid fa-bug-slash"></i>',
      '<i class="fa-solid fa-folder"></i>',
      '<i class="fa-regular fa-file-code"></i>',
      '<i class="fa-regular fa-keyboard"></i>',
      '<i class="fa-solid fa-mug-saucer"></i>',
      '<i class="fa-solid fa-laptop-code"></i>',
    ];
  }
  return iconos;
}

function generarTablero() {
  cantidadCartas = document.getElementById("cantidadCartas").value;

  if (cantidadCartas == 8) {
    intentosMaximos = 4;
  } else if (cantidadCartas == 16) {
    intentosMaximos = 40;
  } else {
    intentosMaximos = 60;
  }

  tiempoPartida();

  iconos = carcarIconos();
  let tablero = document.getElementById("tablero");
  let tarjetas = [];
  for (let index = 0; index < cantidadCartas; index++) {
    tarjetas.push(`
    <div class="contenedorTarjeta conteiner">
        <div class="tarjeta" id="tarjeta${index}" onclick="seleccionar(${index})">
          <div class="cara superior conteiner">
          <i class="fa-solid fa-question"></i>
          </div>
          <div class="cara inferior conteiner" id="inferior${index}">
            ${iconos[0]}
          </div>
        </div>
        </div>
        `);
    if (index % 2 == 1) {
      iconos.splice(0, 1);
    }
  }
  tarjetas.sort(() => Math.random() - 0.5);
  duracionPartidaInicial = document.getElementById("duracionPartida").value;
  tablero.innerHTML = tarjetas.join(" ");
  tablero.innerHTML =
    tablero.innerHTML +
    `<br>
  <button class="bg-white px-4 border-b-2 rounded mt-3" onclick="cartasRestantes()">Rendirme</button>`;
}

function tiempoPartida() {
  // tiempoBase = document.getElementById("duracionPartida").value;
  tiempoRestante = document.getElementById("duracionPartida").value;
  document.getElementById("restante").innerHTML = tiempoRestante; //20
  document.getElementById("restante").innerHTML;

}

function opciones() {
  document.getElementById("estadisticas").innerHTML = "Estadisticas";
  document.getElementById("timer").innerHTML = "Tiempo restante: ";
  document.getElementById("aciertos").innerHTML = "Aciertos: ";
  document.getElementById("intentos").innerHTML = "Intento: ";
  if(duracionPartidaInicial == "libre"){
      document.getElementById("timer").setAttribute("hidden", true);
  }
}

let seleccionadas = [];
let intentos = 0;
let aciertos = 0;
//temporizador
let temporizador = false;
// let timer = 0;
let timerPartida = document.getElementById("timer");
let contarRegresivo = null;

let contarIntento = document.getElementById("intentos");
let contarAcierto = document.getElementById("aciertos");

function cartasRestantes() {
  let aciertosMaximos = cantidadCartas / 2;
  let estado = 'gano';
  let tiempo = 'asd';
  let tiempo_utilizado = 'asd';
  let dificultad = 'asd';

  Math.round(aciertosMaximos * (79 / 100));

  if (tiempoRestante != "libre") {
    tFinal = tiempoRestante - tiempoBase;
    tFinal = tFinal + " segundos";
  } else {
    tFinal = "modo libre";
  }

    axios.post("/play",{
        estado,
        dificultad,
        aciertos,
        tiempo,
        cantidad_cartas: cantidadCartas,
        tipo_cartas: tipoCartas,
        tiempo_utilizado,
        intentos,
    })
        .then(resp=>{
            console.log(resp);
        })
        .catch(err=>{
            console.log(err);
        })
}

function contarTiempo(timer) {
  contarRegresivo = setInterval(() => {
    timer--;
    tiempoBase = timer;
    let minutes = Math.floor(tiempoBase / 60);
    let seconds = tiempoBase - minutes * 60;
    timerPartida.innerHTML = `Tiempo restante: ${minutes}:${seconds}`;
    if (timer == 0) {
      clearInterval(contarRegresivo); // Cuando el valor llegar cero el contador se detiene
      cartasRestantes();
    }
  }, 1000);
}

function seleccionar(i) {
  if (
    temporizador == false &&
    document.getElementById("restante").innerHTML != "libre"
  ) {
    contarTiempo(document.getElementById("restante").innerHTML);
    temporizador = true;
  }

  let tarjeta = document.getElementById("tarjeta" + i);
  if (tarjeta.style.transform != "rotateY(180deg)") {
    tarjeta.style.transform = "rotateY(180deg)";
    seleccionadas.push(i);
  }
  if (seleccionadas.length == 2) {
    soltar(seleccionadas);
    seleccionadas = [];
  }
}

function soltar(seleccionadas) {
  movimientos++;
  contarIntento.innerHTML = `Intentos: ${movimientos}`;

  setTimeout(() => {
    let inferior1 = document.getElementById("inferior" + seleccionadas[0]);
    let inferior2 = document.getElementById("inferior" + seleccionadas[1]);
    if (inferior1.innerHTML != inferior2.innerHTML) {
      let tarjeta1 = document.getElementById("tarjeta" + seleccionadas[0]);
      let tarjeta2 = document.getElementById("tarjeta" + seleccionadas[1]);
      tarjeta1.style.transform = "rotateY(0deg)";
      tarjeta2.style.transform = "rotateY(0deg)";
    } else {
      inferior1.style.background = "plum";
      inferior2.style.background = "plum";
      aciertos++;
      contarAcierto.innerHTML = `Aciertos: ${aciertos}`;
    }

    if (aciertos == (cantidadCartas / 2) || movimientos == intentosMaximos ) {
      cartasRestantes();
    }


  }, 1000);
}
