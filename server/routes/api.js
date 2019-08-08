const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

const User = require('../models/users');


function verifyToken(req, res, next) {
	if (!req.headers.authorization) {
		return res.status(401).send('Unauthorized request');
	}
	let token = req.headers.authorization.split(' ')[1]
	if (token === null) {
		return res.status(401).send('Unauthorized request');
	}
	let payload = jwt.verify(token, 'secretKey');
	if (!payload) {
		return res.status(401).send('Unauthorized request');
	}

	req.userId = payload.subject
	next();
}
router.get('/', (req, res)=> {
	res.send("From API Route");
});

router.post('/register', (req, res)=> {
	let userData = req.body;
	let user = new User(userData);

	user.save((err, newUser)=> {
		if (err) {
			res.status(500).send("Error in registration");
		} else {
			let payload = { subject: newUser._id }
			let token = jwt.sign(payload, 'secretKey');
			res.status(200).send({token});			
		}
	})
})

router.post('/login', (req, res)=> {
	let userData = req.body;
	
	User.findOne({ email: userData.email }, (err, user)=> {
		if (err) {
			res.status(500).send("Error in login");
		} else {
			if (!user) {
				res.status(401).send("Invalid email");				
			} else if (user.password !== userData.password) {
				res.status(401).send("Invalid password");								
			} else {
				let payload = { subject: user._id }
				let token = jwt.sign(payload, 'secretKey');
				res.status(200).send({token});								
			}		
		}
	})
})


router.get('/events', (req, res)=> {
	let events = [
		{
			"_id": 1,
			"name": "Auto Expo",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": 2,
			"name": "Auto Expo",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": 3,
			"name": "Auto Expo",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": 4,
			"name": "Auto Expo",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": 5,
			"name": "Auto Expo",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": 6,
			"name": "Auto Expo",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": 7,
			"name": "Auto Expo",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		}
	]
	res.json(events);
})

router.get('/special', verifyToken, (req, res)=> {
	console.log('userId',req.userId);
	let events = [
		{
			"_id": 1,
			"name": "Auto Expo",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": 2,
			"name": "Auto Expo",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": 3,
			"name": "Auto Expo",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": 4,
			"name": "Auto Expo",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": 5,
			"name": "Auto Expo",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": 6,
			"name": "Auto Expo",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		},
		{
			"_id": 7,
			"name": "Auto Expo",
			"description": "lorem ipsum",
			"date": "2012-04-23T18:25:43.511Z"
		}
	]
	res.json(events);
})


module.exports = router;