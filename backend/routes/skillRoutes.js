const express = require('express');
const {
  getSkills,
  addSkill,
  getSkill,
  updateSkill,
  deleteSkill
} = require('../controllers/SkillController');

const router = express.Router();

router.get('/', getSkills);
router.post('/', addSkill);
router.get('/:id', getSkill);
router.put('/:id', updateSkill);
router.delete('/:id', deleteSkill);

module.exports = router;
