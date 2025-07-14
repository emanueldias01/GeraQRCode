import permittedChars from "./permitted-chars.js";

async function handle() {
    const passwordLength = process.env.PASSWORD_LENGTH;

    const chars = await permittedChars();

    let password = "";

    for(let i = 0; i < passwordLength; i++){
        const index = Math.floor(Math.random() * chars.length);
        password += chars[index];
    }

    return password;
}

export default handle;