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
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@10.16.6/dist/sweetalert2.all.min.js"></script>
    <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/sweetalert2@10.10.1/dist/sweetalert2.min.css'>
</head>
<body>
    
    @include('layouts.navEstadisticas')

    <h1>Jugadores con mayores aciertos</h1>
    <div class="flex flex-col">
        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-4 inline-block min-w-full sm:px-6 lg:px-8">
            <div class="overflow-hidden">
              <table class="min-w-full text-center">
                <thead class="border-b bg-gray-800">
                  <tr>
                    {{-- <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                      #
                    </th> --}}
                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                      Nombre
                    </th>
                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                      Resultado
                    </th>
                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                      Cantidad de cartas
                    </th>
                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                      Aciertos
                    </th>
                    <th scope="col" class="text-sm font-medium text-white px-6 py-4">
                      Intentos
                    </th>
                  </tr>
                </thead class="border-b">
                <tbody>
                  @foreach ($plays as $item)
                  <tr class="bg-white border-b">
                    {{-- <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">1</td> --}}
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {{ $item->user->name }}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {{ $item->estado }}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {{ $item->cantidad_cartas }}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {{ $item->aciertos }}
                    </td>
                    <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                      {{ $item->intentos }}
                    </td>
                  </tr class="bg-white border-b">
                  
                  @endforeach
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

    {{-- <div class="block mt-1 w-full"> --}}
        {{-- <table>
            <thead>
                <tr>
                    <td>Nombre</td>
                    <td>Estado</td>
                    <td>Dificultad</td>
                    <td>Aciertos</td>
                </tr>
            </thead>
            <tbody>
                
                    <tr>
                        <td>{{ $item }}</td>
                        <td>{{ $item->estado }}</td>
                        <td>{{ $item->dificultad }}</td>
                        <td></td>
                    </tr>
                
            </tbody>
        </table> --}}
    {{-- </div> --}}
    
</body>
</html>