function calcularNotaFinal(dato1, dato2, dato3) {
    let suma = dato1 + dato2 + dato3;
    let promedio = suma / 3;
    
    let calificacion = '';
    
    if (promedio = 9) {
        calificacion = 'A';
    } else if (promedio = 8) {
        calificacion = 'B';
    } else if (promedio = 7) {
        calificacion = 'C';
    } else if (promedio = 6) {
        calificacion = 'D';
    } else {
        calificacion = 'F';
    }
    
    return calificacion;
}

    let dato1, dato2, dato3;
    let elDato = false;

while (!elDato) {
    dato1 = Number(prompt("Ingrese la nota 1"));
    dato2 = Number(prompt("Ingrese la nota 2"));
    dato3 = Number(prompt("Ingrese la nota 3"));

    if (dato1 >= 0 && dato2 >= 0 && dato3 >= 0) {
    elDato = true;
    } else {
    alert("nténtelo nuevamente.");
    }
}

console.log('La calificación final es: ' + calcularNotaFinal(dato1, dato2, dato3));
