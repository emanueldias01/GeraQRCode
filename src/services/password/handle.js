

async function permittedChars() {
    let chars = [];

    if(process.env.UPPERCASE_LETTERS){
        chars.push(..."ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }

    if(process.env.LOWERCASE_LETTERS){
        chars.push(..."abcdefghijklmnopqrstuvwxyz");
    }

    if(process.env.NUMBERS){
        chars.push(..."0123456789");
    }

    if(process.env.SPECIAL_CHARS){
        chars.push(..."!@#$%^&*()-_");
    }

    return chars;
}

async function handle() {
    const passwordLength = process.env.PASSWORD_LENGTH;

    const chars = await permittedChars();

    console.log(chars);
    let password = "";

    for(let i = 0; i < passwordLength; i++){
        const index = Math.floor(Math.random() * chars.length);
        password += chars[index];
    }

    return password;
}

export default handle;