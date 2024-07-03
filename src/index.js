#!/usr/bin/env node

import chalk from 'chalk';
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import createDirectoryContents from './createDirectoryContents.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CURR_DIR = process.cwd();

const authChoices = [
  { name: 'Clerk', value: 'clerk' },
  { name: 'Stack', value: 'stack' },
  { name: 'No Auth', value: 'noauth' }
];

const ormChoices = [
  { name: 'Drizzle', value: 'drizzle' },
  // { name: 'Prisma', value: 'prisma' }
];

const paymentChoices = [
  { name: 'Lemonsqueezy', value: 'lemonsqueezy' }
];

const questions = [
  {
    name: 'project-name',
    type: 'input',
    message: 'Project name:',
    validate: input => /^([A-Za-z\-\\_\d])+$/.test(input) ? true : 'Project name may only include letters, numbers, underscores, and hashes.'
  },
  {
    name: 'auth',
    type: 'list',
    message: 'Choose your authentication provider:',
    choices: authChoices
  },
  {
    name: 'orm',
    type: 'list',
    message: 'Choose your ORM:',
    choices: ormChoices
  },
  {
    name: 'payment',
    type: 'list',
    message: 'Choose your payment integration:',
    choices: paymentChoices
  },
];

async function main() {
  try {
    const answers = await inquirer.prompt(questions);
    const { auth, orm, payment, 'project-name': projectName } = answers;
    const templateName = `${auth}-${orm}-${payment}`;
    const templatePath = join(__dirname, '../templates', templateName);

    // Create project directory based on the selected template
    fs.mkdirSync(join(CURR_DIR, projectName), { recursive: true });

    // Copy the contents from the template directory to the new project directory
    await createDirectoryContents(templatePath, join(CURR_DIR, projectName));
    
    const projectPath = path.resolve(projectName);
    console.log(chalk.green('Scaffolding project in ') + chalk.blue(`${projectPath}...`));
    console.log(chalk.green('Done. Now run:\n'));
    console.log(chalk.yellow(`  cd ${projectName}`));
    console.log(chalk.yellow('  pnpm install'));
    console.log(chalk.yellow('  Copy .env.loc to .env.local.'));
    console.log(chalk.yellow('  Copy .env.example to .env'));
    console.log(chalk.yellow('  Update env variables'));
    console.log(chalk.yellow('  npm run dev'));
  } catch (error) {
    console.error(chalk.red('Error occurred during project scaffolding:'), error);
  }
}

main();
