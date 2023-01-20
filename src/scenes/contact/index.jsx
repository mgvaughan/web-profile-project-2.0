import { useForm } from 'react-hook-form';
import profilePic from '../../assets/IMG_1245.jpg'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaFileAlt } from 'react-icons/fa'
import resume from '../../assets/Michael-Vaughan-Resume.pdf'

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
      e.preventDefault();
    }
  }

  return (
    <div id="contact" className="bg-[#c8c8c8] mx-auto pt-24 pb-32 w-full p-2">
      <div className="w-[90%] mx-auto">
        <p className="py-4 text-5xl tracking-widest uppercase text-green font-bold my-5 underline text-center">Contact Me</p>
        <div className='mt-10 grid md:grid-cols-2 justify-between gap-8 md:flex'>

          <div className="md:w-[60%] before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
            <img
              className="w-full rounded-lg"
              alt="profile-pic"
              src={profilePic}
            />
          </div>

          <div className="mt-10 md:mt-0">
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
                <p className="mt-1 text-green">
                  {errors.name.type === 'required' & 'This field is required.'}
                  {errors.name.type === 'maxLength' & 'Max length is 100 characters.'}
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
                <p className="mt-1 text-green">
                  {errors.email.type === "required" && "This field is required"}
                  {errors.email.type === "pattern" && "Invalid email address."}
                </p>
              )}

              <textarea
                className={inputStyles}
                placeholder="MESSAGE"
                rows={10}
                cols={50}
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-green">
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
            <div className="flex items-center justify-between max-w-[250px] m-auto py-4">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-black bg-[#f8f9fa]'>
                <a href="https://www.linkedin.com/in/michael-vaughan-pe-939460227/">
                  <FaLinkedinIn size={20} />
                </a>
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-black bg-[#f8f9fa]'>
                <a href="https://github.com/mgvaughan">
                  <FaGithub size={20} />
                </a>
              </div>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 text-black bg-[#f8f9fa]'>
                <a href={resume} target="_blank">
                  <FaFileAlt size={20} />
                </a>
              </div>
            </div>
          </div>


        </div>
      </div >

    </div >
  )
}

export default Contact