
function Mascota (nombre, especie, edad) {
    
        this.nombre = nombre;
        this.especie = especie;
        this.edad = edad;
        this.mostrarDetalles = function () {
            console.log ("El nombre es: ", this.nombre );
            console.log ( "La especie es: ", this.especie);
            console.log ( "La edad es: ", this.edad, "Años" );
        }
    }


    const miMascota1 = new Mascota("Luna", "Perra", 3);
    const miMascota2 = new Mascota("Loki", "Perro", 2);

    console.log ("Datos de las mascotas");
    miMascota1.mostrarDetalles();
    miMascota2.mostrarDetalles();
    

