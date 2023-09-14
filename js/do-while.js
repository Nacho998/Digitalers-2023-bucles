/*let estacion = prompt('Ingrese una estacion del año:').toLowerCase

while (estacion != 'verano' && estacion != 'invierno' && estacion != 'otoño' && estacion != 'primavera') {

    estacion = prompt('Ingrese una estacion del año:')

}*/

let edadCliente

do {

    edadCliente = parseInt(prompt('Reingrese la edad del cliente:'))

}while (isNaN(edadCliente) || edadCliente > 100 || edadCliente <= 0)


/*while (isNaN(edadCliente) || edadCliente > 100 || edadCliente <= 0) {

    edadCliente = parseInt(prompt('Reingrese la edad del cliente:'))

}*/

console.log(edadCliente)