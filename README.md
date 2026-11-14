# Simulador de Recursión en Java
Aplicación web educativa para los cursos de **Estructuras de Datos y Análisis de Algoritmos**, orientada a comprender cómo se ejecutan los métodos recursivos.
## Funciones
- Visualización paso a paso del árbol de recursión.
- Pila de ejecución y valores retornados.
- Casos base, expansión y retorno.
- Editor con números de línea.
- Opción **Código propio** con parámetros automáticos.
- Validación de tipos `int`, `double`, `boolean` y vectores.
## Ejemplo
```java
static int factorial(int n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}
```
## Seguridad
El código no se ejecuta como Java arbitrario. Se procesa mediante lexer, parser, AST e intérprete educativo. No se utiliza `eval()`, `Function()`, backend remoto ni procesos del sistema.
## Uso local
```bash
python3 -m http.server 8000
```
Después abre `http://localhost:8000`.
## GitHub Pages
El sitio está publicado en [madarme.github.io/simulador-recursion-java](https://madarme.github.io/simulador-recursion-java/). Todos los recursos utilizan rutas relativas y funcionan desde una subcarpeta.
## Tecnologías
HTML5, CSS3, JavaScript ES6+, módulos JavaScript, SVG y GitHub Pages.
