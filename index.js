var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');


//define port
var port = (process.env.PORT || 7171);


//POST bodyParsers
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//api routes
var router = express.Router();


//middleware to use for all requests
router.use(function(req, res, next) {
    console.log('Receiving Call..');
    next(); // continue
});



router.get('/', function(req, res) {
    res.json({ message: 'API Home' });
});

router.post('/movies', function(req, res){
    console.log("saving movie");
    console.log(req.body);
    res.json({message: 'Saving movie'});
    });

router.delete('/movies/:movieId', function(req, res){
   console.log("deleting movie");
   res.json({message: 'Deleting movie'});
});

router.put('/movies/:movieId', function(req, res){
   console.log("updating movie");
   console.log(req.body);
   console.log(req.params.movieId);
   res.json({message: 'Updating movie'});
});

router.get('/movies', function(req, res){
   console.log("getting movies");
   res.status(401);
   res.json({message: 'Getting movies'});
});

//public folder
app.use(express.static(__dirname + '/public'));
app.use('/api', router);

// start server
app.listen(port);
console.log('Server Running on port ' + port);
