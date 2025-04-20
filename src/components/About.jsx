import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({index, title, icon}) => {
  return (
    
    <Tilt className="xs:w-[250px] w-full">
      <motion.div 
      variants={fadeIn("right", "spring", 0.5*index, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
        options={{
          max:45,
          scale:1,
          speed: 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-16 h-16 object-contain'/>
          <h3 className='text-white text-[20px] font-bold text-center '>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.sectionHeadText}>Overview.</h2>
    </motion.div>

    <motion.p variants={fadeIn("", "", 0.1, 1)} 
    className='mt-4 text-secondary, text-[17px] max-w-3xl leading-[30px] '>
    I'm a skilled and passionate software developer with detail-oriented seeking to leverage my skills in full
stack development, API integration, and design skills to contribute to innovative and scalable 
solutions. I am eager to join a dynamic team where I can 
apply my expertise in JavaScript frameworks like React.js, Node.js, React-Native and Three.js and database 
management, and Agile methodologies to drive 
technical excellence and enhance user experiences. 
Talented Software Developer with over 2 years of 
experience in coding, debugging, and project 
management. Proficient in building scalable, efficient 
applications while working in Agile and Scrum 
frameworks. I am skilled in integrating APIs, database management, 
and designing UI/UX. With my strong expertise in front-end and back-end 
technologies with a focus on full-stack development, that solve real-world problems. Let's work together to bring your ideas to life!
    </motion.p>
    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((service, index) => (
        <ServiceCard key={service.title} index={index} {...service}/>
      ))}
    </div>
    </>
  )
}

export default SectionWrapper(About, "about")
