### Versión 1.0.3 - Readme

# NODE SEED

La finalidad de este proyecto es crear un scaffolding que proporcione una configuración básica y funcional para usar como base en nuevos proyectos.

## Un poco más

Además de crear la semilla **seed**, la idea principal del proyecto es documentar los pasos seguidos durante su creación.

## Implementaciones

### Creación del proyecto

#### Yarn

Para la creación del proyecto, utilizamos el gestor de paquetes de JavaScript, Yarn.

```bash
  yarn init -y
```

Este comando genera un archivo *package.json*, que constituye la base de nuestro proyecto. A partir de aquí, iremos instalando dependencias y configurando scripts.

### Typescript

Añadimos TypeScript a nuestro proyecto. Para ello, ejecutamos el siguiente comando, que instala las dependencias necesarias para usar TypeScript:

```bash
  yarn add typescript ts-node @types/node --dev
```

Una vez instaladas las dependencias, creamos el archivo tsconfig.json, donde añadimos la configuración de TypeScript.

Luego, creamos un archivo src/index.ts para probar la funcionalidad de TypeScript. 

A continuación, añadimos los scripts de desarrollo y compilación (dev y build) en el package.json:

```bash
"scripts": {
    "dev": "ts-node src/index.ts",
    "build": "tsc"
  }
```

### ESLint

Se ha integrado ESLint en el proyecto con el objetivo de establecer una estructura simétrica en el código, garantizar el correcto uso de TypeScript y asegurar un código limpio y bien mantenido. Para ello, ejecutamos el siguiente comando:


```bash
  yarn create @eslint/config
```

A continuación, se nos presentará una serie de preguntas para configurar ESLint de manera adecuada, incluyendo opciones como:

- **Sintaxis o corrección de errores**: Definir si queremos que ESLint solo verifique la sintaxis del código o también corrija automáticamente los errores encontrados.
- **Soporte para TypeScript**: Especificar si el proyecto es de TypeScript y si se deben aplicar reglas específicas para este lenguaje.
- **Gestor de paquetes**: Elegir entre diferentes gestores de paquetes, como npm o yarn.
- **Tipo de proyecto**: Definir el tipo de proyecto (por ejemplo, aplicación web, Node, etc.) para aplicar las reglas más adecuadas.