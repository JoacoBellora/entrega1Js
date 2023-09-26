let savedPass = '1947';

function login() {
    let ingresar = false;
    let intentos = 5;
    for (let i = intentos; i > 0; i--) {
        let userPass = prompt('Ingresa tu Password. (Tienes     ' + i + ' intentos)');
        
            if (userPass === savedPass){
                alert( 'Inicio de sesion exitoso. Bienvenido/a');
                ingresar = true;
                break;
            } else {
                alert('Password incorrecta. Te quedan ' + (i - 1) + ' intentos.');
            }
        }
        
        return ingresar;
}

if (login()) {
    let montoCambio = 1000;

    let opcion = prompt('Elige la moneda a la que convertir tus' + montoCambio + 'pesos uruguayos: \n1 - USD. \n2 - Real. \n3 - Euro. \n4 - Finalizar Operacion');
    
    while(opcion){
        if(opcion == '1' || opcion == '2' || opcion == '3'){
        switch(opcion){
        case '1':
            alert('Tu saldo es de' + (montoCambio/38) + 'USD');
            break;
        case '2':
            alert('Tu saldo es de' + (montoCambio/9) + 'Reales');
            break;
        case '3':
            alert('Tu saldo es de' + (montoCambio/40) + 'Euros');
            break;
        case '4':
            alert('Operacion Finalizada')
            break;
        default:
            alert('Opcion Invalida');
            break;
            }
        }
        if(opcion == '4'){
        break;
    }
        opcion = prompt('Elige la moneda a la que convertir tus' + montoCambio + 'pesos uruguayos: \n1 - USD. \n2 - Real. \n3 - Euro. \n4 - Finalizar Operacion ');
    }
} else{
    alert('Se bloqueara su cuenta por seguridad');
}
