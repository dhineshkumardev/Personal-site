import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

export const Projects = () => {
  const mobileProjects = [
    {
      title: 'React Native Mobile Applications',
      description:
        'Developed multiple cross-platform mobile applications using React Native, delivering seamless experiences on both iOS and Android platforms.',
      category: 'Mobile Development',
      tech: ['React Native', 'JavaScript', 'Redux', 'Firebase'],
      featured: true,
    },
  ];

  const webProjects = [
    {
      title: 'Websites & Landing Pages',
      description:
        'Built responsive and modern websites and landing pages with focus on user experience, performance, and SEO optimization.',
      category: 'Web Development',
      tech: ['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind CSS'],
    },
    {
      title: 'E-commerce Solutions',
      description:
        'Developed e-commerce platforms with shopping cart functionality, and admin dashboards.',
      category: 'E-commerce',
      tech: ['React', 'Node.js', 'MedusaJS', 'PHP (Laravel)', 'REST APIs'],
    },
    {
      title: 'Personal Sites',
      description:
        'Created modern personal portfolio websites with animations, responsive design, and interactive features.',
      category: 'Web Development',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    },
  ];

  const hardwareProjects = [
    {
      title: 'Smart Survey Robot using VLSI',
      description:
        'Developed an intelligent survey robot with VLSI technology for automated data collection and analysis.',
      category: 'Hardware & Embedded',
      tech: ['VLSI', 'Embedded Systems', 'Robotics'],
    },
    {
      title: 'Robotic Presenter for Admission',
      description:
        'Created a voice-guided robotic presenter system to assist with admission processes and provide automated guidance.',
      category: 'Robotics & AI',
      tech: ['Robotics', 'Voice Recognition', 'Automation'],
    },
    {
      title: 'Smart Notice Board using Arduino',
      description:
        'Built an IoT-based smart notice board system using Arduino for real-time information display and management.',
      category: 'IoT & Embedded',
      tech: ['Arduino', 'IoT', 'Embedded Systems'],
    },
    {
      title: 'Bluetooth Controlled Robot',
      description:
        'Developed a mobile-controlled robot system using Bluetooth connectivity for remote operation and control.',
      category: 'Robotics',
      tech: ['Bluetooth', 'Mobile App', 'Robotics'],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <Helmet>
        <title>Projects | Dhinesh Kumar S</title>
      </Helmet>

      <motion.section
        className="max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-center mb-6 text-gradient"
          variants={itemVariants}
        >
          My Projects
        </motion.h1>
        <motion.p
          className="text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          A collection of projects showcasing my expertise in full-stack development,
          including mobile apps, websites, landing pages, e-commerce solutions, and more.
        </motion.p>

        <div className="space-y-16">
          <div>
            <h2 className="text-3xl font-bold mb-8 text-purple-400">
              Web Development
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {webProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-3xl p-6 hover:bg-white/15 transition-all"
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-semibold whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-purple-400">
              Mobile Applications
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mobileProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className={`glass-effect rounded-3xl p-6 hover:bg-white/15 transition-all ${
                    project.featured ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-semibold whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-500/10 border border-purple-400/30 rounded-full text-sm text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 text-purple-400">
              Hardware & Embedded Projects
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hardwareProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="glass-effect rounded-3xl p-6 hover:bg-white/15 transition-all"
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-semibold whitespace-nowrap">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-purple-500/10 border border-purple-400/30 rounded-full text-sm text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};
