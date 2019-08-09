const express = require('express');
const router = express.Router();

const profession_ctrl = require('../controllers/profession_ctrl');

router.get('/get_professions', profession_ctrl.getProfessions);
router.post('/create_profession', profession_ctrl.createProfession);


module.exports = router;

