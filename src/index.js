const axios = require('axios').default;
const express = require('express');
const { API_KEY } = require('./constants');
const { movies, actors } = require('../dataForQuestions');

const port = Number(process.env.PORT) || 3000;
const app = express();
app.listen(port, () => console.log(`App listening on http://localhost:${port}`));

app.get("/", (req, res) => res.send(sayHey("Marvel enthusiast")))
app.get("/moviesPerActor", async (req, res) => res.send(await moviesPerActor()));
app.get("/actorsWithMultipleCharacters", async (req, res) => res.send(await actorsWithMultipleCharacters()));

async function moviesPerActor() {
    const arrayedResult = await Promise.all(actors.map(moviesOfActorByName));

    return arrayedResult.reduce((acc, moviesOfActor) => ({...acc, ...moviesOfActor}), {});
}

async function actorsWithMultipleCharacters() {
    const arrayedResult = await Promise.all(actors.map(movieCharactersOfActorByName));
    
    return arrayedResult.reduce((acc, charactersOfActor) => ({...acc, ...charactersOfActor}), {});
}

async function moviesOfActorByName(actorName) {
    const actorId = await getActorId(actorName);
    const movieCharacters = await movieCharactersOfActorById(actorId)
    
    return {[actorName]: Object.keys(movieCharacters)};
}

async function movieCharactersOfActorByName(actorName) {
    const actorId = await getActorId(actorName);
    const movieCharacters =  await movieCharactersOfActorById(actorId);

    return {[actorName]: movieCharacters};
}

async function getActorId(actorName) {
    const searchQuery = actorName.replace(/ /g, "+");
    const searchResponse = await axios.get(`https://api.themoviedb.org/3/search/person?api_key=${API_KEY}&query=${searchQuery}`);

    return searchResponse.data.results[0].id;
}

async function movieCharactersOfActorById(actorId) {
    const movieCreditsResponse = await axios.get(`https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=${API_KEY}`)
    const marvelMovieCredits = movieCreditsResponse.data.cast.filter(movieCredit => Object.values(movies).includes(movieCredit.id));
    const movieCharacters = marvelMovieCredits.reduce((acc, movieCredit) => ({...acc, [movieCredit.title]: movieCredit.character}), {});
    
    return movieCharacters;
}

const sayHey = (name) => {
    return `Hey ${name}`
}

module.exports = {
    sayHey
}
