import { motion, scale } from "motion/react"

const Nav = () => {
  return (
    <div className="flex w-full justify-between px-40 py-6 text-center z-10  bg-white/0 backdrop-blur-[20px] ">
        <div className="text-2xl font-black flex gap-1 cursor-pointer">
            <h1>Apna</h1>
            <h1 className="text-orange-400">College</h1>
        </div>

        <motion.div
        className="flex gap-15 items-center justify-center font-bold tracking-wider">
            <h3 className="hover:text-gray-400 cursor-pointer">Features</h3>
            <h3 className="hover:text-gray-400 cursor-pointer">Screenshots</h3>
            <h3 className="hover:text-gray-400 cursor-pointer">Media</h3>
            {/* <h3 className="hover:text-gray-400 cursor-pointer">News</h3> */}
            <h3 className="hover:text-gray-400 cursor-pointer">Telegram</h3>
        </motion.div>
    </div>
  )
}

export default Nav

// border-b-1 border-white border-opacity-10
// fixed in line no 5