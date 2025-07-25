import React from 'react';

export default function WorkExperience() {
  const experiences = [
    {
      company: "Addis Fashion Week",
      role: "Runway Model",
      description: "Featured in multiple designer showcases during Ethiopia's premier fashion event",
      date: "2024"
    },
    {
      company: "Ethiopian Airlines",
      role: "Commercial Model",
      description: "Featured in international advertising campaign for Ethiopia's flagship airline",
      date: "2023"
    },
    {
      company: "Coca-Cola East Africa",
      role: "Brand Ambassador",
      description: "Represented brand in TV commercials and social media campaigns across East Africa",
      date: "2023"
    },
    {
      company: "Nike Africa",
      role: "Fitness Model",
      description: "Featured in athletic wear campaigns and fitness lifestyle content",
      date: "2022"
    },
    {
      company: "L'Oréal Paris",
      role: "Beauty Model",
      description: "Skincare and cosmetics campaign for African market launch",
      date: "2022"
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-4">Work Experience</h2>
          <p className="text-lg text-gray-600">My professional modeling journey</p>
        </div>
        <div className="space-y-8">
          {experiences.map((experience, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 border-l-4 border-gold">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-charcoal mb-2">{experience.company}</h3>
                  <p className="text-lg text-gray-600 mb-2">{experience.role}</p>
                  <p className="text-gray-500">{experience.description}</p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <span className="inline-block bg-gold/10 text-gold px-3 py-1 rounded-full text-sm font-medium">
                    {experience.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 