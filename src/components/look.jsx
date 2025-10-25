// import React from 'react'

// const Look = () => {
//   return (
//   <div className="w-full flex justify-center items-center gap-3">
//     <div className="flex flex-col justify-center items-center">
//         <h1 className="text-[#5a5a5a] pt-36 text-6xl font-black font-osw uppercase tracking-[1px] p-3 border-b-orange-900 border-transparent">Take a look inside</h1>
//           <div className='h-140 w-full mt-15 border-10 border-orange-900 rounded-2xl relative overflow-hidden'>     

//             <video className="w-full h-full object-cover" muted loop onMouseEnter={e => e.currentTarget.play()} onMouseLeave={e => e.currentTarget.pause()}>    
//               <source src="/ok.mp4" type="video/mp4"/></video>

//           </div>    
//     </div>
//   </div>
//   )
// }

// export default Look

import React, { useState } from 'react'

const Look = () => {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="w-full flex justify-center items-center gap-3">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-[#5a5a5a] pt-36 text-6xl font-black font-osw uppercase tracking-[1px] p-3 border-b-orange-900 border-transparent">
          Take a look inside
        </h1>
        <div className='h-140 w-full mt-15 border-10 border-orange-900 rounded-2xl relative overflow-hidden'>     
          
          <video className="w-full h-full object-cover backdrop-blur-sm" muted loop controls
              onMouseEnter={e => {
                setHovered(true)
                e.currentTarget.play()
              }}
              onMouseLeave={e => {
                setHovered(false)
                e.currentTarget.pause()
              }} >

                  <source src="/ok.mp4" type="video/mp4"/>

          </video>


          {!hovered && (
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {<svg xmlns="http://www.w3.org/2000/svg" height="100px" viewBox="0 -960 960 960" width="100px" fill="#FFF"><path d="M382-306.67 653.33-480 382-653.33v346.66ZM480-80q-82.33 0-155.33-31.5-73-31.5-127.34-85.83Q143-251.67 111.5-324.67T80-480q0-83 31.5-156t85.83-127q54.34-54 127.34-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82.33-31.5 155.33-31.5 73-85.5 127.34Q709-143 636-111.5T480-80Zm0-66.67q139.33 0 236.33-97.33t97-236q0-139.33-97-236.33t-236.33-97q-138.67 0-236 97-97.33 97-97.33 236.33 0 138.67 97.33 236 97.33 97.33 236 97.33ZM480-480Z"/></svg>}
            </div>
          )}

        </div>    
      </div>
    </div>
  )
}

export default Look
