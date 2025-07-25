import { motion } from 'framer-motion';
import {
  FaInstagram,
  FaLinkedin,
  FaFacebook,
  FaYoutube,
  FaXTwitter,
} from 'react-icons/fa6';

export default function ContactSection() {
  return (
    <section className="bg-black text-white py-16 px-4" id="contact">
      {/* Heading */}
      <div className="text-center mb-12">
        <motion.h2
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl font-bold"
        >
          CONNECT WITH <span className="text-yellow-400">BBKV</span>
        </motion.h2>
        <p className="text-gray-400 mt-2 text-sm md:text-base">
          Let’s collaborate, chat, or just say hi!
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="w-full px-4 py-3 rounded-lg bg-zinc-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <button
            type="submit"
            className="bg-yellow-400 hover:bg-yellow-300 text-black font-bold py-3 px-6 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </motion.form>

        {/* Info + Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="space-y-8"
        >
          {/* Info */}
          <div>
            <h4 className="text-lg font-semibold">Email</h4>
            <p className="text-gray-400">hello@bbkvproductions.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Phone</h4>
            <p className="text-gray-400">+91 98765 12345</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Location</h4>
            <p className="text-gray-400">Mumbai, Maharashtra, India</p>
          </div>

          {/* Social Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/bbkv-productions"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 p-4 rounded-xl transition"
            >
              <FaLinkedin size={20} className="text-blue-500" />
              <span className="font-medium text-sm">LinkedIn</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/bhuvan.bam22"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 p-4 rounded-xl transition"
            >
              <FaInstagram size={20} className="text-pink-500" />
              <span className="font-medium text-sm">Instagram</span>
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/bbkivines"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 p-4 rounded-xl transition"
            >
              <FaFacebook size={20} className="text-blue-600" />
              <span className="font-medium text-sm">Facebook</span>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/bbkivines"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 p-4 rounded-xl transition"
            >
              <FaYoutube size={20} className="text-red-600" />
              <span className="font-medium text-sm">YouTube</span>
            </a>

            {/* X / Twitter */}
            <a
              href="https://twitter.com/bhuvan_bam"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-zinc-800 hover:bg-zinc-700 p-4 rounded-xl transition"
            >
              <FaXTwitter size={20} className="text-white" />
              <span className="font-medium text-sm">X / Twitter</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
