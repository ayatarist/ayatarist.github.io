/* eslint-disable react/no-unescaped-entities */
"use client";

import React from 'react';
import SrOnly from '@/components/SrOnly'; // <-- ADD THIS IMPORT

interface Project {
  title: string
  description: string
  tags: string[]
  link: string
  pressReleaseLink?: string
}

const projects: Project[] = [
  {
    title: 'Formula 1 Driver Rankings Predictor',
    description:
    'Using historical race data from 2009–2022, I engineered features like <strong>qualifying position, podium finishes, and team performance</strong>, then trained <strong>logistic regression</strong> and <strong>random forest models</strong> in Python to forecast end‑of‑season driver standings with <strong>85% accuracy</strong>. All analysis and visualizations live in an interactive Jupyter Notebook.',
    tags: ['Python', 'Machine Learning', 'Pandas', 'Jupyter'],
    link: 'https://github.com/ayatarist/Formula-1-Rankings'
  },
  {
    title: 'FlappyBison',
    description:
      'FlappyBison started as a class project to explore <strong>JavaFX</strong> and <strong>OOP design</strong>. Created through a <strong>modular architecture</strong> with separate classes for <strong>game logic, collision detection, and UI navigation</strong>, using JavaFX’s animation and event APIs to manage scene transitions (start, play, game‑over). <strong>Custom physics</strong> simulate the bird’s movement, and <strong>continuous generated obstacles</strong> keep gameplay challenging.',
    tags: ['Java', 'JavaFX', 'Game Dev'],
    link: 'https://github.com/ayatarist/FlappyBison'
  },
  {
    title: 'Power Generation Optimization',
    description:
      'I developed Python scripts and Jupyter notebooks using Gurobi to build <strong>linear and mixed‑integer programming models</strong> that schedule power plant output to minimize generation costs while meeting demand forecasts and CO₂ emission limits. I cleaned and processed historical load and emission data, <strong>formulated objective functions and constraints</strong>, and created visualizations to explore <strong>cost‑versus‑emissions trade‑offs</strong>, gaining hands‑on experience in energy economics and optimization techniques.',
    tags: ['Python', 'Gurobi', 'Linear Programming', 'MIP'],
    link: 'https://github.com/ayatarist/power_gen_optimization'
  },
  {
    title: 'Accessibility Design Plugin',
    description:
     'As part of Northeastern’s AccessHack, co-built a TypeScript Figma plugin that evaluates frames and components for <strong>accessibility issues</strong>—<strong>color contrast, missing alt text, and keyboard focus order</strong>—and highlights them directly in the design canvas. This tool helps designers catch <strong>WCAG compliance</strong> gaps early, making <strong>inclusive design</strong> easier from the start.',
    tags: ['TypeScript', 'Figma Plugin', 'Accessibility', 'WCAG'],
    link: 'https://github.com/ayatarist/AccessHackPlugIn'
  },
  {
    title: 'Digitizing Suzette (Fork)',
    description:
      'As a Digital Researcher, I contribute to the <strong>Digitizing Suzette Project</strong>, a digital humanities initiative analyzing 19th-century French domestic education. My work involves <strong> TEI/XML markup</strong> and <strong>analytical tagging</strong> of texts, identifying <strong>nuanced cultural references, culinary terminology, and domestic practices</strong>. This meticulous process is critical for building a structured resource that uncovers how widely distributed educational materials subtly reinforced or challenged <strong>gender roles and social expectations during the French Third Republic.</strong>',
    tags: ['TEI/XML', 'LEAF-Writer', 'Digital Humanities'],
    link: 'https://github.com/ayatarist/suzette',
    pressReleaseLink: 'https://www.chesapeakeconservancy.org/projects/pennsylvania-native-tree-selector'
  },
  {
    title: 'Pennsylvania Native Tree Selector',
    description:
      'As one of the lead developers on a cross‑functional team, and in partnership with the Chesapeake Conservancy to transform their Excel‑based species filter into an <strong>interactive React web app</strong>. Over <strong>eight agile sprints</strong>, we gathered stakeholder requirements, analyzed the legacy tool’s core features, compiled USDA tree and image datasets, and implemented geolocation‑driven recommendations. The result is a <strong>PWA</strong> that helps landowners and conservation planners intuitively select native Pennsylvania trees, making restoration decisions both <strong>data‑driven and user‑friendly</strong>.',
    tags: ['React', 'Tailwind CSS', 'Geolocation', 'PWA'],
    link: 'https://github.com/ayatarist/Pa-Tree-Selector-Tool',
    pressReleaseLink: 'https://www.chesapeakeconservancy.org/projects/pennsylvania-native-tree-selector'
  }
]

export default function ProjectsOverview() {
  return (
    <section
      id="projects"
      className="bg-white py-12 px-4 md:px-12"
      style={{
        fontFamily:
          "'Inter', 'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
      }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">

        {/* Left Column: Intro */}
        <div className="lg:pr-8">
          <h2 className="text-4xl font-bold text-orange-900 mb-6 leading-tight">
            Projects & Interests
          </h2>
          
          <p className="text-gray-700 text-base leading-relaxed mb-6 text-justify">
          At Oracle, I joined the AutoML research team and worked on an automated forecasting pipeline. One part that stuck with me was building out the explainability layer — finding ways to show users not just the output, but why the model made its predictions. That experience pushed me to think more deeply about how we communicate what’s under the hood, and how trust in a tool often comes down to how clearly it speaks.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-6 text-justify">
          Currently, I’m putting that into practice on a side project: Morocco—my home country—is one of the hosts of the 2030 World Cup, and I wanted a project that was more than “just another chatbot”—something that lets me use both my technical skills and my multilingual background to see how this tech works across Arabic, French, and English. So I’m building a prototype that helps visitors figure out routes and real local experiences in Casablanca. It runs on placeholder match data + local transit feeds, a vector store of FAQs/POIs, and an open‑source LLM wired up with RAG (via LangChain/LlamaIndex). Still learning & building, but hoping to share it soon!
          </p>
      </div>


        {/* Vertical Scroll Column */}
        <div className="lg:col-span-2">
          <div className="max-h-[800px] overflow-y-auto pr-4 space-y-8">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="relative border border-stone-300 bg-white rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              >
                {/* Accent line with brown‑stone → orange → yellow gradient */}
                <div
                  className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-stone-600 via-orange-500 to-yellow-400 opacity-90"
                />

                <h3 className="text-2xl font-bold text-amber-900 mb-2">
                  {project.title}
                </h3>
                {/* Use dangerouslySetInnerHTML to render HTML from the string */}
                <p className="text-stone-700 mb-3  text-sm text-justify" dangerouslySetInnerHTML={{ __html: project.description }}>
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs bg-amber-100 text-amber-800 rounded font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm font-medium text-orange-600 hover:text-amber-800 hover:underline flex items-center"
                >
                  View on GitHub →
                  <SrOnly>(opens in a new tab)</SrOnly> {/* <-- MODIFIED LINE */}
                </a>{"       "}
                {/* Conditionally show press‑release link */}
                {project.pressReleaseLink && (
                  <a
                    href={project.pressReleaseLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm font-medium text-orange-600 hover:text-amber-800 hover:underline"
                  >
                  {"       "} 
                  Learn More →
                  <SrOnly>(opens in a new tab)</SrOnly> {/* <-- MODIFIED LINE */}
                  </a>

                )}
                
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}