$(document).ready(function () {

    var $listaLugares = [
        {
            nombre: "Doña Garnacha",
            direccion: "Aldama 37, Los Reyes Acaquilpan Centro, La Paz, Los Reyes, 56400 Los Reyes Acaquilpan (La Paz), MEX",
            ubicacion: {
                lat: 19.3414384,
                lng: 99.0052152
            }
    },
        {
            nombre: "La Rellenita de Chicharron",
            direccion: "Av. de las Torres, Ixtlahuacan, 09690 Ciudad de México, CDMX",
            ubicacion: {
                lat: 19.3414384,
                lng: -99.0052152
            }
    },
        {
            nombre: "Taquitos Esperanzadores",
            direccion: "Joselito Huerta 5911, San Miguel Teotongo, 09630 Ciudad de México, CDMX",
            ubicacion: {
                lat: 19.3414384,
                lng: -99.0052152
            }
    },
        {
            nombre: "El mal del Cochinito",
            direccion: "Las Torres MZ116D LT4, Santiago Acahualtepec, Ciudad de México, CDMX",
            ubicacion: {
                lat: 19.346014,
                lng: -99.0037132
            }
    }
    ];

    
    $('#a').append('<table>').addClass(".table .table-striped");

    for (i = 0; i < 3; i++) {
        $('#tabla').append('<tr>' + $listaLugares.data + '</tr>');
        
        for (j = 0; j < 3; j++){
            $('#tabla').append('<td>' + $listaLugares[j][j] + '</td>');    
        }
    }

    $('#tabla').append('</table>');

});
