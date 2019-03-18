const router = require("express").Router();
// const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");
// const logController = require ("../../controller/logController")

router.post("/", authMiddleware.isLoggedIn, function(req, res, next) {
    req.body.bc = req.body.bc === "true";
    req.body.hungover = req.body.hungover === "true";
    console.log(req.body)
    db.Log.create(req.body)
	.then(dbLog => res.json(dbLog))
	.catch(err => res.status(422).json(err));
});


// router.get ("/:id",authMiddleware.loggedIn, function(req,res,next) {
//     db.Log.find({ _userId: req.params.id })
//         .then(dbLog => res.json(dbLog))
//         .catch(err => res.status(422).json(err));
// });





// router.get("/", function(req, res) {
//     db.log.findAll(function(err, logs){
//         if(err) {
//             console.log(err);
//         } else {
//             res.json(logs);
//         }
//     });
// });

// router.get('/:id', function(req, res) {
// let id = req.params.id;
// db.Log.findById(id, function(err, log) {
//     res.json(log);
//     });
// });

// router.post("/add", function(req, res){
//     let log = new Log(req.body);
//     db.Log.save()
//     .then(log =>{
//         res.status(200).json({'log': 'log added successfully'});
//     })
//     .catch(err => {
//         res.status(400).send('adding new log failed');
//     });
// });

// router.post('/update/:id', function(req, res) {
//     db.Log.findById(req.params.id, function(err, log) {
//         if(!log)
//         res.status(404).send("data is not found");
//         else
//         log.log_temp = req.body.log_temp;
//         log.log_weight = req.body.log_weight;
//         log.log_sleep = req.body.log_sleep;
//         log.log_spotting = req.body.log_spotting;
//         log.log_hungover = req.body.log_hungover;
//         log.log_bc = req.body.log_bc;
//         log.log_symptoms = req.body.log_symptoms;

//         log.save().then(log => {
//             res.json('Log updated!');
//         })
//         .catch(err => {
//             res.status(400).send("Update not possible");
//         });

        
//     });
// });

// module.exports = router;
router.get("/", function(req, res) {
    db.Log.find(function(err, logs){
        if(err) {
            console.log(err);
        } else {
            res.json(logs);
        }
    });
});

router.get('/:id', function(req, res) {
let id = req.params.id;
db.Log.find({_userId:id}, function(err, log) {
    res.json(log);
    });
});

router.post("/add", function(req, res){
    
    let log = new db.Log(req.body);
    log.save()
    .then(log =>{
        res.status(200).json({'log': 'log added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new log failed');
    });
    console.log(req.body);
});

router.post('/update/:id', function(req, res) {
    db.Log.findById(req.params.id, function(err, log) {
        if(!log) {
        res.status(404).send("data is not found");
         } else{
        log.temp = req.body.temp;
        log.weight = req.body.weight;
        log.sleep = req.body.sleep;
        log.spotting = req.body.spotting;
        log.hungover = req.body.hungover;
        log.bc = req.body.bc;
        log.symptoms = req.body.symptoms;
         }

        log.save().then(log => {
            res.json('Log updated!');
        })
        .catch(err => {
            res.status(400).send("Update not possible");
        });

        
    });
});




module.exports = router;
