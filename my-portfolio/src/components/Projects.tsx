"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/components/Data";
import { useState } from 'react';

export default function Projects() {

  return (
    <div id="projects" className="pt-16">
      <div className="max-w-4xl mx-auto p-6 bg-slate-900 text-white shadow-md rounded-lg">
        <h2 className="text-[10px] sm:text-[15px] font-semibold text-left border-b pb-2 mb-6">Projects</h2>
        <div className="space-y-6">
          {projects.slice(0, 6).map((project) => {
            const [isHovered, setIsHovered] = useState(false);

            return (
              <div
                key={project.id}
                className="flex items-start gap-1 bg-gray-500 p-1 rounded-lg shadow-md"
              >
                <div
                  className="flex-1 text-left text-[12px] items-start pb-4 p-2 bg-slate-800 rounded-lg hover:bg-slate-900 transition"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <h3 className="text-[10px] sm:text-[14px] font-semibold mb-3">{project.title}</h3>
                  <p className="text-[9px] sm:text-[12px]">{project.description}</p>
                  <p className="text-sm text-gray-700 mt-2">
                    {project.techUsed.map((tech, index) => (
                      <span
                        key={index}
                        className={`${isHovered ? " bg-white text-slate-900" : "bg-slate-900 text-white"
                          } text-[7px] sm:text-[12px] px-1.5 sm:p-1 rounded-lg mb-2 sm:mb-3 mt-1 mr-1 sm:mr-2 inline-block transition-all duration-300`}
                      >
                        {tech}
                      </span>
                    ))}
                  </p>

                  <a href={project.link} target="_blank" className="text-gray-300 text-[10px] sm:text-[14px] font-medium hover:underline">
                    View Project →
                  </a>
                </div>

                <div className="hidden sm:block w-[150px] h-[200px] overflow-hidden rounded-lg">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={150}
                    height={200}
                    className="w-full h-full object-fill"
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/projects"
            className=" text-gray-300 text-[9px] sm:text-[11px] font-semibold hover:underline"
          >
            View all Projects
          </Link>
        </div>
      </div>
    </div>
  );
};