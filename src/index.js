const axios = require('axios').default;
const express = require('express');

const port = Number(process.env.PORT) || 3000;
const app = express();
app.listen(port, () => console.log(`App listening on http://localhost:${port}`));

app.get("/", (req, res) => res.send(sayHey("Marvel enthusiast")))

const sayHey = (name) => {
    return `Hey ${name}`
}

module.exports = {
    sayHey
}
