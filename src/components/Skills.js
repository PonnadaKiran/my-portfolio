import React from 'react';

const Skills = () => {
  const skills = [
    "React.js", "Node.js", "JavaScript", "SQL", 
    "Tailwind CSS", "MongoDB", "AWS", "Git", 
    "Figma", "Vercel", "Python", "Java"
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white text-center">
      <h2 className="text-4xl font-bold text-[#0F9D58] mb-6">Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-lg">
            <span className="text-xl font-semibold text-[#DB4437]">{skill}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
