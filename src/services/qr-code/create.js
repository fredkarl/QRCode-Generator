import prompt from "prompt";
import handleQrcode from "./handle.js";
import promptSchemaQrcode from "../../prompts-schema/schema-qrcode.js";

async function createQrcode() {
  prompt.get(promptSchemaQrcode, handleQrcode);

  prompt.start;
}

export default createQrcode;