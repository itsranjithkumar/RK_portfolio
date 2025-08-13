"use client"

import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import GithubStreak from "../../components/GithubStreak";

const projects = [
  {
    id: 1,
    year: "2025",
    title: "Enterprise SaaS Platform",
    description:
      "A comprehensive enterprise platform with advanced analytics, real-time collaboration, and scalable architecture serving 10,000+ users daily.",
    image: "/interior.jpg",
    tags: ["React", "Next.js", "PostgreSQL", "AWS"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 2,
    year: "2025",
    title: "AI-Powered E-commerce",
    description:
      "Revolutionary e-commerce platform with AI recommendations, predictive analytics, and automated inventory management.",
    image: "/interior.jpg",
    tags: ["React", "Python", "TensorFlow", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: 3,
    year: "2024",
    title: "Healthcare Management System",
    description:
      "Secure healthcare platform streamlining patient management, appointment scheduling, and medical records.",
    image: "/interior.jpg",
    tags: ["Next.js", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 4,
    year: "2024",
    title: "FinTech Trading Platform",
    description: "High-performance trading platform with real-time data processing and advanced charting capabilities.",
    image: "/interior.jpg",
    tags: ["React", "WebSocket", "Python"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: 5,
    year: "2024",
    title: "Smart City IoT Dashboard",
    description: "Comprehensive IoT dashboard managing city infrastructure and environmental monitoring.",
    image: "/interior.jpg",
    tags: ["Vue.js", "IoT", "Python"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  // {
  //   id: 6,
  //   year: "2023",
  //   title: "Design System Library",
  //   description: "Comprehensive design system and component library adopted by 500+ developers worldwide.",
  //   image: "/interior.jpg",
  //   tags: ["React", "Storybook", "TypeScript"],
  //   liveUrl: "#",
  //   githubUrl: "#",
  //   featured: false,
  // },
]

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-7xl md:text-9xl font-light text-black mb-8 tracking-tight"
          >
            Projects
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto font-light leading-relaxed"
          >
            Thoughtfully designed solutions that solve real problems and create meaningful impact.
          </motion.p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                className="group border border-gray-200 rounded-3xl p-8 bg-white hover:border-blue-300 hover:shadow-2xl transition-all duration-500"
              >
                <div className="relative aspect-[4/3] mb-10 rounded-2xl overflow-hidden bg-gray-50 border border-gray-100">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-500" />
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 font-medium tracking-wide">{project.year}</span>
                    <div className="flex gap-4">
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Link
                          href={project.liveUrl}
                          className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                        >
                          <ExternalLink size={22} />
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Link
                          href={project.githubUrl}
                          className="text-gray-400 hover:text-black transition-colors duration-300"
                        >
                          <Github size={22} />
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  <h3 className="text-5xl md:text-6xl font-semibold bg-gradient-to-r from-black via-gray-900 to-gray-700 bg-clip-text text-transparent tracking-wide leading-tight mb-2">
  {project.title}
</h3>

                  <p className="text-gray-600 leading-relaxed text-lg font-light">{project.description}</p>

                  <div className="flex flex-wrap gap-3 pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 bg-gray-100 text-gray-700 text-sm rounded-full font-medium border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="py-20 px-6 bg-gray-50/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-200 hover:border-blue-300 hover:shadow-xl transition-all duration-500"
              >
                <div className="relative aspect-[4/3] bg-gray-50 border-b border-gray-100">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-8 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 tracking-wide">{project.year}</span>
                    <div className="flex gap-3">
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Link
                          href={project.liveUrl}
                          className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                        >
                          <ExternalLink size={18} />
                        </Link>
                      </motion.div>
                      <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                        <Link
                          href={project.githubUrl}
                          className="text-gray-400 hover:text-black transition-colors duration-300"
                        >
                          <Github size={18} />
                        </Link>
                      </motion.div>
                    </div>
                  </div>

                  <h3 className="text-3xl font-semibold bg-gradient-to-r from-black via-gray-900 to-gray-700 bg-clip-text text-transparent tracking-wide leading-tight mb-1">
  {project.title}
</h3>

                  <p className="text-gray-600 text-sm leading-relaxed font-light">{project.description}</p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-gray-100 text-gray-600 text-xs rounded-full font-medium border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Streak Section
      <section className="pt-10 pb-24 px-6">
        <div className="max-w-3xl mx-auto">
          <GithubStreak />
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-light text-black mb-8 tracking-tight">Let's work together</h2>
            <p className="text-xl text-gray-600 mb-12 font-light leading-relaxed">
              Ready to bring your ideas to life? Get in touch.
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} transition={{ duration: 0.2 }}>
              <Link
                href="mailto:hello@example.com"
                className="inline-block bg-blue-600 text-white px-10 py-4 rounded-full font-medium hover:bg-blue-700 transition-colors duration-300 text-lg border border-blue-600"
              >
                Get in touch
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
