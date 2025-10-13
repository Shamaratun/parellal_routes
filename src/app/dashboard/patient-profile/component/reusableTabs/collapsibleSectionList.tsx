"use client";

import { useState, useEffect } from "react";

interface Section {
  title: string;
  component: React.ReactNode;
}

interface CollapsibleSectionListProps {
  sections: Section[];
  initiallyOpen?: boolean; 
}

export default function CollapsibleSectionList({
  sections,
  initiallyOpen = true,
}: CollapsibleSectionListProps) {

  const [openSections, setOpenSections] = useState<Set<string>>(new Set());


  useEffect(() => {
    if (initiallyOpen) {
      const allTitles = sections.map((s) => s.title);
      setOpenSections(new Set(allTitles));
    }
  }, [sections, initiallyOpen]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(title)) {
        newSet.delete(title); 
      } else {
        newSet.add(title);
      }
      return newSet;
    });
  };

  return (
    <div className="flex flex-col space-y-2 min-w-full">
      {sections.map((section) => (
        <div key={section.title}>
          <button
            className="w-50 text-left px-3 py-2 rounded-md bg-gray-100 hover:bg-gray-200 font-medium"
            onClick={() => toggleSection(section.title)}
          >
            {section.title}
          </button>

          {openSections.has(section.title) && (
            <div className="mt-2">{section.component}</div>
          )}
        </div>
      ))}
    </div>
  );
}
