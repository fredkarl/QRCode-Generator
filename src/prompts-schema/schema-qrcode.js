import chalk from "chalk";

const promptSchemaQrcode = [
  {
    name: "link",
    description: chalk.yellow("Digite o link para gerar o QR Code"),
  },
  {
    name: "type",
    description: chalk.yellow("Escolha o tipo de QR Code (1 - Imagem ou 2 - Gerado no terminal)"),
    pattern: /^[12]$/,
    message: chalk.red.italic("Escolha apenas entre 1 ou 2"),
    required: true,
  }
];

export default promptSchemaQrcode;