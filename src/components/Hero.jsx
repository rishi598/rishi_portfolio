import { motion } from "framer-motion"

import { styles } from "../styles"
import { ComputersCanvas } from "./canvas"

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"/>
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#915eff] ">Rishikesh</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`} >I develop 3D visuals, user <br className="sm:block hidden"/> interfaces and web applications</p>

          <div className="mt-4 mb-75 flex flex-wrap sm:flex-nowrap gap-5 justify-center sm:justify-start z-10 relative">
  <a 
    href="#contact" 
    download 
    className="bg-[#915eff] text-white font-medium px-6 py-3 rounded-full cursor-pointer hover:bg-[#7c4dff] transition-colors duration-300"
  >
    Let's Connect
  </a>

{/*   <a
    href="#contact"
    className="border-2 border-[#915eff] text-[#915eff] font-medium px-6 py-3 rounded-full cursor-pointer hover:bg-[#915eff] hover:text-white transition-colors duration-300"
  >
    Hire Me
  </a> */}
</div>
        </div>
      </div>
      <ComputersCanvas/>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div 
            animate={{
              y: [0, 24, 0]
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop'
            }}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
            />

           
          </div>
        </a>
      </div>
      </section>
  )
}

export default Hero
