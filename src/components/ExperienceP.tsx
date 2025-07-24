/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { MapPin, Briefcase, Users, GraduationCap } from 'lucide-react'

interface TimelineEntry {
  id: string
  date?: string
  dateRange?: string
  title?: string
  description: string
  achievements: string[]
  skills: string[]
  organization?: string
  location?: string
  logo?: string
  logoPosition?: string
  logoScale?: number
  isOngoing?: boolean
}

const timelineData: Record<'professional' | 'education' | 'leadership', TimelineEntry[]> = {
  professional: [
    {
      id: 'oracle-2024',
      date: '2024',
      dateRange: 'Summer 2024',
      title: 'Machine Learning Engineering Intern',
      description:
        'Interned on the Automated Machine Learning team at Oracle Labs.',
      achievements: [
        'Extended data model support to Pandas Series with preserved labeling during conversions',
        'Integrated custom forecasting models while maintaining explainability functionality',
        'Resolved client-reported forecasting anomalies through comprehensive analysis',
      ],
      skills: ['Python', 'TensorFlow', 'Pandas','Jupyter', 'SQL', 'Time Series Analysis', 'Machine Learning','Jenkins','Atlassian', 'Forecasting Models'],
      logo: '/img/oracle.webp',
      logoPosition: 'center',
      logoScale: 1,
    },
    {
      id: 'pa-tree-2024',
      date: '2024-2025',
      title: 'Full-Stack Developer',
      description:
        'Built an interactive web application to help users discover and locate trees across Pennsylvania parks.',
      achievements: [
        'Converted Excel datasets into dynamic, searchable interfaces',
        'Implemented geolocation-aware filtering and mapping features',
        'Designed responsive PWA with offline capabilities',
      ],
      skills: ['React', 'Tailwind CSS', 'PWA', 'Geolocation API', 'Data Visualization', 'JavaScript'],
      logo: 'img/peak.webp',
      logoPosition: 'center',
      logoScale: 1,
    },
    {
      id: 'mozilla-2023',
      date: 'Summer 2023',
      title: 'Accessibility Consultant & Research Fellow',
      description:
        'Conducted a mixed‑methods study to assess and improve digital accessibility among rural PA businesses.',
      achievements: [
        'Audited 15+ educational websites for WCAG 2.1 compliance, boosting adherence by 65%',
        'Led semi‑structured interviews with digital accessibility specialists and rural business owners to surface practical barriers',
        'Synthesized qualitative data in Dedoose to identify recurring compliance gaps and user pain points',
        'Reviewed ADA Accessibility Standards and emerging legislation to inform audit criteria',
        'Delivered tailored advisory sessions, translating technical findings into clear, actionable recommendations for business owners'
      ],
      skills: [
        'WCAG 2.1', 'ARIA', 'Qualitative Research', 'Dedoose', 'ADA Standards', 'Accessibility Advising'
      ],
      logo: '/img/true.png',
      logoPosition: 'center bottom',
      logoScale: 2.1,
    },
    {
      id: 'renault-2022',
      date: '2022',
      dateRange: 'Summer 2022',
      title: 'Software Engineering Intern',
      description:
        'Gained hands-on exposure to enterprise mobile application backend infrastructure and deployment pipeline development.',
      achievements: [
        'Mastered Agile, Lean IT, and Scrum methodologies through direct observation of enterprise development teams',
        'Developed foundational expertise in cloud infrastructure and Java application architecture',
        'Gained comprehensive understanding of DevOps practices and deployment pipeline optimization',
      ],
      skills: ['Java', 'Spring Boot', 'Docker', 'Kubernetes', 'CI/CD', 'Agile', 'Git'],
      logo: '/img/renault.png',
      logoPosition: 'center',
      logoScale: 1.2,
    },
  ],
  education: [
    {
      id: 'bucknell-education',
      date: '2021-2025',
      title: "B.S. Computer Science & Engineering with Business Analytics Minor",
      organization: 'Bucknell University',
      location: 'Lewisburg, PA',
      description: '',
      achievements: [
        'Data Structures & Algorithms - Advanced algorithmic problem solving and complexity analysis',
        'Computer Systems - Low-level programming, memory management, and system architecture',
        'Machine Learning for Business - Predictive modeling and data-driven decision making',
        'Computer Networks & Security - Network protocols, cybersecurity principles, and secure communication',
        'Software Engineering & Design - Full-stack development methodologies and design patterns',
        'Operating Systems Design - Process management, concurrency, and system resource optimization',
        'Algorithm Design & Analysis - Advanced algorithms, optimization techniques, and computational theory',
        'Programming Language Design - Compiler theory, language implementation, and parsing techniques',
        'Spreadsheet Modeling - Advanced Excel modeling and financial analysis techniques',
        'Prescriptive Analytics - Optimization models and decision support systems',
        'Predictive Analytics: Forecasting & Simulation - Time series analysis and predictive modeling',
        'Statistics and Engineering - Statistical methods and probability theory for engineering applications',
      ],
      skills: [],
      logo: '/img/bucknell.png',
      logoPosition: 'center',
      logoScale: 1,
    },
    {
      id: 'ala-education',
      date: '2019-2021',
      title: 'Cambridge A-Levels',
      organization: 'African Leadership Academy',
      location: 'Johannesburg, South Africa',
      description:
        'Specialized in Entrepreneurship and African Studies with focus on innovation and leadership development.',
      achievements: [],
      skills: [],
      logo: '/img/alalogo.png',
      logoPosition: 'center',
      logoScale: 1,
    },
  ],
  leadership: [
    {
      id: 'awards-leadership',
      description: '',
      achievements: [
        'Bucknell Boulder Mozilla Tech Fellow — Selected for Mozilla Foundation\'s Responsible Computing Challenge',
        '    • Researched digital accessibility under Professor Ross to evaluate rural businesses\' WCAG compliance and develop actionable recommendations',
        'Digital Humanities Researcher — Bucknell University',
        'French Teaching Assistant — Bucknell University',
        'Leadership Intern — College of Engineering',
        '    • Led cross-departmental student initiatives and facilitated communication between engineering students and faculty leadership',
        'Class Representative — Society of Women Engineers',
        'Founder & President — Middle Eastern North African Student Association',
        'Michael M. & Lillian Amber Fremont Scholar',
        'Grace Hopper Advancing Inclusion Scholar \'24',
        'Society of Women Engineers Scholar \'24',
        'Dean\'s List \'22, \'23, \'24'
      ],
      skills: [],
    },
  ],
}


const sectionConfig = {
  professional: {
    title: 'Experience',
    icon: Briefcase,
    color: 'text-orange-700',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    accent: 'bg-orange-400',
    hoverBg: 'hover:bg-orange-25',
  },
  education: {
    title: 'Education',
    icon: GraduationCap,
    color: 'text-orange-700',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    accent: 'bg-orange-400',
    hoverBg: 'hover:bg-orange-25',
  },
  leadership: {
    title: 'Awards & Leadership',
    icon: Users,
    color: 'text-orange-700',
    bg: 'bg-orange-50',
    border: 'border-orange-100',
    accent: 'bg-orange-400',
    hoverBg: 'hover:bg-orange-25',
  },
}
type SectionKey = keyof typeof timelineData

const Tabs: React.FC<{ active: SectionKey; setActive: Dispatch<SetStateAction<SectionKey>> }> = ({ active, setActive }) => (
  <div className="flex flex-wrap gap-3 mb-6 p-2 bg-white/70 backdrop-blur-sm rounded-2xl border border-orange-100">
    {(Object.keys(sectionConfig) as SectionKey[]).map((key) => {
      const cfg = sectionConfig[key]
      const isActive = key === active
      return (
        <button
          key={key}
          onClick={() => setActive(key)}
          className={`px-4 py-2 rounded-xl font-bold transition-all duration-300 text-sm ${
            isActive ? 'bg-orange-100 text-orange-800 shadow-sm' : 'text-gray-600 hover:text-orange-700 hover:bg-orange-50'
          }`}
        >
          {cfg.title}
        </button>
      )
    })}
  </div>
)

interface TimelineCardProps {
  entry: TimelineEntry
  index: number
  active: SectionKey
}

const TimelineCard: React.FC<TimelineCardProps> = ({ entry, index, active }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 150)
    return () => clearTimeout(timer)
  }, [index, active])

  const { border } = sectionConfig[active]

  // Check if we should show Key Technologies section
  const showKeyTechnologies = active === 'professional' && entry.skills.length > 0

  // Check if we should show achievements section
  const showAchievements = entry.achievements.length > 0

  // For leadership section, show achievements directly without expand/collapse
  const showAchievementsDirectly = active === 'leadership'

  return (
    <div
      className={`transform transition-all duration-700 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      <div
        className={`bg-white/90 backdrop-blur-sm border ${border} rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-orange-200`}
      >
        <div className="flex items-start gap-6 mb-6">
          {entry.logo && (
            <div className="flex-shrink-0">
              <div className="w-27 h-15 rounded-full overflow-hidden bg-white shadow-sm border border-gray-100 flex items-center justify-center">
                <img
                  src={entry.logo}
                  alt={`${entry.organization} logo`}
                  className="max-w-full max-h-full object-contain"
                  style={{
                    transform: `scale(${entry.logoScale ?? 1})`,
                    ...(entry.logo.includes('mozilla') && {
                      objectPosition: 'center bottom',
                      padding: '2px'})
                  }}
                />
              </div>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h2 className="font-bold text-xl text-gray-900 mb-5 leading-tight">
                  {entry.title}
                </h2>
                {entry.organization && (
                  <p className="font-bold text-lg text-orange-700 mb-1">
                    {entry.organization}
                  </p>
                )}
                {entry.location && (
                  <p className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-3 h-3 mr-1" /> {entry.location}
                  </p>
                )}
              </div>
              <div className="text-orange-600 text-sm font-bold bg-orange-50 px-3 py-2 rounded-lg whitespace-nowrap">
                {entry.dateRange || entry.date}
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-700 mb-6 leading-relaxed">{entry.description}</p>
        
        {showKeyTechnologies && (
          <div className="mb-6">
            <h4 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wide">
              Key Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {entry.skills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 text-orange-800 rounded-full text-sm font-semibold border border-orange-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
        
        {/* Show achievements directly for awards in leadership section */}
        {showAchievementsDirectly && showAchievements && (
          <div className="bg-orange-25 rounded-xl p-4 border border-orange-100">
            <ul className="space-y-3">
              {entry.achievements.map((achievement, i) => {
                const isIndented = achievement.startsWith('    •');
                const hasOrganization = achievement.includes(' — ') && !isIndented;
                
                if (isIndented) {
                  return (
                    <li key={i} className="text-gray-600 text-sm flex items-start gap-3 ml-4">
                      <span className="italic">{achievement.replace('    • ', '')}</span>
                    </li>
                  );
                }
                
                if (hasOrganization) {
                  const [position, organization] = achievement.split(' — ');
                  return (
                    <li key={i} className="text-gray-700 text-sm flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>
                        <span className="font-semibold">{position}</span>
                        <span className="text-orange-700"> — {organization}</span>
                      </span>
                    </li>
                  );
                }
                
                
                return (
                  <li key={i} className="text-gray-700 text-sm flex items-start gap-3">
                    <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="font-medium">{achievement}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        
        {/* Show expandable achievements for other entries */}
        {showAchievements && !showAchievementsDirectly && (
          <div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-orange-700 hover:text-orange-800 font-bold mb-4 transition-colors flex items-center gap-2"
            >
              {active === 'education' ? 'Relevant Courses' : 'Key Achievements'}
              <span className={`transform transition-transform duration-200 ${isExpanded ? 'rotate-45' : ''}`}>
                +
              </span>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                isExpanded ? 'max-h-none opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="bg-orange-25 rounded-xl p-4 border border-orange-100">
                <ul className="space-y-3">
                  {entry.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-700 text-sm flex items-start gap-3">
                      <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


export default function ProfessionalTimeline() {
  const [active, setActive] = useState<SectionKey>('professional')
  const entries = timelineData[active]
  const sortedEntries = [...entries].sort((a, b) => parseInt(b.date || '0') - parseInt(a.date || '0'))

  return (
    <section id="experience" className="relative w-full bg-white py-24 px-4 sm:px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <Tabs active={active} setActive={setActive} />
        <div className={`grid gap-8 ${active === 'leadership' ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2'}`}>
          {sortedEntries.map((entry, idx) => (
            <TimelineCard key={entry.id} entry={entry} index={idx} active={active} />
          ))}
        </div>
      </div>
    </section>
  )
}