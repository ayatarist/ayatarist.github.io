/* eslint-disable react/no-unescaped-entities */
'use client'

import React, { useState, useEffect } from 'react'
import SrOnly from '@/components/SrOnly'

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
        setDisplayText((prev: string) => prev + text[currentIndex])
        setCurrentIndex((prev: number) => prev + 1)
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
      {!isComplete && (
        <span className="ml-1 animate-pulse text-orange-600">|</span>
      )}
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50"
    >
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-18px); }
        }
        @keyframes drift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(8px, -10px); }
        }
        .animate-float { animation: float 20s ease-in-out infinite; }
        .animate-float-delay-5 { animation: float 25s ease-in-out infinite 5s; }
        .animate-float-delay-10 { animation: float 30s ease-in-out infinite 10s; }
        .animate-float-4 { animation: float 4s ease-in-out infinite; }
        .animate-float-6 { animation: float 6s ease-in-out infinite 2s; }
        .animate-drift { animation: drift 9s ease-in-out infinite; }
      `}</style>

      <div className="pointer-events-none absolute inset-0 opacity-20">
        <div className="absolute left-[-8rem] top-[-8rem] h-72 w-72 rounded-full bg-orange-200 mix-blend-multiply blur-3xl animate-float" />
        <div className="absolute right-[-5rem] top-[-5rem] h-72 w-72 rounded-full bg-amber-200 mix-blend-multiply blur-3xl animate-float-delay-5" />
        <div className="absolute bottom-[-6rem] left-[25%] h-64 w-64 rounded-full bg-yellow-200 mix-blend-multiply blur-3xl animate-float-delay-10" />
      </div>

      <div className="relative z-10 flex min-h-screen flex-col lg:flex-row">
        <div className="relative order-1 w-full lg:order-1 lg:w-[53%] lg:min-h-screen">
          <div className="absolute inset-0 bg-amber-900/80 lg:rounded-br-[72%]" />
          <div className="pointer-events-none absolute left-0 top-0 hidden h-full w-[calc(100%-1.5rem)] border-r border-white/10 lg:block lg:rounded-br-[72%]" />
          <div className="relative ml-5 mr-5 mt-5 h-[62vh] overflow-hidden rounded-br-[180px] sm:ml-6 sm:mr-6 sm:mt-6 sm:rounded-br-[230px] lg:absolute lg:bottom-7 lg:left-7 lg:right-10 lg:top-7 lg:ml-0 lg:mr-0 lg:mt-0 lg:h-auto lg:rounded-br-[65%]">
            <img
              src="/img/pic2.jpeg"
              alt="Aya Tarist"
              className="h-full w-full object-cover transition-transform duration-1000 ease-out lg:scale-[1.08] lg:hover:scale-[1.12]"
              style={{ objectPosition: '58% 72%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-amber-950/10 via-transparent to-white/5" />
          </div>
          <div className="pointer-events-none absolute bottom-7 left-7 hidden h-[1px] w-24 bg-orange-200/60 lg:block" />
          <div className="absolute right-8 top-8 h-14 w-14 rounded-full bg-orange-300/40 shadow-sm backdrop-blur-sm animate-float-4 lg:right-10 lg:top-10 lg:h-16 lg:w-16" />
          <div className="absolute right-[18%] top-[17%] hidden h-3 w-3 rounded-full bg-orange-200/70 lg:block animate-drift" />
          <div className="absolute bottom-12 left-8 h-9 w-9 rounded-full bg-amber-300/50 backdrop-blur-sm animate-float-6 lg:bottom-16 lg:left-12" />
        </div>

        <div className="relative order-2 flex w-full flex-col justify-center px-6 py-12 sm:px-10 lg:order-2 lg:w-[47%] lg:-ml-2 lg:px-8 lg:py-12 xl:-ml-4 xl:px-12 2xl:px-16">
          <div className="pointer-events-none absolute bottom-12 right-8 top-12 hidden w-px bg-amber-900/10 lg:block" />
          <div className="relative w-full max-w-4xl lg:pr-8 xl:pr-12">
            <h1 className="mb-7 text-5xl font-extrabold leading-[0.9] tracking-[-0.04em] text-amber-900 sm:text-6xl lg:text-[4.6rem] xl:text-[5.2rem] 2xl:text-[5.6rem]">
              <TypewriterText text="Hi! I'm Aya." speed={230} />
              <br />
              
            </h1>

            <div className="space-y-6 text-base leading-relaxed text-amber-800 text-justify sm:text-lg lg:text-[0.98rem] lg:leading-[1.75] xl:text-[1.05rem]">
              <p>
                <TypewriterText text="I am a recent Computer Science Engineering and Business Analytics graduate." speed={10} delay={20} />
              </p>
              <p>
                <TypewriterText text="What excites me most is engaging at the intersection of technology and other disciplines: collaborating with designers to craft clear interfaces, partnering with data teams to distill actionable insights, and working alongside engineers to build reliable systems that translate complex concepts into practical everyday tools!" speed={10} delay={20} />
              </p>
              <p>
                <TypewriterText text="Through my academic work and personal projects, I've developed experience across the full stack, from frontend design and user experience to backend development and data analysis." speed={10} delay={20} />
              </p>
            </div>

            <div className="mt-7 max-w-3xl text-base font-semibold leading-relaxed text-amber-900 text-justify sm:text-lg lg:text-[1.02rem] lg:leading-[1.7]">
              <TypewriterText text={"I'm actively seeking opportunities where I can contribute as a Business/Data Analyst, Consultant, or Software Engineer.\nFeel free to explore my work below, and don't hesitate to reach out!"} speed={30} delay={50} />
            </div>

            <nav className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-3 text-lg font-semibold text-amber-900 sm:text-xl">
              {[
                { href: '#experience', text: 'Experience' },
                { href: '#projects', text: 'Projects' },
                { href: '/docs/resumetobeused.pdf', text: 'Resume', external: true },
              ].map((item, idx, items) => (
                <React.Fragment key={item.href}>
                  <a
                    href={item.href}
                    {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="relative transition-all duration-300 hover:-translate-y-0.5 hover:text-orange-600"
                  >
                    {item.text}
                    {item.external && <SrOnly>(opens in a new tab)</SrOnly>}
                    <span className="absolute -bottom-1 left-0 h-[3px] w-full origin-left bg-gradient-to-r from-orange-900 to-amber-500 transition-transform duration-300" />
                  </a>
                  {idx < items.length - 1 && <span className="text-amber-900/80">&bull;</span>}
                </React.Fragment>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </section>
  )
}