import chalk from "chalk";
import qr from "qrcode-terminal";

async function handleQrcode(err, choose) {
  if(err) { 
    console.log("error on application"); 
    return;
  }

  const isSmall = choose.type == 2;
  qr.generate(choose.link, {small: isSmall}, (qrcode) => {
    console.log(chalk.green("QR Code gerado com sucesso:\n"))
    console.log(qrcode);
  })

}

export default handleQrcode; 