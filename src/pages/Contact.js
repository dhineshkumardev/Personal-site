import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

export const Contact = () => {
  const LinkedInIcon = () => (
    <svg
      className="w-12 h-12 text-purple-400 group-hover:text-pink-400 group-hover:scale-110 transition-all"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );

  const EmailIcon = () => (
    <svg
      className="w-12 h-12 text-purple-400 group-hover:scale-110 transition-transform"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );

  const contactInfo = [
    {
      label: 'Email',
      value: 'dhineshkumarmofficial@gmail.com',
      icon: <EmailIcon />,
      link: 'mailto:dhineshkumarmofficial@gmail.com',
    },
    {
      label: 'LinkedIn',
      value: 'Connect with me',
      icon: <LinkedInIcon />,
      link: 'https://www.linkedin.com/in/dhinesh-kumar-s-55402a1b2/',
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
        <title>Contact | Dhinesh Kumar S</title>
      </Helmet>

      <motion.section
        className="max-w-6xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-center mb-6 text-gradient"
          variants={itemVariants}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          className="text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          I'm always open to discussing new projects, creative ideas, or
          opportunities to be part of your visions. Feel free to reach out!
        </motion.p>

        <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target={info.link.startsWith('http') ? '_blank' : undefined}
              rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="glass-effect rounded-3xl p-8 text-center hover:bg-white/15 transition-all group"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex justify-center mb-4">{info.icon}</div>
              <h3 className="text-xl font-bold text-purple-400 mb-2">
                {info.label}
              </h3>
              <p className="text-gray-300 group-hover:text-white transition-colors">
                {info.value}
              </p>
            </motion.a>
          ))}
        </div>

        <motion.div
          className="glass-effect rounded-3xl p-8 md:p-12"
          variants={itemVariants}
        >
          <h2 className="text-3xl font-bold mb-6 text-purple-400">
            Let's Work Together
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            As a Freelance Full Stack Developer and Designated Partner at
            ThreePilot LLP, I'm passionate about creating innovative mobile and web
            solutions. Whether you need a mobile app, website, landing page, personal site,
            e-commerce platform, consultation, or collaboration on a project, I'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="mailto:dhineshkumarmofficial@gmail.com"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send Email
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/dhinesh-kumar-s-55402a1b2/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 border-2 border-purple-400 text-purple-400 font-semibold rounded-full hover:bg-purple-400/10 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect on LinkedIn
            </motion.a>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
};

