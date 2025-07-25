import { motion } from 'framer-motion';
import { FaAward } from 'react-icons/fa';

const accolades = [
  {
    year: '2015',
    title: 'Silver Creator Award',
    description: 'Awarded by YouTube for surpassing 100K subscribers.',
  },
  {
    year: '2016',
    title: 'Gold Creator Award',
    description: 'Crossed 1 million subscribers on YouTube.',
  },
  {
    year: '2016',
    title: 'WebTVAsia Award',
    description: 'Won Most Popular Channel at WebTVAsia Awards.',
  },
  {
    year: '2018',
    title: 'Diamond Creator Award',
    description: 'Achieved 10 million subscribers milestone on YouTube.',
  },
  {
    year: '2019',
    title: 'Filmfare Award – Plus Minus',
    description: 'Won Best Short Film alongside Divya Dutta.',
  },
  {
    year: '2019',
    title: 'World Blogger Award',
    description: 'Honored as Global Entertainer Of The Year.',
  },
  {
    year: '2020',
    title: 'Forbes 30 Under 30 Asia',
    description: 'Recognized in the Entertainment category.',
  },
  {
    year: '2022',
    title: 'IWM Digital Awards',
    description: 'Breakthrough Performance (Male) for "Dhindora".',
  },
  {
    year: '2023',
    title: 'IWM Digital Awards',
    description: 'Most Popular Actor for "Taaza Khabar".',
  },
  {
    year: '2023',
    title: 'Bollywood Hungama Style Icon',
    description: 'Most Stylish Digital Entertainer (Male).',
  },
  {
    year: '2023',
    title: 'Creators United',
    description: 'Won Star Creator Of The Year.',
  },
];

export default function AwardsTimeline() {
  return (
    <section id='accolades' className="bg-black text-white py-16 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold"
        >
          BBKV <span className="text-yellow-400">'ACCOLADES'</span>
        </motion.h2>
      </div>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400" />

        <div className="space-y-16">
          {accolades.map((item, index) => {
            const isRight = index % 2 === 0;

            return (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-center ${isRight ? 'md:justify-start' : 'md:justify-end'} w-full`}
              >
                {/* Content Box */}
                <motion.div
                  initial={{ opacity: 0, x: isRight ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className={`bg-zinc-900 rounded-xl shadow-xl p-6 w-full md:w-[calc(50%-2rem)] z-10 ${isRight ? 'md:order-1' : 'md:order-2'}`}
                >
                  <h3 className="text-xl font-semibold text-yellow-400">{item.title}</h3>
                  <p className="text-sm text-gray-300 mt-2">{item.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{item.year}</p>
                </motion.div>

                {/* Icon */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black w-10 h-10 rounded-full flex items-center justify-center z-20">
                  <FaAward />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
