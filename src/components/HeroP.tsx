/* eslint-disable react/no-unescaped-entities */
'use client'
import React, { useState, useEffect } from 'react';

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
        setDisplayText((prev: string) => prev + text[currentIndex]);
        setCurrentIndex((prev: number) => prev + 1);
      } else {
        setIsComplete(true)
      }
    }, currentIndex === 0 ? delay : speed)
    return () => clearTimeout(timer)
  }, [currentIndex, text, speed, delay])

  const lines = displayText.split('\n')
  return (
    <span className={`relative ${className}`}>
      {lines.map((line: string, idx: number) => (
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
    <section className="relative w-full min-h-screen overflow-visible lg:overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Add the float animation CSS */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 20s ease-in-out infinite;
        }
        .animate-float-delay-5 {
          animation: float 25s ease-in-out infinite 5s;
        }
        .animate-float-delay-10 {
          animation: float 30s ease-in-out infinite 10s;
        }
        .animate-float-4 {
          animation: float 4s ease-in-out infinite;
        }
        .animate-float-6 {
          animation: float 6s ease-in-out infinite 2s;
        }
      `}</style>
      
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-float-delay-5" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-float-delay-10" />
      </div>

      <div className="relative z-20 flex flex-col lg:flex-row h-200">
        <div className="w-full lg:w-2/5 h-full lg:h-full relative order-1 lg:order-1">
          {/* Black background layer behind your image - with padding to show the black */}
          <div className="absolute inset-0 bg-amber-900 opacity-30 lg:rounded-br-[1000px]" />
          
          <img
            src="/img/pic.jpg"
            alt="Aya Tarist"
            className="relative w-full h-full object-cover lg:rounded-br-[1000px] transform scale-100 hover:scale-110 transition-transform duration-200 m-7"
            style={{ objectPosition: '60% 90%' }}
          />
          <div className="absolute top-4 right-4 w-12 h-12 bg-orange-300/30 rounded-full backdrop-blur-sm animate-[float_4s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 left-8 w-8 h-8 bg-amber-300/40 rounded-full backdrop-blur-sm animate-[float_6s_ease-in-out_infinite_2s]" />
        </div>

        <div className="w-full lg:w-3/5 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-10 order-2 lg:order-2">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold leading-tight text-amber-900 mb-10">
            <TypewriterText text="Hi!" speed={200} />
            <br />
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text">
              <TypewriterText text="I'm Aya." speed={120} delay={100} />
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-amber-800 max-w-1xl leading-relaxed mb-5">
            <TypewriterText
              text={
                "I've always enjoyed building things that are both functional and thoughtful — whether it's an interface that feels intuitive or a system that surfaces meaningful insights. Over time, I've picked up experience across the stack, from frontend design decisions to backend logic and data handling.\n" +
                "\n"+
                "I'm actively seeking opportunities in Software Engineering, Business Analysis, Consulting, and Data Analysis.\n" +
                "Feel free to check out my projects below & let's connect! I'd love to chat."
              }
              speed={20}
              delay={100}
            />
          </p>

          {/* <div className="mb-8 flex flex-col sm:flex-row gap-7 justify-center">
            <a
              href="#contact"
              className="group inline-flex items-center justify-center px-3 py-2 bg-transparent border-2 border-amber-600 text-amber-700 font-semibold rounded-full hover:bg-amber-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Let's Connect!
              <svg className="ml-2 w-5 h-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </a>
          </div> */}

          {/* Navigation moved to bottom-right */}
          <div className="flex justify-end mt-12">
            <nav className="flex flex-wrap items-center justify-end gap-4 text-lg sm:text-xl font-bold text-amber-700">
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
                    className="hover:text-orange-600 transition-all duration-300 relative"
                  >
                    {item.text}
                    <span className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-orange-900 to-amber-500" />
                  </a>
                  {idx < 3 && <span className="text-orange-900">•</span>}
                </React.Fragment>
              ))}
            </nav>
          </div>        
        </div>
      </div>
    </section>
  );
}