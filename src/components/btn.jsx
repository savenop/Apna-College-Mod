import { motion } from "motion/react"

const Btn = () => {
  return (
    <div className="px-41 mt-15 flex cursor-pointer">
        <motion.button 
        whileHover={{
        rotateX: 20,
        rotateY: 20,
        borderRadius: "20px",
        }}
        whileTap={{
          y: 7
        }}
        className="bg-orange-400 py-2 px-10 text-yellow-100 font-black text-xl flex items-center gap-3 cursor-pointer">
            Enroll Now
        <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="#FFF"><path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z"/></svg>
        </motion.button>
    </div>
  )
}

export default Btn