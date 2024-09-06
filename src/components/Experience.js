import React from 'react';

const Experience = () => {
  const experiences = [
    {
      company: "Alfido Tech",
      role: "Web Developer Intern",
      duration: "July 2023 - Oct 2023",
      details: [
        "Developed RESTful APIs using Node.js, Express, and MongoDB.",
        "Collaborated with cross-functional teams to optimize application performance.",
        "Implemented modular design for seamless client-server interaction."
      ]
    },
    {
      company: "CodeHelp",
      role: "Full Stack Development Intern",
      duration: "Feb 2023 - July 2023",
      details: [
        "Built an Ed-Tech platform with React.js and MongoDB.",
        "Developed and deployed frontend components using React.js.",
        "Contributed to backend infrastructure using Node.js."
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-[#F4B400] mb-6">Experience</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-left">
            <h3 className="text-2xl font-semibold text-[#4285F4]">{exp.role} @ {exp.company}</h3>
            <p className="text-md text-gray-500">{exp.duration}</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              {exp.details.map((detail, i) => (
                <li key={i} className="before:content-['•'] before:text-[#DB4437] before:mr-2">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
