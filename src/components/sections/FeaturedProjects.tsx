"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Aura AI Platform",
    category: "Artificial Intelligence",
    tech: ["Next.js", "Python", "OpenAI", "AWS"],
    image: "/mobile-app2.png",
    color: "from-brand-soft to-brand-green-secondary"
  },
  {
    title: "Nexus Enterprise",
    category: "Enterprise Systems",
    tech: ["React", "Spring Boot", "PostgreSQL"],
    image: "/mobile-app3.png",
    color: "from-brand-green-secondary to-brand-primary"
  },
  {
    title: "Nova Fintech App",
    category: "Mobile Applications",
    tech: ["React Native", "Node.js", "GraphQL"],
    image: "/mobile-app.jpg",
    color: "from-brand-primary to-brand-accent"
  }
];

interface ProjectItem {
  title: string;
  category: string;
  tech: string[];
}

interface FeaturedProjectsProps {
  dict: {
    title1: string;
    titleHighlight: string;
    description: string;
    viewAll: string;
    projects: ProjectItem[];
  };
}

export function FeaturedProjects({ dict }: FeaturedProjectsProps) {
  const projectsData = dict.projects.map((item: ProjectItem, index: number) => ({
    ...item,
    image: projects[index].image,
    color: projects[index].color
  }));

  return (
    <section className="py-16 md:py-32 relative bg-brand-primary border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Header — centered on mobile */}
        <div className="text-center md:text-left flex flex-col md:flex-row md:justify-between md:items-end mb-12 md:mb-20 gap-6">
          <div className="max-w-2xl mx-auto md:mx-0">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-5xl font-bold text-white mb-3 md:mb-6"
            >
              {dict.title1} <span className="text-brand-soft">{dict.titleHighlight}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-brand-light/70 text-base md:text-lg"
            >
              {dict.description}
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onClick={() => window.open('https://wa.me/573102297981?text=Hola,%20quiero%20cotizar%20el%20desarrollo%20de%20una%20aplicaci%C3%B3n%20o%20sistema%20para%20mi%20negocio.', '_blank')}
            className="mx-auto md:mx-0 md:mt-0 px-6 py-3 rounded-full border border-brand-accent text-brand-light hover:bg-brand-secondary/50 transition-colors flex items-center gap-2"
          >
            {dict.viewAll} <ArrowUpRight className="h-4 w-4" />
          </motion.button>
        </div>

        <div className="space-y-10 md:space-y-24">
          {projectsData.map((project, index: number) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              // Show only the first two projects on mobile
              className={`group flex flex-col ${index % 2 !== 0 ? "md:flex-row-reverse" : "md:flex-row"} gap-6 md:gap-16 items-center ${index === 2 ? "hidden md:flex" : ""}`}
            >
              <div className="w-full md:w-3/5 overflow-hidden rounded-3xl relative aspect-[4/3] md:aspect-[16/10] bg-brand-secondary border border-brand-accent/50 group-hover:border-brand-soft/30 transition-colors duration-500">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-10`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-soft/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {project.image && !project.image.includes("project-") ? (
                  <>
                    {index === 1 ? (
                      <>
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 60vw"
                          className="hidden md:block opacity-80 transition-all duration-1000 group-hover:opacity-100 object-contain scale-[1.30] group-hover:scale-[1.35]"
                        />
                        <Image
                          src="/mobile-app.jpg"
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, 60vw"
                          className="md:hidden opacity-80 transition-all duration-1000 group-hover:opacity-100 object-cover group-hover:scale-110"
                        />
                      </>
                    ) : (
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 60vw"
                        className="opacity-80 transition-all duration-1000 group-hover:opacity-100 object-cover group-hover:scale-110"
                      />
                    )}
                  </>
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-brand-accent/50 group-hover:scale-105 transition-transform duration-1000 relative z-10">
                    <span className="text-2xl font-bold tracking-widest uppercase opacity-30">{project.title} Showcase</span>
                  </div>
                )}
              </div>

              {/* Text content */}
              <div className="w-full md:w-2/5 space-y-4 md:space-y-6 text-justify md:text-left">
                <div className="flex items-center gap-4 justify-center md:justify-start">
                  <span className="h-px w-8 bg-brand-soft" />
                  <span className="text-brand-soft font-medium uppercase tracking-wider text-sm">{project.category}</span>
                </div>
                <h3 className="text-center md:text-left text-2xl md:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-brand-soft transition-all duration-300">
                  {project.title}
                </h3>
                {/* Tech tags — responsive flex wrap */}
                <div className="flex flex-wrap justify-center md:justify-start gap-2 md:gap-3 pt-2">
                  {project.tech.map((tech: string) => (
                    <span key={tech} className="px-3 py-1.5 text-xs md:text-sm rounded-full bg-brand-secondary/80 border border-brand-accent/30 text-brand-light/90 shadow-sm backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
