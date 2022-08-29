# Vi Coding Assignment

A web server that answers questions regarding Marvel movies and actors.

## Tools

- Jest for testing
- Express as a web framework
- Axios for outgoing http requests

## Getting Started

### Install dependencies

Before starting to code, don't forget to install all dependencies.

```shell
yarn
```

### Running tests

Run all tests once:

```shell
npm test
```

### How to use

In order to start the server:

```shell
npm start
```

- The server will listen by default to port 3000, but you can provide a custom port by modifiying the `process.env.PORT` variable.

Once the server is up and running, you can ask it some questions by using the following enpoints:

1. **[GET] /moviesPerActor**

- Which Marvel movies did each actor play in?
- Response in the form: `{ actorName: [movie names]}`

2. **[GET] /actorsWithMultipleCharacters**

- Actors who played more than one Marvel character?
- Response in the form: `{ actorName: { movieName: characterName }}`
