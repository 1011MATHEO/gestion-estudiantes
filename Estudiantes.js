const escuela = {
    estudiantes: []
};

function agregarEstudiante(nombre, calificaciones) {
    const estudiante = {
        nombre: nombre,
        calificaciones: calificaciones
    };
    escuela.estudiantes.push(estudiante);
}

function listarEstudiantes() {
    escuela.estudiantes.forEach(estudiante => {
        console.log(`Nombre: ${estudiante.nombre}, Calificaciones: ${estudiante.calificaciones.join(", ")}`);
    });
}
function promedioEstudiante(nombre) {
    const estudiante = escuela.estudiantes.find(est => est.nombre === nombre);
    if (estudiante) {
        const sum = estudiante.calificaciones.reduce((acc, curr) => acc + curr, 0);
        return sum / estudiante.calificaciones.length;
    } else {
        return null;
    }
}

agregarEstudiante("Juan", [4.5, 5.0, 3.8]);
agregarEstudiante("Maria", [4.2, 4.8, 3.9]);
agregarEstudiante("Carlos", [4.0, 4.5, 5.0]);

listarEstudiantes();
console.log(`Promedio de Juan: ${promedioEstudiante("Juan")}`);
console.log(`Promedio de Maria: ${promedioEstudiante("Maria")}`);
console.log(`Promedio de Carlos: ${promedioEstudiante("Carlos")}`);