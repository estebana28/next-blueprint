#!/usr/bin/env node
import readline from 'readline';
import { askAppName, askTypeScript } from './questions.js';
import { createAppDirectory } from './utils.js';
// Mensaje de bienvenida y descripción
console.log(`
Welcome to NextBlueprint!
This tool helps you create a Next.js project with customizable configurations.
You can choose various options for styling, state management, and more.
`);
console.log('Press any key to continue...');
// Configurar readline para capturar una sola tecla
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);
const handleKeypress = () => {
    process.stdin.setRawMode(false);
    process.stdin.pause();
    // Pregunta para el nombre de la aplicación
    askAppName().then(answers => {
        const appName = answers.appName;
        console.log(`Application name: ${appName}`);
        // Crear una carpeta con el nombre de la aplicación
        createAppDirectory(appName);
        // Pregunta para TypeScript
        askTypeScript().then(answers => {
            const useTypescript = answers.typescript;
            console.log(`Use TypeScript: ${useTypescript}`);
            // Aquí puedes continuar con las siguientes preguntas o configuraciones
        });
    });
    // Remover el listener después de usarlo
    process.stdin.removeListener('keypress', handleKeypress);
};
// Agregar el listener
process.stdin.on('keypress', handleKeypress);
process.stdin.resume();
