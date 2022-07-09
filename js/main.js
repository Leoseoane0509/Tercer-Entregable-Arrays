// VARIABLES GLOBALES
// Estas variables son las que voy a usar en cada switch por cada alumno para que, según la opción que eligan (1 a 4), se les guarde en lal variable carritoDeCompras el curso adquirido y el precio con el descuento ya aplicado
let carritoDeCompras;
let precioTotal;
let cursoComprado;
/************************************************************************************************************************/
// OBJETOS
// OBJETOS LITERALES
// Objeto 1
const curso1 = {
  nombre: "Curso de sintáxis inglesa",
  precio: 12000,
  nivel: "Intermedio",
  idioma: "Inglés",
};
// Mostrando los valores de las propiedades del curso 1 en consola
console.log("**********CURSO 1**********");
console.log(curso1);
console.log(curso1.nombre);
console.log(curso1.precio);
console.log(curso1.nivel);
console.log(curso1.idioma);

// Objeto 2
const curso2 = {
  nombre: "Curso de sintáxis española",
  precio: 10000,
  nivel: "Básico",
  idioma: "Español",
};
// Mostrando los valores de las propiedades del curso 2 en consola
console.log("**********CURSO 2**********");
console.log(curso2);
console.log(curso2.nombre);
console.log(curso2.precio);
console.log(curso2.nivel);
console.log(curso2.idioma);

// Objeto 3
const curso3 = {
  nombre: "Curso de fonética inglesa",
  precio: 15000,
  nivel: "Avanzado",
  idioma: "Inglés",
};
// Mostrando los valores de las propiedades del curso 3 en consola
console.log("**********CURSO 3**********");
console.log(curso3);
console.log(curso3.nombre);
console.log(curso3.precio);
console.log(curso3.nivel);
console.log(curso3.idioma);

// Objeto 4
const curso4 = {
  nombre: "Curso de gramática española",
  precio: 13000,
  nivel: "Básico",
  idioma: "Español",
};
// Mostrando los valores de las propiedades del curso 4 en consola
console.log("**********CURSO 4**********");
console.log(curso4);
console.log(curso4.nombre);
console.log(curso4.precio);
console.log(curso4.nivel);
console.log(curso4.idioma);
/************************************************************************************************************************/
// ARRAYS
// Array 1
const cursos = [
  "Curso de sintáxis inglesa",
  "Curso de sintáxis española",
  "Curso de fonética inglesa",
  "Curso de gramática española",
];
/************************************************************************************************************************/
// OBJETOS CREADOS MEDIANTE CLASE
class Estudiante {
  constructor(nombre, edad, pais, nota) {
    this.nombre = nombre.toUpperCase();
    this.edad = Number(edad);
    this.pais = pais;
    this.nota = parseFloat(nota);
    this.aprobado;
  }

  // Función creada para pasar saber si cada uno de los alumnos aprobó, y mostrar el resultado como un valor booleano (true or false)
  aproboONo() {
    if (this.nota >= 8) {
      this.aprobado = true;
    } else {
      this.aprobado = false;
    }
  }

  // Función creada para avisarle al alumno que cumplió los requisitos para obtener su 50% de descuento
  cuponDeDescuento() {
    if (this.nota >= 8) {
      alert(
        "¡Felicitaciones! Por haber obtenido 8 o más, te ganaste un cupón de un 50% para un curso de tu elección. \nPara continuar, por favor hacé clic en 'aceptar' o en la tecla de 'enter'"
      );
    }
  }
}
// Objeto 1 creado mediante constructor
const alumno1 = new Estudiante(
  prompt("Ingrese su nombre"),
  prompt("Ingrese su edad"),
  prompt("Ingrese su país de origen"),
  prompt("Ingrese la nota final del curso al que ha asistido")
);
// Llamado al método cupónDeDescuento para el objeto 1
alumno1.cuponDeDescuento();
// Condicional if con un bucle for dentro y un bucle do-while
if (alumno1.nota >= 8) {
  for (let i = 0; i < cursos.length; i++) {
    alert(`Los cursos diponibles son los siguientes: ${cursos[i]}`);
  }
  let cursoElegidoAlumno1 = Number(
    prompt(
      "Seleccione el curso al cual se le aplicará el 50%: \n\n1 - Curso de sintáxis inglesa \n2 - Curso de sintáxis española \n3 - Curso de fonética inglesa \n4 - Curso de gramática española"
    )
  );
  // Bucle do-while con condicional switch dentro
  do {
    switch (cursoElegidoAlumno1) {
      case 1:
        alert(
          `El precio anterior era de: ${
            curso1.precio
          }, pero ahora te queda en ${curso1.precio / 2}`
        );
        cursoComprado = "Curso de sintáxis inglesa";
        precioTotal = curso1.precio / 2;
        console.log(`*********COMPRA ${alumno1.nombre}**********`);
        carritoDeCompras = console.log(
          `Compra realizada. Tu carrito de compras quedó así: \nCurso comprado: ${cursoComprado} \nPrecio total de la compra: ${precioTotal}`
        );
        break;
      case 2:
        alert(
          `El precio anterior era de: ${
            curso2.precio
          }, pero ahora te queda en ${curso2.precio / 2}`
        );
        cursoComprado = "Curso de sintáxis española";
        precioTotal = curso2.precio / 2;
        console.log(`*********COMPRA ${alumno1.nombre}**********`);
        carritoDeCompras = console.log(
          `Compra realizada. Tu carrito de compras quedó así: \nCurso comprado: ${cursoComprado} \nPrecio total de la compra: ${precioTotal}`
        );
        break;
      case 3:
        alert(
          `El precio anterior era de: ${
            curso3.precio
          }, pero ahora te queda en ${curso3.precio / 2}`
        );
        cursoComprado = "Curso de fonética inglesa";
        precioTotal = curso3.precio / 2;
        console.log(`*********COMPRA ${alumno1.nombre}**********`);
        carritoDeCompras = console.log(
          `Compra realizada. Tu carrito de compras quedó así: \nCurso comprado: ${cursoComprado} \nPrecio total de la compra: ${precioTotal}`
        );
        break;
      case 4:
        alert(
          `El precio anterior era de: ${
            curso4.precio
          }, pero ahora te queda en ${curso4.precio / 2}`
        );
        cursoComprado = "Curso de gramática española";
        precioTotal = curso4.precio / 2;
        console.log(`*********COMPRA ${alumno1.nombre}**********`);
        carritoDeCompras = console.log(
          `Compra realizada. Tu carrito de compras quedó así: \nCurso comprado: ${cursoComprado} \nPrecio total de la compra: ${precioTotal}`
        );
        break;
      default:
        alert("Opción incorrecta");
        break;
    }
  } while (
    cursoElegidoAlumno1 != 1 &&
    cursoElegidoAlumno1 != 2 &&
    cursoElegidoAlumno1 != 3 &&
    cursoElegidoAlumno1 != 4
  );
  // Objeto 2 creado mediante constructor
  const alumno2 = new Estudiante(
    prompt("Ingrese su nombre"),
    prompt("Ingrese su edad"),
    prompt("Ingrese su país de origen"),
    prompt("Ingrese la nota final del curso al que ha asistido")
  );
  // Llamado al método cupónDeDescuento para el objeto 2
  alumno2.cuponDeDescuento();
  // Condicional if
  if (alumno2.nota >= 8) {
    for (let i = 0; i < cursos.length; i++) {
      alert(`Los cursos diponibles son los siguientes: ${cursos[i]}`);
    }
    let cursoElegidoAlumno2 = Number(
      prompt(
        "Seleccione el curso al cual se le aplicará el 50%: \n\n1 - Curso de sintáxis inglesa \n2 - Curso de sintáxis española \n3 - Curso de fonética inglesa \n4 - Curso de gramática española"
      )
    );
    // Bucle do-while con condicional switch dentro
    do {
      switch (cursoElegidoAlumno2) {
        case 1:
          alert(
            `El precio anterior era de: ${
              curso1.precio
            }, pero ahora te queda en ${curso1.precio / 2}`
          );
          cursoComprado = "Curso de sintáxis inglesa";
          precioTotal = curso1.precio / 2;
          console.log(`*********COMPRA ${alumno2.nombre}**********`);
          carritoDeCompras = console.log(
            `Compra realizada. Tu carrito de compras quedó así: \nCurso comprado: ${cursoComprado} \nPrecio total de la compra: ${precioTotal}`
          );
          break;
        case 2:
          alert(
            `El precio anterior era de: ${
              curso2.precio
            }, pero ahora te queda en ${curso2.precio / 2}`
          );
          cursoComprado = "Curso de sintáxis española";
          precioTotal = curso2.precio / 2;
          console.log(`*********COMPRA ${alumno2.nombre}**********`);
          carritoDeCompras = console.log(
            `Compra realizada. Tu carrito de compras quedó así: \nCurso comprado: ${cursoComprado} \nPrecio total de la compra: ${precioTotal}`
          );
          break;
        case 3:
          alert(
            `El precio anterior era de: ${
              curso3.precio
            }, pero ahora te queda en ${curso3.precio / 2}`
          );
          cursoComprado = "Curso de fonética inglesa";
          precioTotal = curso3.precio / 2;
          console.log(`*********COMPRA ${alumno2.nombre}**********`);
          carritoDeCompras = console.log(
            `Compra realizada. Tu carrito de compras quedó así: \nCurso comprado: ${cursoComprado} \nPrecio total de la compra: ${precioTotal}`
          );
          break;
        case 4:
          alert(
            `El precio anterior era de: ${
              curso4.precio
            }, pero ahora te queda en ${curso4.precio / 2}`
          );
          cursoComprado = "Curso de gramática española";
          precioTotal = curso4.precio / 2;
          console.log(`*********COMPRA ${alumno2.nombre}**********`);
          carritoDeCompras = console.log(
            `Compra realizada. Tu carrito de compras quedó así: \nCurso comprado: ${cursoComprado} \nPrecio total de la compra: ${precioTotal}`
          );
          break;
        default:
          alert("Opción incorrecta");
          break;
      }
    } while (
      cursoElegidoAlumno2 != 1 &&
      cursoElegidoAlumno2 != 2 &&
      cursoElegidoAlumno2 != 3 &&
      cursoElegidoAlumno2 != 4
    );
  }

  // Objeto 3 creado mediante constructor
  const alumno3 = new Estudiante(
    prompt("Ingrese su nombre"),
    prompt("Ingrese su edad"),
    prompt("Ingrese su país de origen"),
    prompt("Ingrese la nota final del curso al que ha asistido")
  );
  // Llamado al método cupónDeDescuento para el objeto 3
  alumno3.cuponDeDescuento();
  // Condicional if
  if (alumno3.nota >= 8) {
    for (let i = 0; i < cursos.length; i++) {
      alert(`Los cursos diponibles son los siguientes: ${cursos[i]}`);
    }
    let cursoElegidoAlumno3 = Number(
      prompt(
        "Seleccione el curso al cual se le aplicará el 50%: \n\n1 - Curso de sintáxis inglesa \n2 - Curso de sintáxis española \n3 - Curso de fonética inglesa \n4 - Curso de gramática española"
      )
    );
    // Bucle do-while con condicional switch dentro
    do {
      switch (cursoElegidoAlumno3) {
        case 1:
          alert(
            `El precio anterior era de: ${
              curso1.precio
            }, pero ahora te queda en ${curso1.precio / 2}`
          );
          cursoComprado = "Curso de sintáxis inglesa";
          precioTotal = curso1.precio / 2;
          console.log(`*********COMPRA ${alumno3.nombre}**********`);
          carritoDeCompras = console.log(
            `Compra realizada. Tu carrito de compras quedó así: \nCurso comprado: ${cursoComprado} \nPrecio total de la compra: ${precioTotal}`
          );
          break;
        case 2:
          alert(
            `El precio anterior era de: ${
              curso2.precio
            }, pero ahora te queda en ${curso2.precio / 2}`
          );
          cursoComprado = "Curso de sintáxis española";
          precioTotal = curso2.precio / 2;
          console.log(`*********COMPRA ${alumno3.nombre}**********`);
          carritoDeCompras = console.log(
            `Compra realizada. Tu carrito de compras quedó así: \nCurso comprado: ${cursoComprado} \nPrecio total de la compra: ${precioTotal}`
          );
          break;
        case 3:
          alert(
            `El precio anterior era de: ${
              curso3.precio
            }, pero ahora te queda en ${curso3.precio / 2}`
          );
          cursoComprado = "Curso de fonética inglesa";
          precioTotal = curso3.precio / 2;
          console.log(`*********COMPRA ${alumno3.nombre}**********`);
          carritoDeCompras = console.log(
            `Compra realizada. Tu carrito de compras quedó así: \nCurso comprado: ${cursoComprado} \nPrecio total de la compra: ${precioTotal}`
          );
          break;
        case 4:
          alert(
            `El precio anterior era de: ${
              curso4.precio
            }, pero ahora te queda en ${curso4.precio / 2}`
          );
          cursoComprado = "Curso de gramática española";
          precioTotal = curso4.precio / 2;
          console.log(`*********COMPRA ${alumno3.nombre}**********`);
          carritoDeCompras = console.log(
            `Compra realizada. Tu carrito de compras quedó así: \nCurso comprado: ${cursoComprado} \nPrecio total de la compra: ${precioTotal}`
          );
          break;
        default:
          alert("Opción incorrecta");
          break;
      }
    } while (
      cursoElegidoAlumno3 != 1 &&
      cursoElegidoAlumno3 != 2 &&
      cursoElegidoAlumno3 != 3 &&
      cursoElegidoAlumno3 != 4
    );
  }

  // Objeto 4
  const alumno4 = new Estudiante(
    prompt("Ingrese su nombre"),
    prompt("Ingrese su edad"),
    prompt("Ingrese su país de origen"),
    prompt("Ingrese la nota final del curso al que ha asistido")
  );
  // Llamado al método cupónDeDescuento para el objeto 4
  alumno4.cuponDeDescuento();
  // Condicional if
  if (alumno4.nota >= 8) {
    for (let i = 0; i < cursos.length; i++) {
      alert(`Los cursos diponibles son los siguientes: ${cursos[i]}`);
    }
    let cursoElegidoAlumno4 = Number(
      prompt(
        "Seleccione el curso al cual se le aplicará el 50%: \n\n1 - Curso de sintáxis inglesa \n2 - Curso de sintáxis española \n3 - Curso de fonética inglesa \n4 - Curso de gramática española"
      )
    );
    // Bucle do-while con condicional switch dentro
    do {
      switch (cursoElegidoAlumno4) {
        case 1:
          alert(
            `El precio anterior era de: ${
              curso1.precio
            }, pero ahora te queda en ${curso1.precio / 2}`
          );
          cursoComprado = "Curso de sintáxis inglesa";
          precioTotal = curso1.precio / 2;
          console.log(`*********COMPRA ${alumno4.nombre}**********`);
          carritoDeCompras = console.log(
            `Compra realizada. Tu carrito de compras quedó así: \nCurso comprado: ${cursoComprado} \nPrecio total de la compra: ${precioTotal}`
          );
          break;
        case 2:
          alert(
            `El precio anterior era de: ${
              curso2.precio
            }, pero ahora te queda en ${curso2.precio / 2}`
          );
          cursoComprado = "Curso de sintáxis española";
          precioTotal = curso2.precio / 2;
          console.log(`*********COMPRA ${alumno4.nombre}**********`);
          carritoDeCompras = console.log(
            `Compra realizada. Tu carrito de compras quedó así: \nCurso comprado: ${cursoComprado} \nPrecio total de la compra: ${precioTotal}`
          );
          break;
        case 3:
          alert(
            `El precio anterior era de: ${
              curso3.precio
            }, pero ahora te queda en ${curso3.precio / 2}`
          );
          cursoComprado = "Curso de fonética inglesa";
          precioTotal = curso3.precio / 2;
          console.log(`*********COMPRA ${alumno4.nombre}**********`);
          carritoDeCompras = console.log(
            `Compra realizada. Tu carrito de compras quedó así: \nCurso comprado: ${cursoComprado} \nPrecio total de la compra: ${precioTotal}`
          );
          break;
        case 4:
          alert(
            `El precio anterior era de: ${
              curso4.precio
            }, pero ahora te queda en ${curso4.precio / 2}`
          );
          cursoComprado = "Curso de gramática española";
          precioTotal = curso4.precio / 2;
          console.log(`*********COMPRA ${alumno4.nombre}**********`);
          carritoDeCompras = console.log(
            `Compra realizada. Tu carrito de compras quedó así: \nCurso comprado: ${cursoComprado} \nPrecio total de la compra: ${precioTotal}`
          );
          break;
        default:
          alert("Opción incorrecta");
          break;
      }
    } while (
      cursoElegidoAlumno4 != 1 &&
      cursoElegidoAlumno4 != 2 &&
      cursoElegidoAlumno4 != 3 &&
      cursoElegidoAlumno4 != 4
    );
  }
  /************************************************************************************************************************/
  // OBJETO CREADO A PARTIR DE LOS RESULTADOS DE LOS PROMPT
  const valoresAlumnos =
    /************************************************************************************************************************/
    // ARRAYS
    // Array 2
    console.log("***********LLAMADO AL ARRAY 2**********");
  const alumnosYSusNotas = [
    {
      nombre: alumno1.nombre,
      nota: alumno1.nota,
    },
    {
      nombre: alumno2.nombre,
      nota: alumno2.nota,
    },
    {
      nombre: alumno3.nombre,
      nota: alumno3.nota,
    },
    {
      nombre: alumno4.nombre,
      nota: alumno4.nota,
    },
  ];
  console.log(alumnosYSusNotas);
  /************************************************************************************************************************/
  // FUNCIÓN CONECTADA AL ARRAY 2
  function mostrarAlumnosYSusNotas() {
    alert(
      "Los alumnos inscriptos y sus correspondientes notas se muestran a continuación:"
    );
    for (const integrante of alumnosYSusNotas) {
      alert(integrante.nombre.toLowerCase());
      alert(integrante.nota);
    }
  }
  mostrarAlumnosYSusNotas();
  /************************************************************************************************************************/
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
  console.log(alumno2.nota);
  // Mostrando los valores de las propiedades del alumno 3
  console.log("**********ALUMNO 3**********");
  console.log(alumno3);
  console.log(alumno3.nombre);
  console.log(alumno3.edad);
  console.log(alumno3.pais);
  console.log(alumno3.nota);
  // Mostrando los valores de las propiedades del alumno 4
  console.log("**********ALUMNO 4**********");
  console.log(alumno4);
  console.log(alumno4.nombre);
  console.log(alumno4.edad);
  console.log(alumno4.pais);
  console.log(alumno4.nota);
  // Llamando al método "aproboOno"
  // Alumno 1
  console.log(`**********¿APROBÓ ${alumno1.nombre}?**********`);
  alumno1.aproboONo();
  console.log(alumno1.aprobado);
  // Alumno 2
  console.log(`**********¿APROBÓ ${alumno2.nombre}?**********`);
  alumno2.aproboONo();
  console.log(alumno2.aprobado);
  // Alumno 3
  console.log(`**********¿APROBÓ ${alumno3.nombre}?**********`);
  alumno3.aproboONo();
  console.log(alumno3.aprobado);
  // Alumno 4
  console.log(`**********¿APROBÓ ${alumno4.nombre}?**********`);
  alumno4.aproboONo();
  console.log(alumno4.aprobado);
  /************************************************************************************************************************/
}
