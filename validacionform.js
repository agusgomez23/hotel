/*Archivo de validaciones del formulario*/

function valida ( form_alta ) {
    if (form_alta.fecha_egreso.value >= form_alta.fecha_ingreso.value) {
        var decision = confirm('¿Desea cargar la reserva?')
        if (decision) {
            return true
        } 
        else {
            return false
        }
    }
    else {
        alert('La fecha de egreso no puede ser menor a la fecha de ingreso.')
        document.getElementById('fecha_egreso').focus()
        return false
    }
}

/*Validar solo letras*/
function txtsololetras() {
    if ((event.keyCode != 32) && (event.keyCode < 65) || (event.keyCode > 90) && (event.keyCode < 97) || (event.keyCode > 122))
     event.returnValue = false;

   }
/*Validar solo numeros*/
function solonumeros() {
    if ((event.keyCode < 48) || (event.keyCode > 57)) 
     event.returnValue = false;
   }
