# Simulador de Recursión en Java

Aplicación web educativa de **MADARME** para comprender cómo se ejecutan los métodos recursivos.

El simulador permite observar, paso a paso:

- las llamadas recursivas;
- el árbol de llamadas;
- la pila de ejecución;
- los parámetros de cada instancia;
- los casos base;
- los valores retornados;
- la expansión y el retorno de la recursión.

Sitio publicado: [madarme.github.io/simulador-recursion-java](https://madarme.github.io/simulador-recursion-java/)

## ¿Qué es la recursión?

La recursión es una técnica en la que un método se llama a sí mismo para resolver una versión más pequeña del problema original.

Toda solución recursiva debe tener:

1. **Caso base:** condición que detiene las llamadas.
2. **Paso recursivo:** llamada al mismo método con una entrada más pequeña o más cercana al caso base.
3. **Retorno:** combinación de los resultados cuando las llamadas comienzan a finalizar.

## Ejemplo

```java
static int factorial(int n) {
    if (n <= 1) {
        return 1;
    }

    return n * factorial(n - 1);
}
```

El simulador permite visualizar la expansión:

```text
factorial(5)
factorial(4)
factorial(3)
factorial(2)
factorial(1)
```

y luego los retornos:

```text
factorial(1) retorna 1
factorial(2) retorna 2
factorial(3) retorna 6
factorial(4) retorna 24
factorial(5) retorna 120
```

## Características

- Editor de código con números de línea.
- Opción **Código propio** para escribir un método personalizado.
- Detección automática de parámetros.
- Validación de parámetros `int`, `double`, `boolean` y vectores.
- Lexer y parser recursivo descendente propios.
- Representación intermedia mediante AST.
- Intérprete educativo de un subconjunto de Java.
- Árbol de recursión renderizado con SVG.
- Ejecución por eventos `CALL` y `RETURN`.
- Botones **Ejecutar**, **Paso siguiente**, **Paso anterior** y **Reiniciar**.
- División entera compatible con el comportamiento de Java para valores `int`.
- Visualización de casos base y valores retornados.
- Diseño responsive inspirado en la identidad visual de MADARME.

## Subconjunto de Java soportado

Actualmente se aceptan:

- métodos `static` y `public static`;
- tipos `int`, `double`, `boolean`, `char`, `String`;
- vectores como `int[]`;
- parámetros y variables locales;
- asignaciones;
- `if` con bloques o con una sola instrucción;
- `else`;
- `return`;
- operadores aritméticos, relacionales y lógicos;
- llamadas recursivas;
- llamadas entre métodos;
- acceso a vectores y propiedad `.length`.

Ejemplo de `if` de una sola línea:

```java
static int contarCifras(int n) {
    if (n > -10 && n < 10)
        return 1;

    return 1 + contarCifras(n / 10);
}
```

## Restricciones de seguridad

El simulador **no ejecuta Java arbitrario**. El código se procesa con esta arquitectura:

```text
Código fuente → Lexer → Parser → AST → Intérprete → Traza → Visualización
```

No se utiliza:

- `eval()`;
- `Function()`;
- compiladores Java externos;
- procesos del sistema operativo;
- backend remoto para ejecutar código;
- lectura o escritura de archivos;
- acceso a red desde el código del estudiante.

La ejecución tiene límites para evitar recursiones infinitas o árboles excesivamente grandes:

```javascript
MAX_DEPTH = 30
MAX_CALLS = 500
MAX_STEPS = 5000
```

## Estructura del proyecto

```text
simulador-recursion-java/
├── index.html
├── css/
│   ├── styles.css
│   ├── madarme.css
│   └── editor.css
├── js/
│   ├── app.js
│   ├── ast.js
│   ├── editor.js
│   ├── execution.js
│   ├── interpreter.js
│   ├── lexer.js
│   ├── parser.js
│   ├── stack-renderer.js
│   ├── tree-renderer.js
│   ├── utils.js
│   └── validator.js
├── examples/
│   └── examples.js
├── assets/
│   └── mi_logo_en_negro.jpg
└── README.md
```

## Ejecutar localmente

La aplicación utiliza módulos ES, por lo que debe abrirse mediante un servidor web local.

Desde la carpeta del proyecto:

```bash
python3 -m http.server 8000
```

Después abre:

```text
http://localhost:8000
```

## Publicar en GitHub Pages

El repositorio está preparado para funcionar desde una subcarpeta, por ejemplo:

```text
https://usuario.github.io/simulador-recursion-java/
```

Para activar GitHub Pages:

1. Abre el repositorio en GitHub.
2. Entra en **Settings → Pages**.
3. En **Build and deployment**, selecciona **Deploy from a branch**.
4. Selecciona la rama `main`.
5. Selecciona la carpeta `/ (root)`.
6. Pulsa **Save**.

Los recursos utilizan rutas relativas para que la aplicación funcione correctamente dentro de GitHub Pages.

## Tecnologías

- HTML5
- CSS3
- JavaScript ES6+
- Módulos JavaScript
- SVG
- GitHub Pages

No requiere backend ni dependencias externas para ejecutarse.

## Propósito académico

El proyecto está pensado como apoyo para cursos de:

- programación;
- estructuras de datos;
- análisis de algoritmos;
- programación web;
- pensamiento computacional;
- pedagogías digitales.

Su objetivo es conectar el código fuente con la ejecución concreta de cada llamada recursiva y hacer visibles conceptos que normalmente permanecen ocultos en la pila del programa.
