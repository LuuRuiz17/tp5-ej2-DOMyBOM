let person = null;

const formulario = document.getElementById("formPersona");
const btnMostrarGeneracion = document.querySelector(".btn-success");
const btnMayorDeEdad = document.querySelector(".btn-warning");
const btnMostrarInformacion = document.querySelector(".btn-secondary");
const contenedorRespuestaBotones = document.getElementById("contenedorRespuestaBotones");

formulario.addEventListener("submit", createPerson);

btnMostrarGeneracion.addEventListener("click", () => {
  if (person) {
    contenedorRespuestaBotones.innerHTML = "";
    const tituloGeneracion = document.createElement("h3");
    tituloGeneracion.classList.add("text-primary-emphasis");
    tituloGeneracion.textContent = "Generación:";
    const generacion = document.createElement("p");
    generacion.classList.add("mt-3");
    generacion.textContent = person.showGeneration();
    contenedorRespuestaBotones.appendChild(tituloGeneracion);
    contenedorRespuestaBotones.appendChild(generacion);
  } else {
    alert("No se creó a la persona.");
  }
});

btnMayorDeEdad.addEventListener("click", () => {
  if (person) {
    contenedorRespuestaBotones.innerHTML = ""; 
    const tituloEdad = document.createElement("h3");
    tituloEdad.classList.add("text-primary-emphasis");
    tituloEdad.textContent = "Edad:";
    const edad = document.createElement("p");
    edad.classList.add("mt-3");
    edad.textContent = person.esMayorDeEdad();
    contenedorRespuestaBotones.appendChild(tituloEdad);
    contenedorRespuestaBotones.appendChild(edad);
  } else {
    alert("No se creó a la persona.");
  }
});

btnMostrarInformacion.addEventListener("click", () => {
  if (person) {
    contenedorRespuestaBotones.innerHTML = "";
    const informacion = document.createElement("div");
    informacion.classList.add("mt-3");
    informacion.appendChild(person.showPerson());
    contenedorRespuestaBotones.appendChild(informacion);
  } else {
    alert("No se creó a la persona.");
  }
});

function createPerson(e) {
  e.preventDefault();
  contenedorRespuestaBotones.innerHTML = "";

  const name = document.getElementById("inputNombre").value.trim();
  const surname = document.getElementById("inputApellido").value.trim();
  const dni = document.getElementById("inputDNI").value.trim();
  const age = parseInt(document.getElementById("inputEdad").value.trim());
  const gender = document.getElementById("inputSexo").value;
  const weight = parseFloat(document.getElementById("inputPeso").value.trim());
  const height = parseFloat(document.getElementById("inputAltura").value.trim());
  const year = parseInt(document.getElementById("inputAnioNacimiento").value.trim());

  if (!name || !surname || !dni || !age || !gender || !weight || !height || !year) {
    alert("Por favor complete todos los campos correctamente.");
    return;
  }

  person = new Person(name, surname, dni, age, gender, weight, height, year);

  formulario.reset();

  console.log(person);
}

class Person {
  #name;
  #surname;
  #dni;
  #age;
  #gender;
  #weight;
  #height;
  #year;

  constructor(name, surname, dni, age, gender, weight, height, year) {
    this.#name = name;
    this.#surname = surname;
    this.#dni = dni;
    this.#age = age;
    this.#gender = gender;
    this.#weight = weight;
    this.#height = height;
    this.#year = year;
  }

  get name() {
    return this.#name;
  }
  set name(newName) {
    this.#name = newName;
  }

  get surname() {
    return this.#surname;
  }
  set surname(newSurname) {
    this.#surname = newSurname;
  }

  get dni() {
    return this.#dni;
  }
  set dni(newDni) {
    this.#dni = newDni;
  }

  get age() {
    return this.#age;
  }
  set age(newAge) {
    this.#age = newAge;
  }

  get gender() {
    if (this.#gender === "H") {
      return "Hombre";
    } else if (this.#gender === "M") {
      return "Mujer";
    } else {
      return "No especificado";
    }
  }
  set gender(newGender) {
    this.#gender = newGender;
  }

  get weight() {
    return this.#weight;
  }
  set weight(newWeight) {
    this.#weight = newWeight;
  }

  get height() {
    return this.#height;
  }
  set height(newHeight) {
    this.#height = newHeight;
  }

  get year() {
    return this.#year;
}

set year(newYear) {
this.#year = newYear;
}

showGeneration() {
if (this.#year >= 1994 && this.#year <= 2010) {
return "Generación Z: Irreverencia y tecnológicas.";
} else if (this.#year >= 1981 && this.#year <= 1993) {
return "Generación Y (Millennials): Frustración.";
} else if (this.#year >= 1969 && this.#year <= 1980) {
return "Generación X: Obsesión por el éxito.";
} else if (this.#year >= 1949 && this.#year <= 1968) {
return "Baby Boom: Ambición.";
} else if (this.#year >= 1930 && this.#year <= 1948) {
return "Silent Generation: Austeridad.";
} else {
return "Año de nacimiento fuera de rango para esta clasificación.";
}
}

esMayorDeEdad() {
return this.#age >= 18 ? "Es mayor de edad" : "Es menor de edad";
}

showPerson() {
const div = document.createElement("div");
div.innerHTML = `
<h3 class = "mb-3 text-primary-emphasis" >Datos de la persona: </h3>
<ul>
<li><strong class = "text-primary-emphasis" >Nombre:</strong> ${this.#name}</li> 
<li><strong class = "text-primary-emphasis" >Apellido:</strong> ${this.#surname}</li> 
<li><strong class = "text-primary-emphasis" >DNI:</strong> ${this.#dni}</li> 
<li><strong class = "text-primary-emphasis" >Edad:</strong> ${this.#age}</li> 
<li><strong class = "text-primary-emphasis" >Sexo:</strong> ${this.gender}</li> 
<li><strong class = "text-primary-emphasis" >Peso:</strong> ${this.#weight} kg</li> 
<li><strong class = "text-primary-emphasis" >Altura:</strong> ${this.#height} cm</li> 
<li><strong class = "text-primary-emphasis" >Año de nacimiento:</strong> ${this.#year}</li>
</ul>`

return div;
}
}
