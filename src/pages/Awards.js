import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

export const Awards = () => {
  const awards = [
    {
      head: 'Conducted',
      body:
        'Conducted one day Workshop on "Arduino IDE Coding and hardware connection" in VSKD School Sivakasi on 20-july-2022.',
    },
    {
      head: 'Conducted',
      body:
        'Conducted one day Workshop on "Texas Instruments Innovation" in AAA College of Engineering &Technology Sivakasi on 15-oct-2022.',
    },
    {
      head: 'Workshop',
      body:
        'Attended three days of Workshops on "Texas Instruments Innovation" conducted by the department of ECE held at AAA College of Engineering &Technology Sivakasi.',
    },
    {
      head: 'Workshop',
      body:
        'Attended a day Workshop on "IOT with Android APP" conducted by the department of ECE held at AAA College of Engineering &Technology Sivakasi on 30-April-2022.',
    },
    {
      head: 'Workshop',
      body:
        'Attended five days of Workshops on "E-Yantra Robotics" conducted by the department of ECE held at AAA College of Engineering &Technology Sivakasi from 9th December 2019 to 13th December 2019.',
    },
    {
      head: 'Symposium',
      body:
        'Presented a paper on "The Embedded" at AAA College of Engineering &Technology on 7th September 2018',
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
        <title>Awards & Achievements | Dhinesh Kumar S</title>
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
          Awards & Achievements
        </motion.h1>
        <motion.p
          className="text-center text-gray-300 text-lg mb-12 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          Recognition and accomplishments throughout my academic and professional
          journey.
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-3xl p-6 hover:bg-white/15 transition-all flex flex-col"
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-purple-400">
                  {award.head}
                </h3>
                <span className="text-3xl">
                  {award.head === 'Conducted' ? '🎓' : award.head === 'Workshop' ? '📚' : '🏆'}
                </span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {award.body}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
};

