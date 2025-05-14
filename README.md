# 🧑‍💻 Ejercicio: Clase `Persona` con Métodos y Formulario en JavaScript

## 📋 Enunciado

Crear una clase llamada `Persona` que cumpla con las siguientes condiciones:

### 🔧 Propiedades:

* `nombre`
* `edad`
* `DNI`
* `sexo` (H para hombre, M para mujer)
* `peso`
* `altura`
* `año de nacimiento`

*Se pueden agregar propiedades adicionales si se considera necesario.*

### 🧠 Métodos requeridos:

* `mostrarGeneracion()`: muestra un mensaje indicando a qué generación pertenece la persona y cuál es su rasgo característico, basado en la siguiente tabla:

| Generación        | Rango de años | Rasgo característico  |
| ----------------- | ------------- | --------------------- |
| Silent Generation | 1930 - 1948   | Austeridad            |
| Baby Boom         | 1949 - 1968   | Ambición              |
| Generación X      | 1969 - 1980   | Obsesión por el éxito |
| Millennials       | 1981 - 1993   | Frustración           |
| Generación Z      | 1994 - 2010   | Irreverencia          |

* `esMayorDeEdad()`: indica si la persona es mayor de edad, devolviendo un mensaje correspondiente.
* `mostrarDatos()`: muestra toda la información de la persona.

---

## 💻 Interfaz de Usuario

Se debe crear una **interfaz gráfica web** que permita:

1. Crear una persona ingresando los datos en un **formulario**.
2. Usar **botones** para:

   * Mostrar a qué generación pertenece.
   * Indicar si la persona es mayor de edad.
   * Mostrar todos los datos cargados.

---

## 🛠️ Tecnologías utilizadas

* HTML5
* CSS3 (Bootstrap para estilos)
* JavaScript (ES6+)

---

## 🚀 Cómo usarlo

1. Abrí el archivo `index.html` en tu navegador.
2. Completá el formulario con los datos de una persona.
3. Presioná el botón "Crear Persona".
4. Luego podés usar los botones:

   * **Mostrar Generación**
   * **¿Es mayor de edad?**
   * **Mostrar Información**

Los resultados se mostrarán en pantalla o en alertas, según corresponda.

---

## 📁 Estructura del proyecto

```
.
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ✅ Consideraciones

* Si se crea una nueva persona, los resultados anteriores se eliminan automáticamente.
* Los datos ingresados se validan mínimamente por el navegador (campos requeridos, tipos numéricos, etc).

---

## 🧑‍💻 Autor

Luciana Ruiz




