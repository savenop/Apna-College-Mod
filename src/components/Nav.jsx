import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const Nav = () => {
  return (
    <div className="flex w-full h-[100px] items-center justify-between px-40 text-center z-10 bg-white/0 backdrop-blur-[20px] ">
      <div className="text-2xl font-black flex gap-1 cursor-pointer">
        <h1>Apna</h1>
        <h1 className="text-orange-400">College</h1>
      </div>

      <motion.div className="flex gap-13 items-center justify-center font-bold tracking-wider">
        <Link to="/"><h3 className="hover:text-gray-400 cursor-pointer">Home</h3></Link>
        <h3 className="hover:text-gray-400 cursor-pointer">Features</h3>
        <h3 className="hover:text-gray-400 cursor-pointer">Media</h3>
        <h3 className="hover:text-gray-400 cursor-pointer">Contact Us</h3>
        <Link to="/term">
          <div className="flex gap-3 items-center justify-center bg-white/10 p-2 px-4 rounded-xl backdrop-blur-[100px]">
            <div className="relative w-3 h-3 flex-shrink-0">
              <span className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400 opacity-75 animate-ping"></span>
              <span className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400"></span>
            </div>
            <h3 className="text-white hover:text-gray-400 cursor-pointer">Disclaimer</h3>
          </div>
        </Link>
      </motion.div>
    </div>
  )
}

export default Nav
