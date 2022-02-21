import React from 'react'
import { motion } from 'framer-motion'

import { images } from "../../constants"
import "./About.scss"

const abouts = [
  {title: "Web Development", description: "I am a passionate web developer.", imgUrl: images.about01},
  {title: "Frontend Development", description: "With React-js , Next-js and more .", imgUrl: images.about02},
  {title: "Backend Development", description: "Node-js with MongoDb noSQL database and Express server.", imgUrl: images.about04},  
  {title: "UI/UX", description: "I like Create and improve interfaces and Designs.", imgUrl: images.about03},
]

const About = () => {
  return (
    <>
      <h2 className="head-text">
      I Know That &nbsp;
      <span>Good Development</span>
      <br />
      Means &nbsp;
      <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <h2 className="p-text" style={{ marginTop: 10 }}>{about.description}</h2>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About