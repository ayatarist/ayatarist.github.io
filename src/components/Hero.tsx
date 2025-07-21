'use client'
import React, { useState, useEffect } from 'react'

interface TypewriterTextProps {
  text: string
  speed?: number
  delay?: number
  className?: string
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  speed = 200,
  delay = 0,
  className = '',
}) => {
  const [displayText, setDisplayText] = useState<string>('')
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [isComplete, setIsComplete] = useState<boolean>(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      } else {
        setIsComplete(true)
      }
    }, currentIndex === 0 ? delay : speed)
    return () => clearTimeout(timer)
  }, [currentIndex, text, speed, delay])

  const lines = displayText.split('\n')
  return (
    <span className={`relative ${className}`}>
      {lines.map((line, idx) => (
        <React.Fragment key={idx}>
          {line}
          {idx < lines.length - 1 && <br />}
        </React.Fragment>
      ))}
      {!isComplete && <span className="animate-pulse text-orange-600 ml-1">|</span>}
    </span>
  )
}

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-[float_25s_ease-in-out_infinite_5s]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-[float_30s_ease-in-out_infinite_10s]" />
      </div>

      <div className="relative z-20 flex flex-col lg:flex-row h-full min-h-screen">
        <div className="w-full lg:w-2/5 h-full lg:h-full relative order-6 lg:order-1">
          {/* Black background layer behind your image - with padding to show the black */}
          <div className="absolute inset-0 bg-amber-900 opacity-80 lg:rounded-br-[1000px]" />
          
          <img
            src="/img/pic.jpg"
            alt="Aya Tarist"
            className="relative w-full h-full object-cover lg:rounded-br-[1000px] transform scale-100 hover:scale-130 transition-transform duration-200 m-7"
            style={{ objectPosition: '60% 90%' }}
          />
          <div className="absolute top-4 right-4 w-12 h-12 bg-orange-300/30 rounded-full backdrop-blur-sm animate-[float_4s_ease-in-out_infinite]" />
          <div className="absolute bottom-8 left-8 w-8 h-8 bg-amber-300/40 rounded-full backdrop-blur-sm animate-[float_6s_ease-in-out_infinite_2s]" />
        </div>
        
        <div className="w-full lg:w-2/3 flex flex-col justify-center px-30 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 lg:py-0 order-1 lg:order-2">
          <div className="mb-10 lg:mb-10">
            <h1 className="text-2xl sm:text-2xl md:text-6xl lg:text-7xl xl:text-6xl font-extrabold leading-tight text-amber-900">
              <TypewriterText text="Hi!" speed={200} />
              <br />
              <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text">
                <TypewriterText text="I'm Aya." speed={120} delay={100} />
              </span>
            </h1>
          </div>
          
          <div className="mb-8 lg:mb-12 min-h-[4rem] lg:min-h-[6rem]">
            <p className="text-base sm:text-3xl md:text-xl text-amber-800 max-w-6xl leading-relaxed">
              <TypewriterText
                text={
                  "I'm actively seeking opportunities in Software Engineering, Business Analysis, Consulting, and Data Analysis.\n" +
                  "Feel free to check out my projects below—each reflects my passion for software development, business analytics, FinTech, and UI/UX design.\n" +
                  "Let's connect! I'd love to chat."
                }
                speed={20}
                delay={100}
              />
            </p>
          </div>

          <div className="mb-8 lg:mb-16 flex flex-col sm:flex-row gap-4 opacity-0 animate-[fadeInUp_1s_ease-out_1s_forwards]">
            
            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-amber-600 text-amber-700 font-semibold rounded-full hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Let's Connect!
              <svg className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div>
          <nav className="flex flex-wrap items-center gap-2 lg:gap-9 text-xl font-semibold text-amber-700 mb-20">
          {[
            { href: "#timeline", text: "Experience" },
            { href: "#projects", text: "Projects" },
            { href: "/docs/resume.pdf", text: "Resume", external: true },
            { href: "#about", text: "About Me" },
          ].map((item, idx) => (
            <React.Fragment key={item.href}>
              <a
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="hover:text-orange-600 transition-all duration-300 relative group"
              >
                {item.text}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-orange-900 to-amber-500 group-hover:w-full transition-all duration-300" />
              </a>
              {idx < 3 && <span className="text-orange-900">•</span>}
            </React.Fragment>
          ))}
          </nav>
        </div>
      </div>

      <div className="absolute top-1/4 right-1/4 w-2 h-2 bg-red-400 rounded-full animate-ping" />
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-rose-400 rounded-full animate-ping" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 right-1/5 w-1.5 h-1.5 bg-orange-400 rounded-full animate-ping" style={{ animationDelay: '4s' }} />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}