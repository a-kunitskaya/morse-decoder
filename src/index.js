const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const chunks = expr.match(/.{10}/g);
    let result = '';

    chunks.forEach(chunk => {
        if (chunk === '**********') {
            result += ' ';
        } else {
            const leftZerosRemoved = chunk.substr(chunk.indexOf('1'));
            const morseChars = leftZerosRemoved.match(/.{2}/g);
            const morseCode = morseChars.reduce((acc, char) => {
                acc += char === '10' ? '.' : '-';
                return acc;
            }, '');
            result += MORSE_TABLE[morseCode];
        }
    });

    return result;
}

module.exports = {
    decode
}
