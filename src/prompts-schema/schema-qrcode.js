import chalk from "chalk";

const qrCodeSchema = [
    {
        name : "link",
        description : chalk.yellow("Digite o link para gerar o QRCode"),
    },
    {
        name : "type",
        description : chalk.yellow.bold("Escolha entre o tipo (1- Normal ou (2- Terminal"),
        pattern : /^[1-2]+$/,
        message : chalk.red.italic("Escolha apenas entre 1 e 2"),
        required : true
    }
];

export default qrCodeSchema;