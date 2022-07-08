// CREANDO UN OBJETO MEDIANTE EL USO DE CLASE
class Estudiante {
  constructor(nombre, edad, pais, nivel, nota) {
    this.nombre = nombre.toUpperCase();
    this.edad = edad;
    this.pais = pais;
    this.nivel = nivel;
    this.nota = parseFloat(nota);
    this.aprobado;
  }

  aproboONo() {
    if (this.nota >= 6) {
      this.aprobado = true;
    } else {
      this.aprobado = false;
    }
  }
}
const alumno1 = new Estudiante("Pedro", 25, "Argentina", "Básico", "8.5");
const alumno2 = new Estudiante("Martina", 30, "Colombia", "Intermedio", "5.75");

// Mostrando los valores de las propiedades del alumno 1
console.log("**********ALUMNO 1**********");
console.log(alumno1);
console.log(alumno1.nombre);
console.log(alumno1.edad);
console.log(alumno1.pais);
console.log(alumno1.nivel);
console.log(alumno1.nota);
// Mostrando los valores de las propiedades del alumno 2
console.log("**********ALUMNO 2**********");
console.log(alumno2);
console.log(alumno2.nombre);
console.log(alumno2.edad);
console.log(alumno2.pais);
console.log(alumno2.nivel);
console.log(alumno2.nota);
// Llamando al método "aproboOno"
// Alumno 1
console.log("**********¿APROBÓ ALUMNO 1?**********");
alumno1.aproboONo();
console.log(alumno1.aprobado);
// Alumno 2
console.log("**********¿APROBÓ ALUMNO 2?**********");
alumno2.aproboONo();
console.log(alumno2.aprobado);
