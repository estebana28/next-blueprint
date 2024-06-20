import inquirer from 'inquirer';

export const askAppName = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'appName',
      message: 'Enter the name of your Next.js application:',
      validate: input => input.length > 0 && input.length <= 20 ? true : 'The application name must be between 1 and 20 characters.'
    }
  ]);
};

export const askTypeScript = () => {
  return inquirer.prompt([
    {
      type: 'confirm',
      name: 'typescript',
      message: 'Would you like to use TypeScript?',
      default: false
    }
  ]);
};