let numberOfCharacters = document.querySelector('#number_of_characters');
let passwordGoesHere = document.querySelector('#password_goes_here');

document.querySelector('#create_password_button').addEventListener('click', function(e){
    passwordGoesHere.value = '';
    let randomPasswordGeneratedHolder = [];

    // Small Letters
    if (document.querySelector('#checkbox_small_letters').checked == true) {
        randomPasswordGeneratedHolder.push('a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','v', 'w', 'x', 'y','z');
    }

    // Big Letters
    if (document.querySelector('#checkbox_big_letters').checked == true) {
        randomPasswordGeneratedHolder.push('A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','V', 'W', 'X', 'Y','Z');
    }

    // Numbers
    if (document.querySelector('#checkbox_numbers').checked == true) {
        randomPasswordGeneratedHolder.push('0','1','2','3','4','5','6','7','8','9');
    }

    // Symbols
    if (document.querySelector('#checkbox_symbols').checked == true) {
        randomPasswordGeneratedHolder.push('!', '\"', '#', '¤', '%', '&', '/', '(', ')', '=', '?', '\´', '@', '£', '$', '{', '[', ']', '}', '+', '|', '\`', '¨', '~', '^', '*', '\'', ',', ';', '.', ':', '-', '_', '§', '½');
    }

    // Spaces
    if (document.querySelector('#checkbox_spaces').checked == true) {
        randomPasswordGeneratedHolder.push(' ');
    }

    if (document.querySelector('#checkbox_small_letters').checked == false &&
    document.querySelector('#checkbox_big_letters').checked == false &&
    document.querySelector('#checkbox_numbers').checked == false &&
    document.querySelector('#checkbox_symbols').checked == false && 
    document.querySelector('#checkbox_spaces').checked == false) {
        randomPasswordGeneratedHolder.push('Why the H* would you uncheck all of the checkboxes!?!??!?!??!');
    }

    for (let i = 0; i < numberOfCharacters.value; i++) {
            
        passwordGoesHere.value += randomPasswordGeneratedHolder[Math.floor(Math.random() * Math.floor(randomPasswordGeneratedHolder.length))];

    }  
});