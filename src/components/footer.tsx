/* eslint-disable react/no-unescaped-entities */
'use client'

import React from 'react'
import {
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  MapPin,
  Phone,
} from 'lucide-react'

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
    {
      icon: MapPin,
      label: 'Location',
      value: 'New York, NY',
      href: null,
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
    },
    {
      icon: ExternalLink,
      label: 'Portfolio',
      href: 'https://yourportfolio.com',
    },
  ]

  return (
    <footer className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
  {/* Top Section */}
  <div className="max-w-6xl mx-auto px-4 py-4 grid md:grid-cols-2 gap-6 items-center">
    {/* Left: Call to Action */}
    <div className="text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-bold mb-2 
                     bg-gradient-to-r from-orange-900 via-amber-900 to-yellow-600 
                     bg-clip-text text-transparent">
        Let's Connect!
      </h2>
      <a
        href="mailto:ayatarist@gmail.com"
        className="inline-flex items-center gap-2 
                   bg-gradient-to-r from-orange-900 to-amber-900 
                   text-sm font-semibold px-6 py-2 rounded-full 
                   hover:from-orange-700 hover:to-amber-900 
                   transition duration-200 shadow-md"
      >
        <Mail className="w-4 h-4" /> Send me an email
      </a>
    </div>

    {/* Right: Contact Info & Social */}
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-orange-900">Contact Information</h3>
      <div className="space-y-3">
        {contactInfo.map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-sm">
            <item.icon className={`w-8 h-7 p-2 rounded-full ${item.primary ? 'bg-orange-900 text-white' : 'bg-amber-700 text-white'}`} />
            {item.href ? (
              <a
              href={item.href}
                  className="text-amber-700 hover:text-orange-600 transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <span className="text-amber-700">{item.value}</span>
              )}
          </div>
        ))}
      </div>
      <h3 className="mt-4 text-lg font-semibold text-orange-900">Find me online</h3>
      <div className="flex gap-3">
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

  {/* Bottom Bar */}
  <div className="border-t border-amber-900">
    <div className="max-w-6xl mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center text-xs">
      <p className="text-amber-900">© {2024} Aya Tarist. All rights reserved.</p>
      <div className="flex gap-4">
        {['About', 'Experience', 'Projects', 'Contact'].map((section) => (
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
