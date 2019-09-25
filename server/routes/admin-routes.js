const express = require('express');
const router = express.Router();

const profession_ctrl = require('../controllers/profession_ctrl');

router.get('/get_professions', profession_ctrl.getProfessions);
router.post('/create_profession', profession_ctrl.createProfession);
router.post('/del_profession', profession_ctrl.delProfession);
router.post('/update_prof', profession_ctrl.updateProf);


module.exports = router;

