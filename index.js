const express = require('express');
const app = express();
const expressip = require('express-ip');

app.use(expressip().getIpInfoMiddleware);

app.get("/api/whoami", (req, res) => {

    ipaddress = req.ipInfo.ip;
    software = req.headers["user-agent"];
    language = req.headers["accept-language"];

    res.send({
        "ipaddress": ipaddress,
        "language": language,
        "software": software
    })
})

app.listen(3000, () => {
    console.log("Request Header Parser Microservice is ready.");
});