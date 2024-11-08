import prompt from "prompt";
import createQrcode from "./services/qr-code/create.js";
import createPassword from "./services/password/create.js";
import promptSchemaMain from "./prompts-schema/schema-main.js";

async function main() {
  prompt.get(promptSchemaMain, async (err, choose) => {
    if(choose.select == 1) await createQrcode();
    if(choose.select == 2) await createPassword();
  });

  prompt.start();
}

main();