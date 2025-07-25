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
    <section id="home" className="relative w-full min-h-screen overflow-visible lg:overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
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
        <div className="absolute top-0 left-0 w-64 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl animate-float" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl animate-float-delay-5" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl animate-float-delay-10" />
      </div>

      <div className="relative z-5 flex flex-col lg:flex-row "> {/* if u add h-200 you will fix the desktop issue but otherwise it's across device friendly */}
        <div className="w-full lg:w-2/5 h-full lg:h-full relative order-1 lg:order-1">
          {/* Black background layer behind your image - with padding to show the black */}
          <div className="absolute inset-0 bg-amber-900 opacity-80 lg:rounded-br-[1300px]" />
          
          <img
            src="/img/pic.jpg"
            alt="Aya Tarist"
            className="relative w-full h-full object-cover lg:rounded-br-[1000px] transform scale-100 hover:scale-130 transition-transform duration-200 m-7"
            style={{ objectPosition: '60% 90%' }}
          />
          <div className="absolute top-4 right-4 w-12 h-12 bg-orange-300/30 rounded-full backdrop-blur-sm animate-[float_4s_ease-in-out_infinite]" />
          <div className="absolute bottom-10 left-8 w-8 h-8 bg-amber-300/40 rounded-full backdrop-blur-sm animate-[float_6s_ease-in-out_infinite_2s]" />
        </div>

        <div className="w-full lg:w-3/5 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-16 xl:px-24 py-4 order-2 lg:order-2">
          <h1 className="text-xl sm:text-xl md:text-xl lg:text-7xl font-extrabold leading-tight text-amber-900 mb-5">
            <TypewriterText text="Hi!" speed={200} />
            <br />
            <span className="bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text">
              <TypewriterText text="I'm Aya." speed={140} delay={100} />
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-1xl text-amber-800 max-w-7xl leading-relaxed mb-2 text-justify">
            <TypewriterText
              text={
                "I am a recent Computer Science Engineering and Business Analytics graduate." +
                "\n"+
                "What excites me most is engaging at the intersection of technology and other disciplines: collaborating with designers to craft clear interfaces, partnering with data teams to distill actionable insights, and working alongside engineers to build reliable systems that translate complex concepts into practical everyday tools! \n"+
                "\n"+
                "Through my academic work and personal projects, I've developed experience across the full stack - from frontend design and user experience to backend development and data analysis. \n" +
                "\n"
              }
              speed={10}
              delay={20}
            />
          </p>
          <p className="text-base sm:text-lg md:text-1xl text-amber-800 font-semibold max-w-5xl leading-relaxed mb-2 text-justify">
            <TypewriterText
              text={
                "I'm actively seeking opportunities where I can contribute as a Business/Data Analyst, Consultant, or Software Engineer.\n" +
                "Feel free to explore my work below, and don't hesitate to reach out! "
              }
              speed={30}
              delay={50}
            />
          </p>

       
          <div className="flex justify-end mt-10">
            <nav className="flex flex-wrap items-center justify-end gap-5 text-lg sm:text-xl font-semibold text-amber-900">
              {[
                // { href: "#home", text: "Home" },
                { href: "#experience", text: "Experience" },
                { href: "#projects", text: "Projects" },
                { href: "/docs/resume.pdf", text: "Resume", external: true },
                // { href: "#about", text: "About Me" },
              ].map((item, idx) => (
                <React.Fragment key={item.href}>
                  <a
                    href={item.href}
                    {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="hover:text-orange-600 transition-all duration-300 relative"
                  >
                    {item.text}
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-gradient-to-r from-orange-900 to-amber-500" />
                  </a>
                  {idx < 4 && <span className="text-amber-900">•</span>}
                </React.Fragment>
              ))}
            </nav>
          </div>        
        </div>
      </div>
    </section>
  );
}
