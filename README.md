# Simulador de Recursión en Java

Aplicación web educativa estática para visualizar llamadas recursivas. Interpreta un subconjunto controlado de Java mediante lexer, parser, AST e intérprete propios; nunca ejecuta código Java arbitrario ni usa `eval`.

## Uso local

Como usa módulos ES, abre el proyecto mediante un servidor estático:

```bash
python3 -m http.server 8000
```

Luego visita `http://localhost:8000`.

## Publicar en GitHub Pages

1. Crea un repositorio público llamado `simulador-recursion-java`.
2. Sube estos archivos a la rama `main`.
3. En GitHub abre **Settings → Pages**, selecciona **Deploy from a branch**, rama `main` y carpeta `/ (root)`.
4. La app quedará disponible en `https://TU_USUARIO.github.io/simulador-recursion-java/`.

Todos los recursos usan rutas relativas para funcionar desde una subcarpeta.
