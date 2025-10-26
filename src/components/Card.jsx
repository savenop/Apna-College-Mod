import React from 'react'

const Card = (props) => {
  return (
        <div className=" h-[250px] w-[380px] flex flex-col justify-start gap-3">
            <div className="" >{props.svg}</div>
            <h2 className="font-black text-white text-[22px]">{props.head}</h2>
            <p className="font-light text-gray-200 opacity-70 text-[16px] mt-5 tracking-[0.9px]">{props.des}</p>
        </div>
)  
}

export default Card