
// Definición de tipos básicos
let nombre: string = "Juan"; // String, para almacenar texto
let edad: number = 30; // Number, para almacenar números
let esDesarrollador: boolean = true; // Boolean, para almacenar valores verdadero/falso

// Definición de tipo `any`, que permite cualquier tipo de dato, ignora el tipado (se recomienda usarlo poco)
let algo: any = "Puede ser cualquier cosa"; // Se puede cambiar el tipo más adelante
algo = 42; // Ahora es un número

// Definición de arreglos
let numeros: number[] = [1, 2, 3, 4, 5]; // Arreglo de números
let palabras: Array<string> = ["Hola", "Mundo"]; // Otra forma de definir un arreglo de strings

// Creación de un objeto con tipos específicos
let persona: { nombre: string; edad: number } = {
    nombre: "Carlos",
    edad: 25
};

// Uso de interfaces para definir tipos de objetos complejos
interface Persona {
    nombre: string;
    edad: number;
    saludar(): void; // Método de la interfaz
}

// Uso de funciones con tipado de parámetros y retorno
function sumar(a: number, b: number): number {
    return a + b;
}
let resultado: number = sumar(10, 20); // resultado: 30

// Funciones con parámetros opcionales y valores predeterminados
function saludar(nombre: string, saludo: string = "Hola"): string {
    return `${saludo}, ${nombre}!`;
}
console.log(saludar("Miguel")); // Salida: Hola, Miguel!

// Uso de `union types` para aceptar múltiples tipos
function mostrarIdentidad(id: number | string): void {
    console.log(`Tu ID es: ${id}`);
}
mostrarIdentidad("ABC123"); // Funciona con string
mostrarIdentidad(123); // Funciona con número

// Uso de genéricos para definir funciones o clases que aceptan cualquier tipo de dato
function invertirArray<T>(array: T[]): T[] {
    return array.reverse();
}
let numerosInvertidos = invertirArray([1, 2, 3, 4, 5]); // Resultado: [5, 4, 3, 2, 1]
let palabrasInvertidas = invertirArray(["uno", "dos", "tres"]); // Resultado: ["tres", "dos", "uno"]

// Creación de un `enum` para definir un conjunto de valores constantes
enum Color {
    Rojo = "rojo",
    Verde = "verde",
    Azul = "azul"
}
let colorFavorito: Color = Color.Verde; // Usa un valor del enum

// Uso de `type assertion` para indicar manualmente el tipo de una variable
let valorDesconocido: any = "Esto es un string";
let longitudDelTexto: number = (valorDesconocido as string).length; // Convierte `any` a `string`

// Manejo de `null` y `undefined` en los tipos
let puedeSerNulo: string | null = null; // Puede ser un string o null
puedeSerNulo = "Ahora no es null";

// Uso de `never` para indicar que una función nunca retorna
function lanzarError(mensaje: string): never {
    throw new Error(mensaje);
}

// Función asíncrona con `async` y `await`
async function obtenerDatos(): Promise<string> {
    let respuesta = await new Promise<string>((resolve) => {
        setTimeout(() => resolve("Datos obtenidos!"), 2000);
    });
    return respuesta;
}

// Llamada a la función asíncrona
obtenerDatos().then(data => console.log(data)); // Salida: Datos obtenidos! (después de 2 segundos)

// Practica agregando o modificando cada sección y observa los resultados en el editor
