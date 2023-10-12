/* let savedPass = '1947';

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
} */

/* if (login()) {
    let montoCambio = prompt('Ingresa la cantidad de  dinero que desees cambiar');

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
} */

/* const ingresarMonto = parseInt(prompt("Ingresa la cantidad de UYU que desees convertir: "));

const cambiarADolares = () =>{
    let producto = 0;

    tipoDeCambios.forEach((cambioADolar) => {
        producto += ingresarMonto*(cambioADolar.valorUnitario)
    
    });
    return producto;
}
const cambiarAEuros = () =>{
    let producto = 0;

    tipoDeCambios.forEach((cambioAEuro) => {
        producto += ingresarMonto*(cambioAEuro.valorUnitario)
    
    });
    return producto;
}
const cambiarAReales = () =>{
    let producto = 0;

    tipoDeCambios.forEach((cambioAReal) => {
        producto += ingresarMonto*(cambioAReal.valorUnitario)
    
    });
    return producto;
}


let tipoDeCambios = [
    {id: '1.', moneda: 'USD', valorUnitario: '38', Funcion: cambiarADolares },
    {id: '2.', moneda: 'Euro', valorUnitario: '38', Funcion: cambiarAEuros },
    {id: '3.', moneda: 'Real', valorUnitario: '9', Funcion: cambiarAReales}
];


const opcionesDeCambio = () => {
    
    let mensaje = " ";
    
    tipoDeCambios.map((tipoDeCambio) => {
        mensaje += `\n ${tipoDeCambio.id} \n - Moneda: ${tipoDeCambio.moneda} \n - Valor: ${tipoDeCambio.valorUnitario} UYU \n-----------------------------\n`;
    });  
    
    const seleccionarOpcion = prompt(`Elije un Tipo de Cambio: \n ${mensaje} `);
    
    const seleccion = seleccionarOpcion.find( opcion => opcion.id === seleccionarOpcion);
    if (seleccion) {
        if (seleccion.funcion){
            const ingresarMonto = parseInt(prompt("Ingresa la cantidad de UYU que desees convertir: "));
            seleccion.Funcion();
            }

            } else {
                alert("Selecciona una opcion correcta. Gracias.")
                opcionesDeCambio()
            }
            
        };

        opcionesDeCambio();  */



/* 
        ---------------------------------------------------------------------------
        */

        const cambiarADolares = (monto) => {
            return monto / 38;
        }
        
        const cambiarAEuros = (monto) => {
            return monto / 38;
        }
        
        const cambiarAReales = (monto) => {
            return monto / 9;
        }
        
        let tipoDeCambios = [
            {id: '1', moneda: 'USD', valorUnitario: '38', Funcion: cambiarADolares },
            {id: '2', moneda: 'Euro', valorUnitario: '38', Funcion: cambiarAEuros },
            {id: '3', moneda: 'Real', valorUnitario: '9', Funcion: cambiarAReales}
        ];
        
        const opcionesDeCambio = () => {
            
            let mensaje = " ";
            
            tipoDeCambios.map((tipoDeCambio) => {
                mensaje += `\n ${tipoDeCambio.id} \n - Moneda: ${tipoDeCambio.moneda} \n - Valor: ${tipoDeCambio.valorUnitario} UYU \n-----------------------------\n`;
            });  
            
            const seleccionarOpcion = prompt(`Elije un Tipo de Cambio: \n ${mensaje} `);
            
            const seleccion = tipoDeCambios.find( opcion => opcion.id === seleccionarOpcion);
            if (seleccion) {
                if (seleccion.Funcion){
                    const ingresarMonto = parseInt(prompt("Ingresa la cantidad de UYU que desees convertir: "));
                    const resultado = seleccion.Funcion(ingresarMonto);
                    alert(`La cantidad convertida a ${seleccion.moneda} es ${resultado}`);
                } 
        
            } else {
                alert("Selecciona una opcion correcta. Gracias.")
                opcionesDeCambio()
            }
                    
        };
        
        opcionesDeCambio();
        