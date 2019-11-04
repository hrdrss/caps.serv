const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(express.static(__dirname + "/public"));



const port = 3000;

app.use("/irinaTest", express.static(__dirname + "/public/mainpage.html"))

app.use('/static', function(req, res) {
    Response.send("<h1>Галвная</h1>");

});

app.listen(port, () => {
    console.log('Server has ben started on http://localhost:' + port);

})