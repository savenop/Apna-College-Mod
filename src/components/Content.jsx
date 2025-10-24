import Btn from './Btn'
import No from './No'
import { motion } from "motion/react"

const content = () => {
  return (
    <div className="">
    <div className="relative z-10">
        <h1 className="px-40 py-3 mt-20 text-[44px] font-black ">COMPLETE <span className="bg-orange-400 p-1 rounded-2xl">SIGMA 9.0</span><br /> COURSE<br /> <span className="text-3xl"></span></h1>

        <div className="px-40 flex flex-col gap-1 text-[15px]">
            <div className="flex items-center gap-2 font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="24px" fill="#FF8904"><path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/></svg>
                <p>100% Up-to-date with the Official Course</p>
            </div>

            <div className="flex items-center gap-2 font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="24px" fill="#FF8904"><path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/></svg>
                <p>One-time Payment — Lifetime Access</p>
            </div>

            <div className="flex items-center gap-2 font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="24px" fill="#FF8904"><path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/></svg>
                <p>Trusted by Thousands of Students</p>
            </div>            

            <div className="flex items-center gap-2 font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="24px" fill="#FF8904"><path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/></svg>
                <p>Instant Access After Payment</p>
            </div>

            <div className="flex items-center gap-2 font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" height="34px" viewBox="0 -960 960 960" width="24px" fill="#FF8904"><path d="M400-304 240-464l56-56 104 104 264-264 56 56-320 320Z"/></svg>
                <p>All Projects Included</p>
            </div>
        </div>

        <Btn />
    </div>


    <No />
    </div>
  )
}

export default content