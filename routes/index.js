var express = require('express');
var router = express.Router();
var multer = require('multer'); 
var upload = multer({ dest: 'uploads/' });

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', upload.single('thumbnail'), function(req, res, next) {
	// console.log(req);
	console.log(req.file);
	console.log(req.files);
	res.json({success: true});
	// var serverPath = '/images/' + req.files.userPhoto.name;
});

module.exports = router;
