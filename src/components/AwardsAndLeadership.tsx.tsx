/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react';
import SrOnly from '@/components/SrOnly'; // <-- ADD THIS IMPORT

export default function AwardsAndLeadership() {
  return (
    <section
      id="awards"
      className="relative w-full bg-white py-24 px-4 sm:px-6 md:px-12 lg:px-24"
    >
      <h2 className="text-3xl font-bold text-amber-900 mb-6">
        Awards & Leadership
      </h2>
      <ul className="list-disc list-inside space-y-4 text-gray-700">
        <li>
          <a
            href="http://mozillafoundation.org/en/responsible-computing-challenge/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-amber-700 hover:underline"
          >
            Bucknell Boulder Mozilla Tech Fellow
            <SrOnly>(opens in a new tab)</SrOnly> {/* <-- MODIFIED LINE */}
          </a>
          : Selected for Mozilla Foundation's Responsible Computing Challenge; researched digital accessibility under Professor Ross to evaluate rural businesses' WCAG compliance and develop actionable recommendations.
        </li>
        <li>
          <span className="font-semibold">French Teaching Assistant</span>, Bucknell University
        </li>
        <li>
          <span className="font-semibold">Class Representative</span>, Society of Women Engineers
        </li>
        <li>
          <span className="font-semibold">Founder & President</span>, Middle Eastern North African Student Association
        </li>
        <li>
          <span className="font-semibold">Michael M. & Lillian Amber Fremont Scholar</span>
        </li>
        <li>
          <span className="font-semibold">Grace Hopper Scholar ’24</span>
        </li>
        <li>
          <span className="font-semibold">Society of Women Engineers Scholar ’24</span>
        </li>
        <li>
          <span className="font-semibold">Dean’s List</span> ’22, ’23, ’24
        </li>
      </ul>
    </section>
  );
}