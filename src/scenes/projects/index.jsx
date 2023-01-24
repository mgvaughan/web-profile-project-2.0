import React from 'react'
import ProjectCard from '../../components/ProjectCard'
import mernAdminDashImg from '../../assets/mern-react-admin-dashboard.png'
import fitnessAppImg from '../../assets/typescript-react-fitness-application.png'
import reactPortfolioImg from '../../assets/react-portfolio-app.png'
import mernSocialMediaImg from '../../assets/mern-fullstack-social-media-app.png'
import adminDashImg from '../../assets/React-Admin-Dashboard.png'
import reactTetrisImg from '../../assets/React-Tetris-Thumbnail.png'
import javascriptTetrisImg from '../../assets/Javascript-Tetris-Thumbnail.png'
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.3 }
  }
};

const Projects = () => {
  return (
    <div id="projects" className='bg-[#f8f9fa] w-full lg:h-screen pt-24 pb-32'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full my-5'>
        <motion.div
                className='max-w-[1240px] mx-auto flex flex-col justify-center h-full my-5'
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5 }}
                variants={{
                    hidden: { opacity: 0, x: 0 },
                    visible: { opacity: 1, x: 0 }
                }}
            >
        <p className='py-4 text-5xl tracking-widest uppercase text-green font-bold my-5 text-center'>My Projects</p>
        </motion.div>
        <motion.div
          className="bg-[#f8f9fa] grid md:grid-cols-2 gap-10 my-5 mx-5 md:mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <ProjectCard
            thumbnail={mernAdminDashImg}
            cardTitle="Next.js Example Portfolio Website"
            description="The link below is to an example of a portfolio website I created using the Next.js framework. Building this project gave me an opportunity to build a good looking practice website using the Next.js framework.  It was a good project to build to help me better understand how useful nextjs is."
            skills="Next.js, React, Tailwind JavaScript"
            url="https://nextjs-portfolio-website-henna.vercel.app//"
          />
          <ProjectCard
            thumbnail={mernAdminDashImg}
            cardTitle="Fullstack Admin Dashboard"
            description="The link below is to an example of a fullstack admin dashboard I created using the MERN stack. This was a good project for me to get experience building because it gave me an opportunity to build a realistic a fullstack site with realistic data, and using the Redux library.  Website was deployed from using Render."
            skills="MongoDB, React, Redux, Express, Node.js, JavaScript"
            url="https://mern-fullstack-admin-dashboard.onrender.com"
          />
          <ProjectCard
            thumbnail={fitnessAppImg}
            cardTitle="Gym Website Using React/Typescript"
            description="The link below is to an example of a gym's website I created using React and Typescript. This was a good project for me to get experience building because it gave me an opportunity to build a realistic company website incorporating animations, and tailwindcss.  I also gained experience using react-hook-form, and with deploying from cloudflare."
            skills="React, Typescript, JavaScript, CSS, HTML"
            url="https://32cf7530.typescript-react-fitness-application.pages.dev/"
          />
          <ProjectCard
            thumbnail={reactPortfolioImg}
            cardTitle="Example Portfolio Website Using React"
            description="The link below is to an example of a portfolio website I created using React and Tailwind. In this project, I got to continue to practice using React while gaining more experience using darker styling choices and animations to build a pretty cool looking example portfolio website."
            skills="React, JavaScript, CSS, HTML"
            url="https://react-portfolio-app-mv.netlify.app/"
          />
          <ProjectCard
            thumbnail={mernSocialMediaImg}
            cardTitle="MERN Fullstack Social Media App"
            description="The link below is to an example of a social media website I created using the MERN stack. In this project, I got experience using Mongo as well as deploying the site using Render. I also continued to increase my experience with Authentication/Authorization, React, Node.js and Tailwind stylings."
            skills="Mongo, Express, React, Node.js, JavaScript, CSS"
            url="https://fullstack-social-media-website.onrender.com/"
          />
          <ProjectCard
            thumbnail={adminDashImg}
            cardTitle="Admin Dashboard Using React"
            description="The link below is to an example of an admin dashboard I created using React. This project was a lot of fun to create because it really helped me to gain understanding on higher level usage of React library, as well as give me experience incorporating light/dark modes, as well as with using Material UI, Nivo Charts, Formik, Yup, Full Calendar, and Data Grid."
            skills="React, JavaScript, CSS, HTML"
            url="https://react-admin-dashboard-mv.netlify.app/"
          />
          <ProjectCard
            thumbnail={reactTetrisImg}
            cardTitle="Tetris Game Using React"
            description="The link below is to a version of Tetris that I created using React. This project was a lot of fun to create because it really helped me to gain understanding utilizing React components to create a relatively complex program.  I find building games are a great way to challenge your problem solving skills while developing. Use up arrow to rotate!"
            skills="React, Node.js/Express, JavaScript, CSS, HTML"
            url="https://react-tetris-mv.herokuapp.com/"
          />
          <ProjectCard
            thumbnail={javascriptTetrisImg}
            cardTitle="Tetris Game Using Javascript"
            description="The link below is to a version of Tetris that I created using Javascript. This project was a good one for me to experience, because it helped develop a sense of what can be achieved with just javascript and CSS. While seemingly a basic looking game, it was great to learn how to rotate the blocks through array/matrix manipulation! Use q & w to rotate!"
            skills="JavaScript, Node.js/Express, CSS, HTML"
            url="https://javascript-tetris-mv.herokuapp.com/"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default Projects