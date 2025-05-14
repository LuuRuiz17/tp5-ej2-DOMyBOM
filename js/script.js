function createPerson(e) { 
    e.preventDefault();
    contenedorRespuestaBotones.innerHTML = "";

    const name = document.getElementById("inputNombre");
    const surname = document.getElementById("inputApellido")
    const dni = document.getElementById("inputDNI");
    const age = document.getElementById("inputEdad");
    const gender = document.getElementById("inputSexo");
    const weight = document.getElementById("inputPeso");
    const height = document.getElementById("inputAltura");
    const year = document.getElementById("inputAnioNacimiento");

    person = new Person(name.value, surname.value, dni.value, age.value, gender.value, weight.value, height.value, year.value);
    
    name.value = "";
    surname.value = "";
    dni.value = "";
    age.value = "";
    gender.value = "";
    weight.value = "";
    height.value = "";
    year.value = "";
    console.log(person);
    existe = true;
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
        return this.#name;
    }

    set surname(newSurname) {
        this.#name = newSurname;
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
        if(this.#gender === 1){
            return "Hombre";
        }
        else{
            return "Mujer";
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
        let generation = "";
        if (this.#year >= 1994 && this.#year <= 2010) {
            generation = "Generación Z => Irreverencia 😛";
        } else if (this.#year >= 1981 && this.#year <= 1993) {
            generation = "Millennials => Frustración 😵‍💫";
        } else if (this.#year >= 1969 && this.#year <= 1980) {
            generation = "Generación X => Obsesión por el éxito 😎";
        } else if (this.#year >= 1949 && this.#year <= 1968) {
            generation = "Baby Boom => Ambición 🤑";
        } else if (this.#year >= 1930 && this.#year <= 1948) {
            generation = "Silent Generation => Austeridad 😐";
        } else {
            generation = "No hay una generación definida."
        }
        return generation
    }

    showPerson() {
        const container = document.createElement("div");
        //En género no tengo que usar la propiedad privada porque esa sólo tiene un número. En el getter hice un condicional para que lo transforme en "Hombre" o "Mujer"
        container.innerHTML = `

        <h3>Datos de la persona creada:</h3>
        <ul>
        <li><b>Nombre:</b> ${this.#name}</li>
        <li><b>Apellido:</b> ${this.#surname}</li>
        <li><b>DNI:</b> ${this.#dni}</li>
        <li><b>Edad:</b> ${this.#age}</li>
        <li><b>Género:</b> ${this.gender}</li> 
        <li><b>Peso:</b> ${this.#weight} kg</li>
        <li><b>Altura:</b> ${this.#height} cm</li>
        <li><b>Año de Nacimiento:</b> ${this.#year}</li>
        </ul>`;

        return container;
    }

    esMayorDeEdad() {
        if (this.#age >= 18) {
            return `${this.#name} tiene ${this.#age} años, por lo que es mayor de edad.`;
        } else {
            return `${this.#name} tiene ${this.#age} años, por lo que es menor de edad.`;
        }
    }
}

let person = null;
const btnCrearPersona = document.querySelector(".btn-primary");
const btnMostrarGeneracion = document.querySelector(".btn-success");
const btnMayorDeEdad = document.querySelector(".btn-warning");
const btnMostrarInformacion = document.querySelector(".btn-secondary");
const formulario = document.querySelector('form');
const contenedorRespuestaBotones = document.getElementById('contenedorRespuestaBotones');

formulario.addEventListener('submit', createPerson);

btnMostrarGeneracion.addEventListener('click', () => {
    if (person) {
        const generacion = document.createElement('p');
        const tituloGeneracion = document.createElement('h3');
        generacion.classList.add("mt-3");
        generacion.textContent = person.showGeneration();
        tituloGeneracion.textContent = "Generación: "
        contenedorRespuestaBotones.appendChild(tituloGeneracion);
        contenedorRespuestaBotones.appendChild(generacion);
    } else {
        alert("No se creó a la persona.");
    }
});

btnMayorDeEdad.addEventListener('click', () => {
    if (person) {
        const edad = document.createElement('p');
        const tituloEdad = document.createElement('h3');
        edad.classList.add("mt-3");
        edad.textContent = person.esMayorDeEdad();
        tituloEdad.textContent = "Edad: "
        contenedorRespuestaBotones.appendChild(tituloEdad);
        contenedorRespuestaBotones.appendChild(edad);
    }
})

btnMostrarInformacion.addEventListener('click', () => {
    if (person) {
        const informacion = document.createElement('div');
        informacion.classList.add("mt-3");
        informacion.appendChild(person.showPerson());
        contenedorRespuestaBotones.appendChild(informacion);
    }
})



