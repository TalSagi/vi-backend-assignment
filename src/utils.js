// Input: {actor: {movie1: sameCharacter, movie2: sameCharacter, movie3: differentCharacter}}
// Output {actor: {movie1: sameCharacter, movie3: differentCharacter}}
function uniqueMovieCharactersOfActor(movieCharactersOfActor) {
    const actor = Object.keys(movieCharactersOfActor)[0];
    const movieCharacters = movieCharactersOfActor[actor];
    const uniqueMovieCharacters = Object.keys(movieCharacters).reduce((acc, movie) => Object.values(acc).includes(movieCharacters[movie]) ?
        acc : {...acc, [movie]: movieCharacters[movie]}, {})

    return {[actor]: uniqueMovieCharacters};
}

module.exports = {
    uniqueMovieCharactersOfActor
}