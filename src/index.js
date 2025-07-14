import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";
import createQrcode from "./services/qr-code/create.js";

async function main() {
    prompt.get(mainPrompt, async (err, chose) => {
        if(chose.select == 1) await createQrcode();
        if(chose.select == 2) console.log("Escolheu PASSWORD");
    })
}

main();