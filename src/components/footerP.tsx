/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react'
import { Mail, Linkedin, Github, Phone } from 'lucide-react'

export default function PortfolioFooter() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'ayatarist@gmail.com',
      href: 'mailto:ayatarist@gmail.com',
      primary: true,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (541) 787-9650',
      href: 'tel:+15417879650',
    },
  ]

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/aya-tarist/',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/ayatarist',
    }
  ]

  return (
    <footer className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-8 px-4 sm:px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-6">
        <div className="text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl font-bold mb-2 bg-gradient-to-r from-orange-900 via-amber-900 to-yellow-600 bg-clip-text text-transparent">
            Let's Connect!
          </h2>
          <a
            href="mailto:ayatarist@gmail.com"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-900 to-amber-900 text-sm font-semibold px-6 py-3 rounded-full hover:from-orange-700 hover:to-amber-900 transition duration-200 shadow-md"
          >
            <Mail className="w-4 h-4" /> Send me an email
          </a>
        </div>

        <div className="space-y-3">
          <h3 className="text-lg font-semibold text-orange-900">Contact Information</h3>
          {contactInfo.map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-sm">
              <item.icon className={`w-8 h-7 p-2 rounded-full ${item.primary ? 'bg-orange-900 text-white' : 'bg-amber-700 text-white'}`} />
              {item.href ? (
                <a href={item.href} className="text-amber-700 hover:text-orange-600 transition-colors">
                  {item.value}
                </a>
              ) : (
                <span className="text-amber-700">{item.value}</span>
              )}
            </div>
          ))}

          <h3 className="mt-4 text-lg font-semibold text-orange-900">Find me online</h3>
          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item, i) => (
              <a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-amber-900 rounded-full text-white hover:bg-amber-700 transition duration-200"
              >
                <item.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-amber-900 pt-4">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col md:flex-row justify-between items-center text-xs">
          <p className="text-amber-900">© {2024} Aya Tarist. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 mt-2 md:mt-0">
            {['Home', 'Experience', 'Projects', 'Contact'].map((section) => (
              <a
                key={section}
                href={`#${section.toLowerCase()}`}
                className="text-amber-700 hover:text-amber-900 transition"
              >
                {section}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
