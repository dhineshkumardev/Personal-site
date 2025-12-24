import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

export const Experience = () => {
  const experiences = [
    // {
    //   title: 'Designated Partner',
    //   company: 'ThreePilot LLP',
    //   period: 'Present',
    //   type: 'Partnership',
    //   description: [
    //     'Leading full-stack development initiatives and strategic partnerships',
    //     'Collaborating with clients to deliver innovative mobile and web solutions',
    //     'Managing project delivery and client relationships',
    //   ],
    //   icon: '🚀',
    // },
    {
      title: 'Freelance Full Stack Developer',
      company: 'Self Employed',
      period: 'Present',
      type: 'Freelance',
      description: [
        'Developed cross-platform mobile applications using React Native',
        'Built responsive websites, landing pages, and personal sites',
        'Created e-commerce solutions with modern web technologies',
        'Delivered full-stack solutions with focus on performance and UX',
      ],
      icon: '💼',
    },
    {
      title: 'Mobile App Developer',
      company: 'React Native Specialist',
      period: '2 Years Experience',
      type: 'Developer',
      description: [
        'Specialized in React Native for iOS and Android development',
        'Built responsive and performant mobile applications',
        'Integrated third-party APIs and services',
        'Implemented state management solutions (Redux, Context API)',
      ],
      icon: '📱',
    },
  ];

  const techStack = [
    'React Native',
    'React',
    'Git',
    'PHP (Laravel)',
    'REST APIs',
    'MedusaJS',
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <Helmet>
        <title>Experience | Dhinesh Kumar S</title>
      </Helmet>

      <motion.section
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-center mb-12 text-gradient"
          variants={itemVariants}
        >
          Experience
        </motion.h1>

        <div className="relative">
          {/* Timeline line - positioned to align with circle centers */}
          <div className="absolute left-10 md:left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 to-pink-500" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-24 md:pl-36"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                {/* Timeline circle - centered on the timeline line */}
                <div className="absolute top-0 left-10 md:left-12 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center glass-effect rounded-full border-4 border-purple-400 z-10 -translate-x-1/2">
                  <span className="text-4xl md:text-5xl">{exp.icon}</span>
                </div>
                <div className="glass-effect rounded-3xl p-6 md:p-8 hover:bg-white/15 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {exp.title}
                      </h3>
                      <h4 className="text-xl text-purple-400 font-semibold">
                        {exp.company}
                      </h4>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-2">
                      <span className="px-4 py-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full text-sm font-semibold">
                        {exp.period}
                      </span>
                      <span className="px-4 py-1 bg-purple-500/20 text-purple-400 rounded-full text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-gray-300 flex items-start gap-3"
                      >
                        <span className="text-purple-400 mt-1">▸</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-16 text-center"
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold mb-8 text-purple-400">Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, idx) => (
              <motion.span
                key={tech}
                className="px-6 py-3 glass-effect rounded-full font-semibold text-white hover:bg-purple-500/20 hover:border-purple-400 transition-all cursor-default"
                whileHover={{ scale: 1.1, y: -3 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};
