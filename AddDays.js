//sumar dias a una fecha dada

function addDays(startDate, numberOfDays) {
    console.log("esto recibe como parametro addDays", startDate);
    var fechaIniciop = new Date(startDate.split('-')[0], startDate.split('-')[1], startDate.split('-')[2]);
    console.log("parametro convertido a Date en addDays",fechaIniciop);
    var returnDate = new Date(
                            fechaIniciop.getFullYear(),
                            fechaIniciop.getMonth() - 1,
                            fechaIniciop.getDate() + numberOfDays);

    console.log("esto devuelve addDays", returnDate.toISOString().split("T")[0]);
    return returnDate.toISOString().split("T")[0];