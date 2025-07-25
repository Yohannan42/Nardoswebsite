import React from 'react';

export default function About() {
  const stats = [
    { label: "Age", value: "23" },
    { label: "Height", value: "5'2\"" },
    { label: "Eye Color", value: "Dark Brown" },
    { label: "Hair Color", value: "Black" },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=1000" 
              alt="Nardos Berhane Ekubaezgi professional headshot" 
              className="rounded-lg shadow-lg w-full h-auto" 
            />
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-charcoal mb-6">About Me</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Nardos Berhane Ekubaezgi is a 23-year-old model from Addis Ababa, Ethiopia. She travels for shoots and has experience in TV and social media commercials, fitness modeling, and lifestyle campaigns.
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold text-charcoal mb-2">{stat.label}</h3>
                  <p className={(stat.label === "Age" || stat.label === "Height") ? "text-2xl font-bold text-gold" : "text-lg text-gray-600"}>
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 