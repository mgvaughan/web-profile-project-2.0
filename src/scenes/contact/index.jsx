import { useForm } from 'react-hook-form';
import profilePic from '../../assets/IMG_1245.jpg'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaFileAlt } from 'react-icons/fa'
import resume from '../../assets/Michael-Vaughan-Resume.pdf'
import { motion } from "framer-motion";

const Contact = () => {
  const inputStyles = 'mb-5 w-full rounded-lg bg-[#f8f9fa] px-5 py-3 placeholder-black text-black';

  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault()
    }
  };

  return (
    <div id="contact" className="bg-[#c8c8c8] w-full lg:h-screen pt-24 pb-32">
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full my-5'>

        <motion.div
          className="w-[90%] mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <p className="py-4 text-5xl tracking-widest uppercase text-green font-bold my-5 text-center">Contact Me</p>
        </motion.div>


        <div className='mt-10 grid md:grid-cols-2 justify-between gap-8 md:flex mx-5 md:mx-auto'>

          <motion.div className="md:w-[60%] md:mx-auto mx-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <img
              className="w-full rounded-lg"
              alt="profile-pic"
              src={profilePic}
            />
            <div className="flex items-center justify-between max-w-[250px] mx-auto py-4 mt-2">
              <a href="https://www.linkedin.com/in/michael-vaughan-pe-939460227/">
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-black bg-[#f8f9fa]'>
                  <FaLinkedinIn size={20} />
                </div>
              </a>
              <a href="https://github.com/mgvaughan">
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-black bg-[#f8f9fa]'>
                  <FaGithub size={20} />
                </div>
              </a>
              <a href={resume} target="_blank">
                <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-black bg-[#f8f9fa]'>
                  <FaFileAlt size={20} />
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="mx-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}
          >
            <form
              target="_blank"
              onSubmit={onSubmit}
              action="https://formsubmit.co/29d84377024a9c28ed398a076ffe0b48"
              method="POST"
            >
              <input
                className={inputStyles}
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-red-600">
                  {errors.name.type === "required" && "This field is required."}
                  {errors.name.type === "maxLength" && "Max length is 100 characters."}
                </p>
              )}

              <input
                className={inputStyles}
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-red-600">
                  {errors.email.type === "required" && "This field is required."}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={15}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-red-600">
                  {errors.message.type === "required" && "This field is required."}
                  {errors.message.type === "maxLength" && "Max length is 2000 characters."}
                </p>
              )}

              <button
                type="submit"
                className="text-black w-full rounded-lg bg-yellow px-20 py-3 ease-in duration-300 hover:scale-105"
              >
                SUBMIT
              </button>

            </form>

          </motion.div>


        </div>
      </div>

    </div >
  )
}

export default Contact