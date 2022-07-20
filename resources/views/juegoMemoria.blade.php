<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js'])

    <link rel="stylesheet" href="css/index.css">
    <script src="{{ asset('js/index.js') }}" defer></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" />
</head>

<body>
    {{-- <div class="min-h-screen bg-gray-100"> --}}
    @include('layouts.navigation')

    <!-- Page Content -->
    <div class="asd">
      <div class="conteiner juego">
        <div id="tablero" class="conteiner" >
            <!-- Tarjeta -->
            <div id="juegoEst" class="conteiner">
                <label for="">Seleccione las cartas a utilizar</label>
                <select id="cantidadCartas">
                    <option value="8">8</option>
                    <option value="16">16</option>
                    <option value="24">24</option>
                </select>
                <br />

                <label for="">Cartas a utilizar</label>
                <select name="" id="tipoCartas">
                    <option value="ajedrez">Ajedrez</option>
                    <option value="animales">Animales</option>
                    <option value="programacion">Programacion</option>
                </select>
                <br />

                <label for="">Duracion de la partida</label>
                <select name="" id="duracionPartida">
                    <option value="libre">Libre</option>
                    <option value="6">5</option>
                    <option value="30">30</option>
                    <option value="50">50</option>
                </select>
                <br />
                <button onclick="generarTablero(), opciones()">empezar</button>
            </div>
            <!-- Tarjetas -->


        </div>

        <div id="opciones" class="conteiner">
            <h1 id="estadisticas"></h1>
            <h2 id="restante" hidden></h2>
            <h2 id="cantidad" hidden></h2>
            <h2 id="timer"></h2>
            <h2 id="aciertos"></h2>
            <h2 id="intentos"></h2>
            <h2></h2>
        </div>
    </div>

    </div>
    </div>
    
</body>

</html>
