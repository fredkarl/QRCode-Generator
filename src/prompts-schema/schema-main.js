import chalk from "chalk";

const promptSchemaMain = [
  {
    name: "select",
    description: chalk.yellow.bold("Escolha a ferramenta (1 - QrCode ou 2 - PASSWORD)"),
    pattern: /^[12]$/,
    message: chalk.red.italic("Escolha apenas entre 1 e 2 😢"),
    require: true,
  }
];

export default promptSchemaMain;