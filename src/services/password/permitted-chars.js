
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

export default permittedChars;