// src/components/AboutUs.jsx
import { motion } from 'framer-motion'
import bbkvTeam from '../assets/bbkv-team.png'
import rohitImg from '../assets/rohit-raj.png'

export default function AboutUs() {
  return (
    <section id='about' className="w-full">
      {/* TOP HEADING – THE BACKSTORY */}
      <div className="w-full bg-black py-12 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          THE <span className="text-yellow-400 cursor-target">BACKSTORY</span>
        </motion.h2>
      </div>

      {/* SECTION 1 – BHUVAN "BAM" */}
      <div className="w-full bg-dark py-16 px-6 md:px-20" id="bhuvan">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              BHUVAN <span className="text-yellow-400">“BAM”</span>
            </h2>

            <p className="text-gray-400 text-1xl leading-relaxed mb-6">
              BBKV Productions was born from the mind of Bhuvan Bam — one of India’s most beloved digital storytellers. With roots in YouTube comedy, Bhuvan expanded his creative universe into producing short films, web shows, and more.
            </p>

            <p className="text-gray-400 text-1xl leading-relaxed mb-6">
              His breakthrough with “Plus Minus” and “Dhindora” brought indie storytelling into the mainstream, all while maintaining an authentic, heartfelt connection with millions of viewers.
            </p>

            <p className="text-gray-400 text-1xl leading-relaxed">
              BBKV is a reflection of Bhuvan’s vision — where raw emotion, humor, and truth converge into powerful cinematic moments.
            </p>
          </motion.div>

          {/* Image Content */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={bbkvTeam}
              alt="BBKV Team"
              className="cursor-target w-full h-auto rounded-xl shadow-lg"
            />
          </motion.div>
        </div>
      </div>

      {/* SECTION 2 – ROHIT "RAJ" */}
      <div className="w-full bg-black py-16 px-6 md:px-20" id="rohit">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Image on the left */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src={rohitImg}
              alt="Rohit Raj"
              className="cursor-target w-full h-auto rounded-xl shadow-xl"
            />
          </motion.div>

          {/* Text on the right */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              ROHIT <span className="text-yellow-400">“RAJ”</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Behind every successful creator is a visionary — and for BBKV, that's Rohit Raj. The co-founder, executor, and manager who took Bhuvan’s ideas and built an empire around them.
              <br /><br />
              From logistics to creative direction, Rohit plays a crucial role in maintaining the authenticity of BBKV while scaling it as a serious player in India’s entertainment scene.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
