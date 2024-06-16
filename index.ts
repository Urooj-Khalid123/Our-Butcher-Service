#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bgBlueBright(           "          Wellcome To                    "));
console.log(chalk.bgBlueBright(           "         Our Butcher Service             "));
console.log("-".repeat(50));


console.log(
    chalk.bgGreen.bold(" Cow  "),
    chalk.bgMagenta.bold(" Goat  "),
    chalk.bgMagenta.bold(" Camel  ")
);


interface ButcherService {
    animal : string;
    price: number;
}


const prices: { [key: string]: ButcherService[] } = {
    'Eid first day': [
      { animal: 'Cow', price: 15000 },
      { animal: 'Goat', price: 10000 },
      { animal: 'Camel', price: 25000 },
    ],
    'Eid second day': [
      { animal: 'Cow', price: 12000 },
      { animal: 'Goat', price: 9000 },
      { animal: 'Camel', price: 23000 },
    ],
    'Eid third day': [
      { animal: 'Cow', price: 10000 },
      { animal: 'Goat', price: 8000 },
      { animal: 'Camel', price: 20000 },
    ],
  };


async function main() {
    const answers = await inquirer.prompt([
        {
            name: "name",
            message: "Enter Your Name :",
            type: "input",
        },
        {
            name: "location",
            message: "Enter Your Location :",
            type: "input",
        },
        {
            name: "eidDay",
            message: "Which day of Eid would you like the service ?",
            type: "list",
            choices: ['Eid first day', 'Eid second day', 'Eid third day'],
        },
        {
            name: "animal",
            message: "Which animal would you like to butcher ?",
            type: "list",
            choices(answers){
                return prices [answers.eidDay].map(service => service.animal);

            },
        },
    ]);

    // Find the selected service
    const selectedService = prices[answers.eidDay].find(
        service => service.animal === answers.animal
    );

    console.log(`Name :${answers.name}`);
    console.log(`Location :${answers.location}`);
    console.log(`Eid Day :${answers.eidDay}`);
    console.log(`Animal for Butchering :${answers.animal}`);
    console.log(`Price for Service :${selectedService?.price}`);
    console.log("-".repeat(50));   
}

main()
