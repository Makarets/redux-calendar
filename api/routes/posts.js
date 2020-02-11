const router = require('express').Router();
const verify = require('./verifyToken');

router.get('/', verify, (req,res) => {
	res.json({
		posts: {
			title: 'My first post', 
			description: 'awdawdgrgdg wdwadwadwad fefefsefs'
		}
	});
});

module.exports = router;