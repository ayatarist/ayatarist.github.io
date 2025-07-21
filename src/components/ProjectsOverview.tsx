"use client";

import React from 'react';

interface Project {
  title: string
  description: string
  tags: string[]
  link: string
  pressReleaseLink?: string
}

const projects: Project[] = [
  {
    title: 'Formula 1 Driver Rankings Predictor',
    description:
    'Using historical race data from 2009–2022, I engineered features like qualifying position, podium finishes, and team performance, then trained logistic regression and random forest models in Python to forecast end‑of‑season driver standings with 85% accuracy. All analysis and visualizations live in an interactive Jupyter Notebook.',
    tags: ['Python', 'Machine Learning', 'Pandas', 'Jupyter'],
    link: 'https://github.com/ayatarist/Formula-1-Rankings'
  },
  {
    title: 'Accessibility Design Plugin',
    description:
     'As part of Northeastern’s AccessHack, co-built a TypeScript Figma plugin that evaluates frames and components for accessibility issues—color contrast, missing alt text, and keyboard focus order—and highlights them directly in the design canvas. This tool helps designers catch WCAG compliance gaps early, making inclusive design easier from the start.',
    tags: ['TypeScript', 'Figma Plugin', 'Accessibility', 'WCAG'],
    link: 'https://github.com/ayatarist/AccessHackPlugIn'
  },
  {
    title: 'FlappyBison',
    description:
      'FlappyBison started as a class project to explore JavaFX and OOP design. Created through a modular architecture with separate classes for game logic, collision detection, and UI navigation, using JavaFX’s animation and event APIs to manage scene transitions (start, play, game‑over). Custom physics simulate the bird’s movement, and procedurally generated obstacles keep gameplay challenging.',
    tags: ['Java', 'JavaFX', 'Game Dev'],
    link: 'https://github.com/ayatarist/FlappyBison'
  },
  {
    title: 'Power Generation Optimization',
    description:
      'I developed Python scripts and Jupyter notebooks using Gurobi to build linear and mixed‑integer programming models that schedule power plant output to minimize generation costs while meeting demand forecasts and CO₂ emission limits. I cleaned and processed historical load and emission data, formulated objective functions and constraints, and created visualizations to explore cost‑versus‑emissions trade‑offs, gaining hands‑on experience in energy economics and optimization techniques.',
    tags: ['Python', 'Gurobi', 'Linear Programming', 'MIP'],
    link: 'https://github.com/ayatarist/power_gen_optimization'
  },
  {
    title: 'Digitizing Suzette (Fork)',
    description:
      'In this ongoing Bucknell University collaboration (Jan 2024 – Present), I help convert and enrich 19th‑century French domestic‑education texts into TEI/XML. Featuring narrative, illustrations, questions, and curricular metadata across 144 chapters, it reveals how this widely distributed text blends progressive intellectual aims with conservative social instruction in moral education, natural sciences, industry, and domestic economy.',
    tags: ['TEI/XML', 'LEAF-Writer', 'Digital Humanities'],
    link: 'https://github.com/ayatarist/suzette',
    pressReleaseLink: 'https://www.chesapeakeconservancy.org/projects/pennsylvania-native-tree-selector'}
  ,
  {
    title: 'Pennsylvania Native Tree Selector',
    description:
      'As one of the lead developers on a cross‑functional team, and in partnership with the Chesapeake Conservancy to transform their Excel‑based species filter into an interactive React web app. Over four agile sprints, we gathered stakeholder requirements, analyzed the legacy tool’s core features, compiled USDA tree and image datasets, and implemented geolocation‑driven recommendations. The result is a PWA that helps landowners and conservation planners intuitively select native Pennsylvania trees, making restoration decisions both data‑driven and user‑friendly.',
    tags: ['React', 'Tailwind CSS', 'Geolocation', 'PWA'],
    link: 'https://github.com/ayatarist/Pa-Tree-Selector-Tool',
    pressReleaseLink: 'https://www.chesapeakeconservancy.org/projects/pennsylvania-native-tree-selector'}
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
          <p className="text-gray-700 text-base leading-relaxed mb-6">
          I've always enjoyed building things that are both functional and thoughtful — whether it's an interface that feels intuitive or a system that surfaces meaningful insights. Over time, I've picked up experience across the stack, from frontend design decisions to backend logic and data handling.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
          At Oracle, I joined the AutoML research team and worked on an automated forecasting pipeline. One part that stuck with me was building out the explainability layer — finding ways to show users not just the output, but why the model made its predictions. That experience pushed me to think more deeply about how we communicate what’s under the hood, and how trust in a tool often comes down to how clearly it speaks.
          </p>
          <p className="text-gray-700 text-base leading-relaxed mb-6">
          Right now, I’m working on something new for the upcoming World Cup in Morocco. A tool to help visitors navigate games and experiences by connecting real-time insights with past trends. It’s a side project that’s helping me get more comfortable with LLMs, embeddings, and RAG! Still learning & building, but hoping to share it soon!
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
                <p className="text-stone-700 mb-3 text-sm">
                  {project.description}
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
