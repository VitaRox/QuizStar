const express = require('express');
const app = express();

const port = 3200;

app.listen(port, () => console.log(`Server started on port ${port}`))
/*
app.get('/api/dish', cors(), (req, res) => {
    //const dishes =  getDish();
    //console.log('api.get dishes -',dishes);
    //res.json(dishes);
    var query = req.params.query;
    Dish
    .find({'request': query}, function(err, result)
        {if (err) throw err;
        if (result) {
            res.json(result)
        } else ( res.send(JSON.stringify({error: 'Error'})))})
    .select({id: 1, name: 1, description: 1});  //chose which fields you want
})
*/