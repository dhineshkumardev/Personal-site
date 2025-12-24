import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

export const About = () => {
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

  const skills = [
    'React Native',
    'React',
    'Git',
    'PHP (Laravel)',
    'REST APIs',
    'MedusaJS',
    'Redux',
    'Node.js'
  ];

  const personalDetails = [
    { label: 'Languages', value: 'Tamil, English' },
    { label: 'Hobbies', value: 'Learning something new, Building apps' },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16 px-4">
      <Helmet>
        <title>About | Dhinesh Kumar S</title>
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
          About Me
        </motion.h1>

        <div className="space-y-12">
          <motion.div
            className="glass-effect rounded-3xl p-8 md:p-12 grid md:grid-cols-[300px_1fr] gap-8 items-center"
            variants={itemVariants}
          >
            <div className="flex justify-center">
              <div className="relative w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30" />
                <img
                  src="/image/photo.jpg"
                  alt="Dhinesh Kumar"
                  className="relative w-full h-full object-cover rounded-3xl border-4 border-purple-400/30 shadow-2xl"
                  style={{ objectPosition: 'center' }}
                />
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 rounded-3xl pointer-events-none" />
              </div>
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">
                Dhinesh Kumar S
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Full Stack Developer with{' '}
                <span className="text-purple-400 font-semibold">2 years</span> of
                experience specializing in mobile app development, web development, and
                e-commerce solutions. I love building cross-platform mobile applications,
                responsive websites, landing pages, and personal sites that provide
                seamless user experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Currently working as a{' '}
                <span className="text-purple-400 font-semibold">Freelancer</span>.
                {/* Currently working as a{' '}
                <span className="text-purple-400 font-semibold">Freelancer</span> and
                serving as a{' '}
                <span className="text-purple-400 font-semibold">
                  Designated Partner
                </span>{' '}
                at ThreePilot LLP, where I contribute to innovative full-stack
                solutions and help businesses achieve their digital transformation
                goals. */}
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-6 text-purple-400">
              Skills & Technologies
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  className="glass-effect rounded-xl p-4 text-center font-semibold text-white hover:bg-purple-500/20 hover:border-purple-400 transition-all cursor-default"
                  whileHover={{ scale: 1.05, y: -5 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold mb-8 text-purple-400 text-center">
              Additional Information
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {personalDetails.map((detail, index) => (
                <motion.div
                  key={detail.label}
                  className="glass-effect rounded-2xl p-6 hover:bg-white/15 transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl">
                      {detail.label === 'Languages' ? '🌐' : '🎯'}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 uppercase tracking-wide mb-1">
                        {detail.label}
                      </p>
                      <p className="text-lg font-semibold text-white">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};
