import { motion, scale } from "motion/react"

const Nav = () => {
  return (
    <div className="flex w-full justify-between px-40 py-6 text-center z-10 bg-white/0 backdrop-blur-[20px] ">
        <div className="text-2xl font-black flex gap-1 cursor-pointer">
            <h1>Apna</h1>
            <h1 className="text-orange-400">College</h1>
        </div>

        <motion.div
        className="flex gap-13 items-center justify-center font-bold tracking-wider">
            <h3 className="hover:text-gray-400 cursor-pointer">Home</h3>
            <h3 className="hover:text-gray-400 cursor-pointer">Features</h3>
            <h3 className="hover:text-gray-400 cursor-pointer">Media</h3>
            <h3 className="hover:text-gray-400 cursor-pointer">Contact Us</h3>
            <div className="flex gap-3 items-center justify-center bg-white/10  p-2 px-4 rounded-xl backdrop-blur-[100px]">
              <div className="relative w-3 h-3 flex-shrink-0">
                {/* Ripple circle */}
                <span className="absolute top-1/2 left-1/2 w-4 h-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400 opacity-75 animate-ping"></span>
                {/* Solid center circle */}
                <span className="absolute top-1/2 left-1/2 w-3 h-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-400"></span>
              </div>
              <h3 className="text-white hover:text-gray-400 cursor-pointer">Terms</h3>
            </div>


        </motion.div>
    </div>
  )
}

export default Nav

// border-b-1 border-white border-opacity-10
// fixed in line no 5