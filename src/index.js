import prompt from "prompt";
import mainPrompt from "./prompts/prompt-main.js";

async function main() {
    prompt.get(mainPrompt, async (err, chose) => {
        if(chose.select == 1) console.log("Escolheu QRCODE");
        if(chose.select == 2) console.log("Escolheu PASSWORD");
    })
}

main();