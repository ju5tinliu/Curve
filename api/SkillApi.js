export const fetchSkills = async () => {
    // Placeholder for fetching skills from the backend
    const response = await fetch('http://yourbackend.com/api/skills');
    const skills = await response.json();
    return skills;
  };
  
  export const addSkill = async (skillName) => {
    // Placeholder for adding a new skill to the backend
    const response = await fetch('http://yourbackend.com/api/skills', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: skillName }),
    });
    const newSkill = await response.json();
    return newSkill;
  };
  