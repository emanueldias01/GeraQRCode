import prompt from "prompt";
import qrCodeSchema from "../../prompts-schema/schema-qrcode.js";
import handle from "./handle.js";


async function createQrcode() {
    prompt.get(qrCodeSchema, handle);

    prompt.start();
}

export default createQrcode;