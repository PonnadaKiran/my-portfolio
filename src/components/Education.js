import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Acharya Nagarjuna University",
      duration: "Dec 2021 — June 2023",
      grade: "CGPA: 7.87"
    },
    {
      degree: "Bachelor of Science in Mathematics (B.Sc)",
      institution: "Dr.B.R.Ambedkar University",
      duration: "June 2018 — Aug 2021",
      grade: "CGPA: 8.55"
    },
    {
      degree: "XII (Mathematics, Physics, Chemistry)",
      institution: "Samskara Bharathi Junior College",
      duration: "June 2016 — Mar 2018",
      grade: "Percentage: 91.3%"
    },
    {
      degree: "X (Secondary School Certificate)",
      institution: "Maharshi Vidya Niketan",
      duration: "June 2015 — Apr 2016",
      grade: "CGPA: 9.0"
    }
  ];

  return (
    <section id="education" className="py-20 px-4 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold text-[#4285F4] mb-8">Education</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {educationData.map((edu, index) => (
          <div key={index} className="bg-white p-6 shadow-lg rounded-lg">
            <h3 className="text-2xl font-semibold text-[#0F9D58] mb-2">{edu.degree}</h3>
            <p className="text-md text-gray-500 mb-1">{edu.institution}</p>
            <p className="text-md text-gray-500 mb-1">{edu.duration}</p>
            <p className="text-md font-semibold text-[#DB4437]">{edu.grade}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
