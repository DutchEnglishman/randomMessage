
// Create the first Part of the Message
let part1 = () => {
    let part1creation = Math.floor(Math.random() * 6);
    switch(part1creation) {
        case 0: return 'Go together with Mop';
        break;
        case 1: return 'Go alone';
        break;
        case 2: return'Go by yourself';
        break;
        case 3: return 'Go together with Mop and Koekie'
        break;
        case 4: return 'Go with Tijmen and Kish'
        break;
        default: return 'Hier gaat iets fout'
    }
};

// Create the second Part of the Message
let part2 = () => {
    let part2creation = Math.floor(Math.random() * 6);
    switch(part2creation) {
        case 0: return 'to see a movie';
        break;
        case 1: return 'on a holiday';
        break;
        case 2: return 'to a golf course';
        break;
        case 3: return 'to visit family'
        break;
        case 4: return 'to visit your mom'
        break;
        default: return 'gaat lekker zo'
    }
}

// Create the third Part of the Message
let part3 = () => {
    let part3creation = Math.floor(Math.random() * 6);
    switch(part3creation) {
        case 0: return 'on Saturday.';
        break;
        case 1: return 'for five months.';
        break;
        case 2: return 'for two weeks.';
        break;
        case 3: return 'from Monday to Friday.'
        break;
        case 4: return 'for the rest of your life.'
        break;
        default: return 'en ook hier gaat iets niet goed.'
    }
}

// Make a complete message
let randomMessage = () => {
    return(`${part1()} ${part2()} ${part3()}`)
}

console.log(randomMessage());
