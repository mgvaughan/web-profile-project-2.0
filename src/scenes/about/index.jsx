import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaFileAlt } from 'react-icons/fa'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Michael-Vaughan-Resume.pdf'
import { motion } from "framer-motion";

const Link = ({ page, icon, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  text-black'>
              <AiOutlineMail size={20} />
            </div>
    </AnchorLink>
  )
}

const About = ({ selectedPage, setSelectedPage }) => {
  return (
    <div id='about' className="w-full text-center lg:h-screen pt-24 pb-32">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full my-5">
        <div>
          <motion.div
            className="w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <p className="text-green  max-w-[70%] m-auto text-4xl font-bold">
              Hi, I'm Michael
            </p>
            <p className="text-green  max-w-[70%] m-auto text-4xl font-bold">A Software Engineer</p>
            <p className="text-green  max-w-[70%] m-auto text-2xl my-4">
              I am a licensed Professional Engineer that worked in the Civil Engineering field for 10 years, and project managed several heavy construction projects through their life cycle.
              While taking a Coursera Python course in 2022, I discovered that software development would not only become a hobby, but a passion.
              Since then, I have completed a full stack engineering program by Covalence, and I am continuing to develop my software
              engineering skills by building freelance and personal projects. I am dedicated to learning, and have the soft skills that would make me a great member to any team.
            </p>
          </motion.div>
          <motion.div
            className="flex items-center justify-between max-w-[330px] m-auto py-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            <a href="https://www.linkedin.com/in/michael-vaughan-pe-939460227/">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-black'>
                <FaLinkedinIn size={20} />
              </div>
            </a>
            <a href="https://github.com/mgvaughan">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  text-black'>
                <FaGithub size={20} />
              </div>
            </a>
            <Link
              page="Contact"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              />
            
          <a href={resume} target="_blank">
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  text-black'>
              <FaFileAlt size={20} />
            </div>
          </a>
        </motion.div>
      </div>
    </div>
    </div >
  )
}

export default About