/* eslint-disable react/no-unescaped-entities */
// src/components/InterestsResearch.tsx
import React from 'react';

const researchAreas = [
  {
    title: 'Digital Accessibility & WCAG Compliance',
    description: 'Researching innovative approaches to web accessibility, conducting compliance evaluations, and developing tools that bridge the gap between designers and developers.',
    icon: '♿',
    color: 'from-blue-500 to-cyan-500',
    keywords: ['WCAG Standards', 'Screen Readers', 'Inclusive Design', 'Accessibility Auditing']
  },
  {
    title: 'Machine Learning & Time-Series Forecasting',
    description: 'Exploring AutoML applications in predictive analytics, with focus on time-series data processing and custom model integration for enterprise solutions.',
    icon: '🤖',
    color: 'from-purple-500 to-pink-500',
    keywords: ['AutoML', 'Forecasting Models', 'Data Processing', 'Predictive Analytics']
  },
  {
    title: 'Cross-Cultural Technology Solutions',
    description: 'Passionate about creating technology that serves diverse communities, informed by my multilingual background and international experiences.',
    icon: '🌍',
    color: 'from-green-500 to-teal-500',
    keywords: ['Multilingual UX', 'Cultural Accessibility', 'Global Tech', 'Inclusive Development']
  }
];

const personalInterests = [
  {
    title: 'Leadership & Community Building',
    description: 'Founded MENA Student Association, led Engineering Student Board, and mentored fellow students in technical and leadership skills.',
    icon: '👥',
    color: 'from-orange-500 to-red-500',
    achievements: ['SWE Class Representative', 'MENA Association Founder', 'Engineering Week Leader']
  },
  {
    title: 'Education & Knowledge Sharing',
    description: 'French Teaching Assistant and accessibility workshop facilitator, passionate about making complex concepts accessible to diverse learners.',
    icon: '📚',
    color: 'from-indigo-500 to-purple-500',
    achievements: ['French TA', 'Accessibility Workshops', 'Grace Hopper Scholar']
  },
  {
    title: 'Innovation & Problem Solving',
    description: 'Constantly seeking new challenges, from hackathons to research grants, always looking for creative solutions to real-world problems.',
    icon: '💡',
    color: 'from-yellow-500 to-orange-500',
    achievements: ['Mozilla Research Grant', 'Hackathon Winner', 'Multiple Scholarships']
  }
];

export default function InterestsResearch() {
  return (
    <section id="interests" className="relative py-24 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-200/20 to-pink-200/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-r from-green-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent mb-6">
            Research & Interests
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Beyond coding lies a world of research, community building, and continuous learning — exploring the intersection of technology, accessibility, and human connection
          </p>
          
          {/* Decorative underline */}
          <div className="flex justify-center mt-8">
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full" />
          </div>
        </div>

        {/* Research Areas */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">Research Focus Areas</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
              >
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${area.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${area.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {area.icon}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4 text-gray-800">{area.title}</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">{area.description}</p>
                  
                  {/* Keywords */}
                  <div className="flex flex-wrap gap-2">
                    {area.keywords.map((keyword, keyIndex) => (
                      <span
                        key={keyIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Interests */}
        <div>
          <h3 className="text-4xl font-bold text-center mb-12 text-gray-800">Personal Interests & Leadership</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {personalInterests.map((interest, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
              >
                {/* Animated background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-r ${interest.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {interest.icon}
                </div>
                
                {/* Content */}
                <div className="relative z-10">
                  <h4 className="text-xl font-bold mb-4 text-gray-800">{interest.title}</h4>
                  <p className="text-gray-600 leading-relaxed mb-6">{interest.description}</p>
                  
                  {/* Achievements */}
                  <div className="space-y-2">
                    {interest.achievements.map((achievement, achIndex) => (
                      <div key={achIndex} className="flex items-center space-x-2">
                        <div className={`w-2 h-2 bg-gradient-to-r ${interest.color} rounded-full`} />
                        <span className="text-sm text-gray-700 font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Languages & Skills */}
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 inline-block">
            <h4 className="text-2xl font-bold mb-4 text-gray-800">Languages & Global Perspective</h4>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                  EN
                </div>
                <span className="text-sm text-gray-600">English</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                  FR
                </div>
                <span className="text-sm text-gray-600">French</span>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-lg mb-2">
                  AR
                </div>
                <span className="text-sm text-gray-600">Arabic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}