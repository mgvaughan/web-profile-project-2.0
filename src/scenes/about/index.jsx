import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaFileAlt } from 'react-icons/fa'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import resume from '../../assets/Michael-Vaughan-Resume.pdf'

const Link = ({ page, icon, selectedPage, setSelectedPage }) => {
  const lowerCasePage = page.toLowerCase();

  return (
    <AnchorLink className={`${selectedPage === lowerCasePage ? "text-yellow" : ""}`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      <AiOutlineMail size={20} />
    </AnchorLink>
  )
}

const About = ({ selectedPage, setSelectedPage }) => {
  return (
    <div id='about' className="w-full text-center lg:h-screen pt-24 pb-32">
      <div className="w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="">
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
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-black'>
              <a href="https://www.linkedin.com/in/michael-vaughan-pe-939460227/">
                <FaLinkedinIn size={20} />
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  text-black'>
              <a href="https://github.com/mgvaughan">
                <FaGithub size={20} />
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  text-black'>
              <Link
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage}
              >
                <AiOutlineMail size={20} />
              </Link>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300  text-black'>
              <a href={resume} target="_blank">
                <FaFileAlt size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About