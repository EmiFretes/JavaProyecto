function Mascota(nombre, especie, edad) {
    this.nombre = nombre;
    this.especie = especie;
    this.edad = edad;
    this.mostrarDetalles = function() {
        console.log("El nombre es: ", this.nombre);
        console.log("La especie es: ", this.especie);
        console.log("La edad es: ", this.edad, "Años");
    };
}


function obtenerInformacionMascota() {
    const nombre = prompt("Ingrese el nombre de la mascota:");
    const especie = prompt("Ingrese la especie de la mascota:");
    const edad = parseInt(prompt("Ingrese la edad de la mascota:"));

    return new Mascota(nombre, especie, edad);
}

console.log("Datos de las mascotas");



const lasMascotas = [];

const miMascota1 = obtenerInformacionMascota();
lasMascotas.push(miMascota1);

const miMascota2 = obtenerInformacionMascota();
lasMascotas.push(miMascota2);



