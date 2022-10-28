import {BsFillTelephoneFill} from "react-icons/bs"
import {MdEmail} from "react-icons/md"
import {AiFillLinkedin} from 'react-icons/ai'
import {useForm} from "react-hook-form"
import {motion} from 'framer-motion'

function Contact() {
    const {register, handleSubmit} = useForm()
    const onSubmit = (formData) => {
        window.location.href = `mailto:ssameer@mun.ca?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`
    }
  return (
    <div className="h-screen flex flex-col relative text-center max-w-7xl px-10 space-y-12 justify-center items-center mx-auto">
        <h3 className="absolute top-24 pl-2 uppercase tracking-[20px]">Contact</h3>
        <div className="relative pt-10 flex flex-col top-8">
            <h4 className="text-lg font-semibold">If you like what you see and want to work together, send me a message.</h4>
        </div>
        <motion.div 
        initial={{x: -200}}
        whileInView={{x: 0}}
        transition={{duration: 1}}
        className="flex flex-col gap-5">
            <div className="space-y-4">
                <div className="flex items-center justify-center">
                    <BsFillTelephoneFill className="text-[#2a78d1] h-5 w-5 animate-pulse"/>
                    <p className="px-6">7097301240</p>
                </div>
                <div className="flex items-center justify-center">
                    <MdEmail className="text-[#2a78d1] h-5 w-5 animate-pulse"/>
                    <p className="px-6">ssameer@mun.ca</p>
                </div>
                <div className="flex items-center justify-center">
                    <AiFillLinkedin className="text-[#2a78d1] h-6 w-6 animate-pulse"/>
                    <a href="http://linkedin.com/in/-sameer" target="_blank" rel="noreferrer"><p className="px-6">linkedin.com/in/-sameer</p></a>
                </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                <div className="flex space-x-2">
                    <input {...register('name')} placeholder="Name" className="contactInput" type="text" />
                    <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
                </div>
                <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
                <textarea {...register('message')} placeholder="Message" className="contactInput" />
                <button type="submit" className="bg-[#2a78d1] py-5 px-10 rounded-md text-white">Submit</button>
            </form>
        </motion.div>
    </div>
  )
}



export default Contact