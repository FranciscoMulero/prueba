'use strict';

// Aquí el alias se usa con "as".
import { empleados as emple } from "./empleados.js";


/**
 * Recorre el array y añade el empleado a la lista
 * @param {[{dni: number, nombre: string, apellido: string}]} emple ->Array de empleados.
 * @returns {undefined}
*/

// La función setup() es como el main() de Java.

setup();

function setup(){
    llenarDatalist(emple);
    configurarEmpleadoCambiado();

}


function llenarDatalist(emple){

    const nDtls = document.getElementById('eDtlsEmpleados');
    // for(let empleado of empleados){
    //     const nOption = document.createElement('option');
    //     nOption.setAttribute('value', `${empleado.nombre} ${empleado.apellido}`);
    //     nDtls.appendChild(nOption);
    // };
    emple.forEach(empleado => {
        const nOption = document.createElement('option');
        nOption.setAttribute('value', `${empleado.dni}`);
        nOption.setAttribute('label', `${empleado.nombre} ${empleado.apellido}`);
        nDtls.appendChild(nOption);
    });
};
function configurarEmpleadoCambiado(){
    const nText = document.getElementById('eInput');
    nText.addEventListener('change', llenarDetalleEmpleado);
}

function llenarDetalleEmpleado(e){
    const nText = e.target;
    const dniEmpleado = parseInt(nText.value);
    // const empleado = empleados.find(empleado => empleado.dni === dni);
    // document.getElementById('eInput1').value = empleado.nombre;
    // document.getElementById('eInput2').value = empleado.apellido;
    // document.getElementById('eInput3').value = empleado.edad;
    // document.getElementById('eInput4').value = empleado.categoria;
    // document.getElementById('eInput5').value = empleado.salarioBruto;

    // poner los dos puntos : es para poner un alias
    const {nombre, apellido, edad, categoria, salarioBruto: salario } = emple.find(({dni}) => dni === dniEmpleado);

    document.getElementById('eInput1').value = nombre;
    document.getElementById('eInput2').value = apellido;
    document.getElementById('eInput3').value = edad;
    document.getElementById('eInput4').value = categoria;
    document.getElementById('eInput5').value = salario;
    nText.value = `${nombre} ${apellido}`;
}
