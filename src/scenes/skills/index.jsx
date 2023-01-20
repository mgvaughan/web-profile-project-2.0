import React from 'react'
// import {
//   DiCss3,
//   DiGithubBadge,
//   DiHeroku,
//   DiHtml5,
//   DiJsBadge,
//   DiMongodb,
//   DiMysql,
//   DiNodejs,
//   DiPython,
//   DiReact
// } from "react-icons/di"

import htmlLogo from '../../assets/skills/html.png'
import cssLogo from '../../assets/skills/css.png'
import githubLogo from '../../assets/skills/github.png'
import javascriptLogo from '../../assets/skills/javascript.png'
import mongoLogo from '../../assets/skills/mongo.png'
import nextjsLogo from '../../assets/skills/nextjs.png'
import reactLogo from '../../assets/skills/react.png'
import tailwindLogo from '../../assets/skills/tailwind.png'
import nodeLogo from '../../assets/skills/node.png'


const Skills = () => {
    return (
        <div id='skills' className='bg-[#c8c8c8] w-full lg:h-screen pt-24 pb-32 '>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full my-5'>
                <p className='py-4 text-5xl tracking-widest uppercase text-green font-bold my-5 underline text-center'>Main Skills</p>
                <div className='bg-[#c8c8c8] grid md:grid-cols-4 lg:grid-cols-4 gap-8 mb-5'>


                    <div className='bg-[#f8f9fa] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='justify-center items-center flex flex-col'>
                            <div className='m-auto'>
                                <img
                                    src={htmlLogo}
                                    width='175'
                                    height='175'
                                    alt='/'
                                />
                            </div>
                            <div className="text-green flex flex-col items-center justify-center mt-2 font-bold">
                                <p>HTML</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#f8f9fa] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='justify-center items-center flex flex-col'>
                            <div className='m-auto'>
                                <img
                                    src={cssLogo}
                                    width='175'
                                    height='175'
                                    alt='/'
                                />
                            </div>
                            <div className="text-green flex flex-col items-center justify-center font-bold mt-2">
                                <h3>CSS</h3>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#f8f9fa] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='justify-center items-center flex flex-col'>
                            <div className='m-auto'>
                                <img
                                    src={javascriptLogo}
                                    width='175'
                                    height='175'
                                    alt='/'
                                />
                            </div>
                            <div className="text-green flex flex-col items-center justify-center font-bold mt-2">
                                <h3>Javascript</h3>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#f8f9fa] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='justify-center items-center flex flex-col'>
                            <div className='m-auto'>
                                <img
                                    src={reactLogo}
                                    width='175'
                                    height='175'
                                    alt='/'
                                />
                            </div>
                            <div className="text-green flex flex-col items-center justify-center font-bold mt-2">
                                <h3>React</h3>
                            </div>
                        </div>
                    </div>



                    <div className='bg-[#f8f9fa] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='justify-center items-center flex flex-col'>
                            <div className='m-auto'>
                                <img
                                    src={mongoLogo}
                                    width='175'
                                    height='175'
                                    alt='/'
                                />
                            </div>
                            <div className="text-green flex flex-col items-center justify-center font-bold mt-2">
                                <h3>MongoDB</h3>
                            </div>
                        </div>
                    </div>


                    <div className='bg-[#f8f9fa] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='justify-center items-center flex flex-col'>
                            <div className='m-auto'>
                                <img
                                    src={nodeLogo}
                                    width='175'
                                    height='175'
                                    alt='/'
                                />
                            </div>
                            <div className="text-green flex flex-col items-center justify-center font-bold mt-2">
                                <h3>Node</h3>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#f8f9fa] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='justify-center items-center flex flex-col'>
                            <div className='m-auto'>
                                <img
                                    src={nextjsLogo}
                                    width='175'
                                    height='175'
                                    alt='/'
                                />
                            </div>
                            <div className="text-green flex flex-col items-center justify-center font-bold mt-2">
                                <h3>Next.js</h3>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#f8f9fa] p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='justify-center items-center flex flex-col'>
                            <div className='m-auto'>
                                <img
                                    src={tailwindLogo}
                                    width='175'
                                    height='175'
                                    alt='/'
                                />
                            </div>
                            <div className="text-green flex flex-col items-center justify-center font-bold mt-2">
                                <h3>Tailwind</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills