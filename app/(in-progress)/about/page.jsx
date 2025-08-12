"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function About() {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0, -1000])
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Large HELLO */}
      <section className="relative flex min-h-screen items-center px-4 py-20 md:px-20">
        <div className="mx-auto max-w-[1400px] px-4">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="relative">
                <h1 className="flex items-center text-[130px] font-bold leading-none tracking-tighter text-neutral-800 md:text-[200px]">
              HELL
              <motion.span
                animate={{
                  y: [0, -30, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                  className="text-sky-500"
              >
                O
              </motion.span>
            </h1>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -top-8 right-24 animate-pulse size-12 text-yellow-400"
              >
                ✦
              </motion.div>
            </div>
            
            <div className="mt-12 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="font-medium text-xl tracking-wide text-sky-500"
                >
                  Frontend Developer & Creative Designer
              </motion.p>
                <div className="space-y-4">
                  <p className="text-3xl md:text-4xl text-neutral-600 max-w-2xl font-light leading-tight">
                      I&apos;m <span className="font-normal text-neutral-800">Ranjith Kumar</span>. 
                    </p>
                    <p className="text-3xl md:text-4xl text-neutral-600 max-w-2xl font-light leading-tight">
                      I craft 
                      <motion.span
                        animate={{
                          opacity: [1, 0.7, 1],
                          scale: [1, 1.02, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                        }}
                        className="mx-2 text-sky-500 font-normal"
                      >
                        immersive digital experiences
                      </motion.span> 
                      through code and creativity.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl text-neutral-500 max-w-2xl leading-relaxed border-l-4 border-sky-500 pl-6"
                >
                  Building
                  powerful
                  digital
                  solutions
                  from
                  front
                  to
                  back.
                  Together
                  we&apos;ll
                  create
                  seamless
                  experiences.
                  Always
                  embracing
                  innovation
                  and
                  modern
                  technologies.
                  As a full stack developer, my expertise in both frontend and backend development allows me to craft complete, scalable applications that make a real impact.
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="pt-6 flex items-center gap-6"
                >
                  <a 
                    href="#contact" 
                    className="group flex items-center gap-2 text-lg text-neutral-800 transition-colors hover:text-sky-500"
                  >
                    Let's create something amazing 
                    <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* Added Resume Button */}
                  <motion.a
                    href="/your-resume.pdf" // Add your resume file path here
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-6 py-3 bg-neutral-800 text-white rounded-xl hover:bg-sky-500 transition-colors duration-300"
                  >
                    <span>Download Resume</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </motion.a>
                </motion.div>
              </div>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] md:h-[600px]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-transparent to-transparent rounded-2xl" />
              <Image
                src="/my.png"
                alt="Profile"
                fill
                className="object-cover rounded-2xl"
                priority
              />
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                }}
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-sky-100/20 to-transparent rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section with Clean Layout */}
      <section className="py-32 px-4 md:px-20 bg-neutral-100">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[60px] md:text-[130px] font-bold leading-none tracking-tighter mb-24 flex items-baseline gap-4"
          >
            I can help you
            <span className="text-neutral-300">with</span>
            <div className="text-sky-500 flex gap-1">
              <motion.span
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
              >
                .
              </motion.span>
            </div>
          </motion.h2>

          {/* Enhanced Services Layout */}
          <div className="space-y-40">
            {/* Frontend Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid md:grid-cols-2 gap-20">
                {/* Left Side */}
                <div className="space-y-8">
                  <div className="space-y-4">
                  <motion.span 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="text-sky-500 text-xl font-medium"
                    >
                      01 — Frontend Development
                  </motion.span>
                    <h3 className="text-5xl font-bold text-neutral-800">
                      Creating Exceptional User Experiences
                    </h3>
                
                    {/* Added Proficiency Indicator */}
                    <div className="flex items-center gap-3 mt-6">
                      <span className="text-sm font-medium">Proficiency</span>
                      <div className="h-1 w-24 bg-neutral-100 rounded-full overflow-hidden">
                <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "95%" }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full bg-sky-500 rounded-full"
                        />
                      </div>
                      <span className="text-sm text-neutral-400">95%</span>
              </div>
                </div>
                
                  <p className="text-xl text-neutral-600 leading-relaxed">
                    Specializing in modern web development with a focus on performance, 
                    interactivity, and responsive design.
                  </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-2 gap-4 pt-8"
                  >
                    {[
                      "React & Next.js",
                      "TypeScript",
                      "TailwindCSS",
                      "Framer Motion",
                      "State Management",
                      "API Integration"
                    ].map((skill) => (
                      <div 
                      key={skill}
                        className="flex items-center gap-2 group"
                    >
                        <span className="h-px w-8 bg-neutral-300 group-hover:w-12 group-hover:bg-sky-500 transition-all duration-300" />
                        <span className="text-neutral-600 group-hover:text-neutral-800 transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                    </motion.div>
                </div>

                {/* Right Side */}
                <div className="space-y-8 md:pt-16">
                  <div className="space-y-12">
                    {[
                      {
                        title: "Modern Technologies",
                        description: "Building with the latest frameworks and tools to ensure optimal performance and maintainability."
                      },
                      {
                        title: "Responsive Design",
                        description: "Creating fluid layouts that work seamlessly across all devices and screen sizes."
                      },
                      {
                        title: "Interactive UI",
                        description: "Implementing smooth animations and micro-interactions that enhance user engagement."
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="group"
                      >
                        <div className="border-l-2 border-neutral-200 pl-6 group-hover:border-sky-500 transition-colors">
                          <h4 className="text-xl font-bold text-neutral-800 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-neutral-600 leading-relaxed">
                            {item.description}
                          </p>
                  </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Backend Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid md:grid-cols-2 gap-20">
                {/* Left Side */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <motion.span 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="text-sky-500 text-xl font-medium"
                    >
                      02 — Backend Development
                    </motion.span>
                    <h3 className="text-5xl font-bold text-neutral-800">
                      Building Robust Systems
                    </h3>
                  </div>
                  
                  <p className="text-xl text-neutral-600 leading-relaxed">
                    Developing scalable server-side solutions with a focus on performance, 
                    security, and reliability.
                  </p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-2 gap-4 pt-8"
                  >
                    {[
                      "Node.js/Express",
                      "Python/FastAPI",
                      "MongoDB/PostgreSQL",
                      "Redis/Caching",
                      "RESTful APIs",
                      "GraphQL"
                    ].map((skill) => (
                      <div 
                        key={skill}
                        className="flex items-center gap-2 group"
                      >
                        <span className="h-px w-8 bg-neutral-300 group-hover:w-12 group-hover:bg-sky-500 transition-all duration-300" />
                        <span className="text-neutral-600 group-hover:text-neutral-800 transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                    </motion.div>
                </div>

                {/* Right Side */}
                <div className="space-y-8 md:pt-16">
                  <div className="space-y-12">
                    {[
                      {
                        title: "API Development",
                        description: "Creating efficient and secure APIs that power modern web applications."
                      },
                      {
                        title: "Database Design",
                        description: "Architecting scalable database solutions with optimal performance."
                      },
                      {
                        title: "System Architecture",
                        description: "Designing robust backend systems that can handle high loads."
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="group"
                      >
                        <div className="border-l-2 border-neutral-200 pl-6 group-hover:border-sky-500 transition-colors">
                          <h4 className="text-xl font-bold text-neutral-800 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-neutral-600 leading-relaxed">
                            {item.description}
                          </p>
                  </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Full Stack Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid md:grid-cols-2 gap-20">
                {/* Left Side */}
                <div className="space-y-8">
                  <div className="space-y-4">
                    <motion.span 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="text-sky-500 text-xl font-medium"
                    >
                      03 — Full Stack Solutions
                    </motion.span>
                    <h3 className="text-5xl font-bold text-neutral-800">
                      End-to-End Development
                    </h3>
                  </div>
                  
                  <p className="text-xl text-neutral-600 leading-relaxed">
                    Delivering complete web solutions from concept to deployment with 
                    seamless integration between frontend and backend.
                  </p>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="grid grid-cols-2 gap-4 pt-8"
                  >
                    {[
                      "System Architecture",
                      "Cloud Services",
                      "CI/CD Pipelines",
                      "Testing/QA",
                      "Performance",
                      "Security"
                    ].map((skill) => (
                      <div 
                        key={skill}
                        className="flex items-center gap-2 group"
                      >
                        <span className="h-px w-8 bg-neutral-300 group-hover:w-12 group-hover:bg-sky-500 transition-all duration-300" />
                        <span className="text-neutral-600 group-hover:text-neutral-800 transition-colors">
                          {skill}
                        </span>
                      </div>
                    ))}
                    </motion.div>
                </div>

                {/* Right Side */}
                <div className="space-y-8 md:pt-16">
                  <div className="space-y-12">
                    {[
                      {
                        title: "Complete Solutions",
                        description: "Building full-stack applications with seamless integration and optimal performance."
                      },
                      {
                        title: "DevOps & Deployment",
                        description: "Setting up automated pipelines and managing cloud infrastructure."
                      },
                      {
                        title: "Maintenance & Scaling",
                        description: "Ensuring applications remain performant and secure as they grow."
                      }
                    ].map((item, index) => (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="group"
                      >
                        <div className="border-l-2 border-neutral-200 pl-6 group-hover:border-sky-500 transition-colors">
                          <h4 className="text-xl font-bold text-neutral-800 mb-2">
                            {item.title}
                          </h4>
                          <p className="text-neutral-600 leading-relaxed">
                            {item.description}
                          </p>
                  </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Line */}
          <div className="w-full h-px bg-neutral-200 mt-32 overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-sky-500 via-neutral-800 to-sky-500"
            />
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="py-32 px-4 md:px-20 bg-neutral-100">
        <div className="max-w-[1400px] mx-auto">
          {/* Experience Title */}
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[60px] md:text-[130px] font-bold text-neutral-800 leading-none tracking-tighter flex items-baseline mb-24"
          >
            Experi<span className="text-neutral-300">ence</span>
            <motion.span 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-yellow-400 text-xl ml-4"
            >
              ✦
            </motion.span>
          </motion.h2>

          {/* Experience Timeline */}
          <div className="grid grid-cols-1 gap-20 mb-32">
            {/* Experience Item */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative group"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/4">
                  <div className="sticky top-20 space-y-4">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-4"
                    >
                      <span className="text-7xl font-bold text-neutral-200">01</span>
                    </motion.div>
                    <div className="space-y-2">
                      <span className="text-sky-500 font-medium text-lg">2022 - Present</span>
                      <h3 className="text-3xl font-bold text-neutral-800">Senior Frontend Developer</h3>
                      <p className="text-neutral-400 text-lg">Company Name</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/4 relative">
                  <div className="absolute -left-8 h-full w-1 bg-neutral-200 rounded-full">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      transition={{ duration: 1.5 }}
                      className="w-full bg-gradient-to-b from-sky-500 to-neutral-800 rounded-full"
                    />
                  </div>
                  <div className="space-y-8">
                    <p className="text-xl text-neutral-600 leading-relaxed">
                      Led the development of multiple high-impact web applications using Next.js and React.
                      Implemented complex animations and interactive features that enhanced user engagement.
                      Mentored junior developers and established best practices for the frontend team.
                    </p>
                    <div className="pt-6">
                      <div className="text-sm text-neutral-400 mb-3">Technologies Used</div>
                      <div className="flex flex-wrap gap-2">
                        {["Next.js", "React", "TypeScript", "Framer Motion", "TailwindCSS", "Node.js"].map((tech, index) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ delay: index * 0.1 }}
                            className="px-4 py-2 bg-white border border-neutral-200 text-neutral-600 rounded-xl hover:border-sky-500 hover:text-sky-500 transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Add more experience items here */}
          </div>

          {/* Education Title */}
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[60px] md:text-[130px] font-bold text-neutral-800 leading-none tracking-tighter flex items-baseline mb-24"
          >
            Edu<span className="text-neutral-300">cation</span>
            <motion.span 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-sky-500 text-xl ml-4"
            >
              ✦
            </motion.span>
          </motion.h2>

          {/* Education Timeline */}
          <div className="grid grid-cols-1 gap-20">
            {/* Education Item */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative group"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/4">
                  <div className="sticky top-20 space-y-4">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-4"
                    >
                      <span className="text-7xl font-bold text-neutral-200">01</span>
                    </motion.div>
                    <div className="space-y-2">
                      <span className="text-sky-500 font-medium text-lg">2018 - 2022</span>
                      <h3 className="text-3xl font-bold text-neutral-800">Bachelor of Technology</h3>
                      <p className="text-neutral-400 text-lg">University Name</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/4 relative">
                  <div className="absolute -left-8 h-full w-1 bg-neutral-200 rounded-full">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      transition={{ duration: 1.5 }}
                      className="w-full bg-gradient-to-b from-sky-500 to-neutral-800 rounded-full"
                    />
                  </div>
                  <div className="space-y-8">
                    <p className="text-xl text-neutral-600 leading-relaxed">
                      Computer Science and Engineering with focus on Web Technologies and Software Architecture
                    </p>
                    <div className="pt-6">
                      <div className="text-sm text-neutral-400 mb-3">Key Courses</div>
                      <div className="flex flex-wrap gap-2">
                        {["Web Development", "Data Structures", "Algorithms", "Database Management", "System Design", "UI/UX"].map((course, index) => (
                          <motion.span
                            key={course}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ delay: index * 0.1 }}
                            className="px-4 py-2 bg-white border border-neutral-200 text-neutral-600 rounded-xl hover:border-sky-500 hover:text-sky-500 transition-all duration-300"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Loading Line */}
          <div className="w-full h-px bg-neutral-200 mt-32 overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-sky-500 via-neutral-800 to-sky-500"
            />
          </div>
        </div>
      </section>

      {/* Custom Cursor */}
      <motion.div
        className="fixed size-8 rounded-full bg-sky-500/20 pointer-events-none"
        animate={{ x: mousePosition.x - 16, y: mousePosition.y - 16 }}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
    </div>
  )
}
