import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-4 relative overflow-hidden" style={{ minHeight: '100vh' }}>
      <Helmet>
        <title>Dhinesh Kumar S | Full Stack Developer & Freelancer</title>
        <meta
          name="description"
          content="Full Stack Developer specializing in mobile apps, websites, landing pages, and e-commerce solutions with 2 years of experience. Freelancer and Designated Partner at ThreePilot LLP."
        />
      </Helmet>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <motion.section
        className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="space-y-6" variants={itemVariants}>
          <motion.h1
            className="text-2xl md:text-3xl text-purple-400 font-medium"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            Hi, I'm
          </motion.h1>
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-gradient"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Dhinesh Kumar S
          </motion.h2>
          <motion.div
            className="text-2xl md:text-3xl font-semibold text-white"
            variants={itemVariants}
          >
            <span className="text-purple-400">Full Stack Developer</span>
            <span className="inline-block w-1 h-8 bg-purple-400 ml-2 animate-pulse" />
          </motion.div>
          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl"
            variants={itemVariants}
          >
            Full Stack Developer with{' '}
            <span className="text-purple-400 font-semibold">2 years</span> of
            experience building mobile apps, websites, landing pages, personal sites,
            and e-commerce solutions. Freelancer and Designated Partner at{' '}
            <span className="text-purple-400 font-semibold">ThreePilot LLP</span>.
          </motion.p>
          <motion.div
            className="flex flex-wrap gap-4 pt-4"
            variants={itemVariants}
          >
            <Link
              to="/projects"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all transform hover:scale-105"
            >
              View My Work
            </Link>
            <Link
              to="/contact"
              className="px-8 py-3 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400/10 transition-all transform hover:scale-105"
            >
              Get In Touch
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center items-center"
          variants={itemVariants}
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <div className="relative w-80 h-80 md:w-96 md:h-96">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl opacity-30 animate-pulse" />
            <img
              src="/image/photo.jpg"
              alt="Dhinesh Kumar"
              className="relative w-full h-full object-cover rounded-full border-4 border-purple-400/30 shadow-2xl"
              style={{ objectPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20 rounded-full pointer-events-none" />
          </div>
        </motion.div>
      </motion.section>

      {/* Scroll Indicator - Navigate to About */}
      <Link
        to="/about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors cursor-pointer z-20 group"
      >
        <motion.span
          className="text-sm font-medium"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          Explore More
        </motion.span>
        <motion.span
          className="text-3xl text-purple-400 group-hover:scale-110 transition-transform"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          ↓
        </motion.span>
      </Link>
    </div>
  );
};
