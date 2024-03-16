const { generateLearningMaterial } = require('../ai/ModelWrapper');
const Skill = require('../models/Skill');

exports.createLearningMaterial = async (skillName) => {
  try {
    const prompt = `Explain the basics of ${skillName} as if to a complete beginner.`;
    const material = await generateLearningMaterial(prompt);

    // Assuming a Skill model exists and has a field for learning material
    const skill = new Skill({
      name: skillName,
      description: material,
    });

    await skill.save();

    return skill;
  } catch (error) {
    console.error("Error creating learning material:", error);
    throw error;
  }
};
