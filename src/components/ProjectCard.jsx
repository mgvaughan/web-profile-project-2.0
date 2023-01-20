import React from 'react';
import { motion } from "framer-motion";
import reactTetris from '../../src/assets/React-Tetris-Thumbnail.png'

const ProjectCard = ({ thumbnail, cardTitle, description, skills, url }) => {
    return (
        <div className="shadow-xl hover:scale-105 ease-in duration-300 bg-[#E8E8E8]">
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
        </div>
    )
}

export default ProjectCard;