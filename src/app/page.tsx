// src/app/page.tsx
import React from 'react';
import Hero from '@/components/Hero';
import Timeline from '@/components/Experience';
import Projects from '@/components/ProjectsOverview';
// import Testimonies from '@/components/testimonies';
import Footer from '@/components/footer';

export const metadata = {
  title: "Aya Tarist | Portfolio",
  description: "Software engineer, researcher, and builder.",
  icons: {
    icon: "/favicon.png",
  },
}


export default function HomePage() {
  return (
    <React.Fragment>
      <Hero />
      <Timeline />
      <Projects />
      {/* <Testimonies /> */}
      <Footer />

    </React.Fragment>
  );
}