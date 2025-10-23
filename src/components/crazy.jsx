import React from 'react'
import { motion } from "motion/react"

const Crazy = () => {
  return (
    <div className="mt-10 0 w-full h-120 flex flex-col items-center justify-center">
        <div className="w-[79%] h-80 relative bg-gradient-to-r from-orange-700 to-orange-400 rounded-2xl">
            <h2 className="font-osw  text-[#0f0f0f] tracking-[0.9px] font-black text-[38px] px-15 pt-14">UNLOCK SIGMA 9.0 TODAY</h2>
            <h3 className="text-black font-bold tracking-[0.9px] text-[15px] px-15 w-200">No need to pay full price — grab Sigma 9.0 by Apna College for way less!
            Get instant access to every video, project, and note.
            Stream easily, learn smoothly, and master coding at your own speed — all for one simple payment.</h3>
            <motion.img
            src="https://www.vape.gg/img/character.png" className="absolute right-0 bottom-0 " />
            <div className="px-15 pt-13">
                <motion.button 
                  whileHover={{
                  rotateX: 20,
                  rotateY: 20,
                  borderRadius: "20px",
                  }}
                  whileTap={{
                   y: 7
                  }}
                className=" tracking-[0.9px] bg-black p-2 px-9 rounded-[7px] flex items-center justify-center ">
                    Enroll Now
                    <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#FFF"><path d="M383-239v-482l241 241-241 241Z"/></svg>
                </motion.button>
                
            </div>
        </div>
    </div>
  )
}

export default Crazy