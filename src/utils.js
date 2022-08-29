// Input: {actor: {movie1: sameCharacter, movie2: sameCharacter, movie3: differentCharacter}}
// Output {actor: {movie1: sameCharacter, movie3: differentCharacter}}
function uniqueMovieCharactersOfActor(movieCharactersOfActor) {
    const actor = Object.keys(movieCharactersOfActor)[0];
    const movieCharacters = movieCharactersOfActor[actor];
    const uniqueMovieCharacters = Object.keys(movieCharacters).reduce((acc, movie) => Object.values(acc).includes(movieCharacters[movie]) ?
        acc : {...acc, [movie]: movieCharacters[movie]}, {})

    return {[actor]: uniqueMovieCharacters};
}

function essentiallyTheSameCharacter(characterA, characterB) {
    const nestedCharactersA = getNestedCharacters(characterA);
    const nestedCharactersB = getNestedCharacters(characterB);

    return nestedCharactersA.some(nestedCharacterA =>
        nestedCharactersB.some(nestedCharacterB => nestedCharacterA.includes(nestedCharacterB) ||
        nestedCharacterB.includes(nestedCharacterA)));
}

// Input: "James 'Rhodey' Rhodes / War Machine (uncredited)"
// Outputs: ["James Rhodey Rhodes", "War Machine"]
function getNestedCharacters(character) {
    // Normalize both "Virginia 'Pepper' Potts" and "Virginia \"Pepper\" Potts" to be the "Virginia Pepper Potts"
    // Remove any "(uncredited)" or similar notes
    character = character.replace(/[\\"']|\(.*\)/g, "").trim();

    return character.split(" / ");
}

module.exports = {
    uniqueMovieCharactersOfActor,
    essentiallyTheSameCharacter,
    getNestedCharacters
}