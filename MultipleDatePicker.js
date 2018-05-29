function (d) {
                  
                    var fechaInicio =new Date(d[0].split('/')[2]+'/'+d[0].split('/')[1]+'/'+d[0].split('/')[0]);
                    var fechaFin =new Date(d[1].split('/')[2]+'/'+d[1].split('/')[1]+'/'+d[1].split('/')[0]);
                    //var fechaInicio = d[0];
                    //var fechaFin = d[1];
                    var dates = [];
                    //SE VA CARGANDO EL ARREGLO CON TODOS LOS DIAS DEL RANGO
                    //console.log(fechaInicio)
                    //console.log(fechaFin)
                    while (fechaInicio <= fechaFin) {
                        dates.push(fechaInicio.toString());
                        fechaInicio.setDate(fechaInicio.getDate() + 1);
                    }
                   

                    //inicializar calendario
                    $('#datepicker').multiDatesPicker({
                        dateFormat: 'dd/mm/yyyy',
                        beforeShowDay: highlightDays,
                        minDate: new Date(2018, 1, 1),
                        maxDate: "+3m",
                        showOtherMonths: true,
                        numberOfMonths: 5,
                        stepMonths: 3,
                        hideIfNoPrevNext: true,
                        onSelect: marcarDias
                       
                    });
                    /////////////////////////////////////
                    function highlightDays(date) {
                    
                        for (var i = 0; i < dates.length; i++) {

                            //CON date.getDay()== 0,1,2,3,4,5,6 se consulta q dia de la semana es
                            //0 equivale a domingo, 1 a lunes y así
                            if (date.getDay() == d[2] || date.getDay() == d[3] || date.getDay() == d[4] || date.getDay() == d[5] || date.getDay() == d[6] || date.getDay() == d[7] || date.getDay() == d[8]) {

                                //si pasa los días de la semana se consulta si esta dentro del arreglo y se marca
                                if (new Date(dates[i]).toString() == date.toString()) {
                                  
                                    return [true,'highlight'];
                                 
                                }
                            };

                        }
                      
                        return [false, ''];
                    }
                    $("td.highlight").prop('title', 'Día de recepción');
                  
                    
                } ;


function marcarDias() { //=onSelect
   
   
    //var currentDate = ($("#datepicker").datepicker("getDate")).toLocaleDateString();
    var currentDate = $("#datepicker").datepicker("getDate");
   
   //console.log("localedatestring",currentDate);
    //marcar, dejar marcado y guardar en arreglo	

    
    if (diasSeleccionadosToLocaleDateString.indexOf(currentDate.toLocaleDateString()) == -1) {
       
        diasSeleccionados.push(currentDate);
        
        diasSeleccionados.sort((a, b) => a - b);
        diasSeleccionadosToLocaleDateString = [];
        $.each(diasSeleccionados, function (index, value) {
            diasSeleccionadosToLocaleDateString.push(value.toLocaleDateString());
        });

       

    } else {
        var indiceEliminar = diasSeleccionadosToLocaleDateString.indexOf(currentDate.toLocaleDateString()); //obtiene el indice del elto a eliminar
        diasSeleccionados.splice(indiceEliminar, 1); //elimina el elto por índice
        diasSeleccionadosToLocaleDateString.splice(indiceEliminar, 1); //elimina el elto por índice
       
    }
    //console.log("indice a eliminar",diasSeleccionadosToLocaleDateString.indexOf(currentDate.toLocaleDateString()))
    //console.log("array",diasSeleccionados);
    //console.log("longitud dias seleccionados  (DATE)",diasSeleccionados.length);
    //console.log(diasSeleccionadosToLocaleDateString);
    //console.log("longitud dias seleccionados (string)",diasSeleccionadosToLocaleDateString.length);

}