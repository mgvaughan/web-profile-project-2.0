import React from 'react';
import { motion } from "framer-motion";

const ProjectCard = ({ thumbnail, cardTitle, description, skills, url }) => {
    return (
        <motion.div 
        className="shadow-xl hover:scale-105 ease-in duration-300 bg-[#E8E8E8] mx-5"
        variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 }
        }}
        >
            <p className="text-center text-black font-bold text-3xl py-2">{cardTitle}</p>
            <div className='m-auto'>
                <img
                    src={thumbnail}
                    alt='/'
                />
                <div>
                    <p className="py-2 px-3 text-green font-bold">Description: <span className="text-black font-normal">{description}</span></p>
                    <p className="py-2 px-3 text-green font-bold">Technical Skills Used: <span className="text-black font-normal">{skills}</span></p>
                </div>
                <button className="bg-green py-2 w-full">
                    <a href={url} className="text-center btn btn-secondary">Website Link</a>
                </button>

            </div>
        </motion.div>
    )
}

export default ProjectCard;