$(document).ready(function() {
    $('#btnCargarClima').click(function() {
        var ubicacion = $('#ubicacion').val().trim();
        
        if(ubicacion === '') {
            alert('Por favor, ingrese un país, ciudad o pueblo válido.');
            return;
        }

        $.ajax({
            url: 'https://api.openweathermap.org/data/2.5/weather',
            type: 'GET',
            data: {
                q: ubicacion,
                appid: '5d8da793648aced00d0732f47fa04299', // Asegúrate de usar tu clave API válida aquí
                units: 'metric',
                lang: 'es'
            },
            success: function(res) {
                var contenido = '<h2>Clima en ' + res.name + ':</h2>';
                contenido += '<p>Temperatura: ' + res.main.temp + ' °C</p>';
                contenido += '<p>Sensación térmica: ' + res.main.feels_like + ' °C</p>';
                contenido += '<p>Humedad: ' + res.main.humidity + '%</p>';
                contenido += '<p>Presión atmosférica: ' + res.main.pressure + ' hPa</p>';
                $('#resultadoClima').html(contenido);
            },
            error: function() {
                $('#resultadoClima').html('<p class="error">Error al cargar el clima. Asegúrese de que la ubicación sea correcta y de que tenga una clave API válida.</p>');
            }
        });
    });
      $(document).ready(function() {
            $('#btnCargarClima').click(function() {
                var ubicacion = $('#ubicacion').val().trim();
                
                if(ubicacion === '') {
                    $('#resultadoClima').html('<p class="error">Por favor, ingrese una ubicación válida.</p>');
                    return;
                }
        
                $.ajax({
                    url: 'https://api.openweathermap.org/data/2.5/weather',
                    type: 'GET',
                    data: {
                        q: ubicacion,
                        appid: 'd159c8ab7fa86b3acff9c47073db183a', // Reemplaza 'TU_API_KEY' con tu clave API real de OpenWeatherMap
                        units: 'metric',
                        lang: 'es'
                    },
                    success: function(res) {
                        var contenido = '<h2>Clima en ' + res.name + ':</h2>';
                        contenido += '<p>Temperatura: ' + res.main.temp + ' °C</p>';
                        contenido += '<p>Sensación térmica: ' + res.main.feels_like + ' °C</p>';
                        contenido += '<p>Humedad: ' + res.main.humidity + '%</p>';
                        contenido += '<p>Presión atmosférica: ' + res.main.pressure + ' hPa</p>';
                        $('#resultadoClima').html(contenido);
                    },
                    error: function() {
                        $('#resultadoClima').html('<p class="error">Error al cargar el clima. Asegúrese de que la ubicación sea correcta y de que tenga una clave API válida.</p>');
                    }
                });
            });
        });
});
