"use client";
import { useState } from "react";
import { runningProjects, completedProjects } from "@/data/config";

type Project = {
  title: string;
  description: string;
  category: string;
  year: string;
  beneficiaries: string;
};

function ProjectCard({
  project,
  status,
}: {
  project: Project;
  status: "running" | "completed";
}) {
  const isRunning = status === "running";
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col gap-4">
      {/* Header */}
      <div className="flex items-start justify-between gap-3">
        <span
          className={`inline-block text-xs font-bold px-3 py-1 rounded-full ${
            isRunning
              ? "bg-green-100 text-green-700"
              : "bg-blue-100 text-blue-700"
          }`}
        >
          {project.category}
        </span>
        <span
          className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1 rounded-full ${
            isRunning
              ? "bg-green-50 text-green-600 border border-green-200"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {isRunning && (
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block"></span>
          )}
          {isRunning ? "Ongoing" : "Completed"}
        </span>
      </div>

      {/* Content */}
      <div>
        <h3 className="font-bold text-gray-800 text-lg mb-2">
          {project.title}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between pt-3 border-t border-gray-100 text-sm">
        <div className="text-gray-400">
          <span className="font-medium text-gray-600">Year:</span> {project.year}
        </div>
        <div className="text-gray-400">
          <span className="font-medium text-green-600">
            {project.beneficiaries}
          </span>{" "}
          beneficiaries
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"running" | "completed">(
    "running"
  );

  return (
    <section id="projects" className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <span className="inline-block bg-green-100 text-green-700 text-sm font-semibold px-4 py-1 rounded-full mb-3">
            Our Work
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-4">
            Projects
          </h2>
          <div className="w-16 h-1 bg-green-600 mx-auto rounded-full mb-4"></div>
          <p className="max-w-xl mx-auto text-gray-500">
            From active initiatives to completed milestones — here is a look at
            the impact we are creating on the ground.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="bg-white rounded-full p-1 shadow-sm border border-gray-200 flex gap-1">
            <button
              onClick={() => setActiveTab("running")}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-colors ${
                activeTab === "running"
                  ? "bg-green-700 text-white shadow"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Running Projects ({runningProjects.length})
            </button>
            <button
              onClick={() => setActiveTab("completed")}
              className={`px-6 py-2 rounded-full font-semibold text-sm transition-colors ${
                activeTab === "completed"
                  ? "bg-green-700 text-white shadow"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              Completed Projects ({completedProjects.length})
            </button>
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === "running"
            ? runningProjects.map((p) => (
                <ProjectCard key={p.title} project={p} status="running" />
              ))
            : completedProjects.map((p) => (
                <ProjectCard key={p.title} project={p} status="completed" />
              ))}
        </div>
      </div>
    </section>
  );
}
