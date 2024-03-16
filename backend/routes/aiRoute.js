const express = require('express');
const { getSkills, addSkill } = require('../controllers/aiController');
const router = express.Router();

router.get('/', getSkills);
router.post('/', addSkill);

module.exports = router;
