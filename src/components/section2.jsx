import React from 'react'
import Card from './Card.jsx'
import Crazy from './Crazy.jsx'
import Look from './Look.jsx'

const Section2 = () => {
  return (
    <div>
    <div className="h-auto w-screen mt-40 flex justify-between px-40">
        <Card
            svg={
                <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#FF8904">
                <path d="M226.67-636h380v-90.67q0-52.77-36.92-89.72-36.93-36.94-89.67-36.94-52.75 0-89.75 36.94-37 36.95-37 89.72h-66.66q0-80.33 56.57-136.83Q399.81-920 480.07-920q80.26 0 136.76 56.55 56.5 56.55 56.5 136.78V-636h60q27.5 0 47.09 19.58Q800-596.83 800-569.33v422.66q0 27.5-19.58 47.09Q760.83-80 733.33-80H226.67q-27.5 0-47.09-19.58Q160-119.17 160-146.67v-422.66q0-27.5 19.58-47.09Q199.17-636 226.67-636Zm0 489.33h506.66v-422.66H226.67v422.66ZM480.11-280q32.22 0 55.06-22.52Q558-325.04 558-356.67q0-31-22.95-55.16Q512.11-436 479.89-436t-55.06 24.17Q402-387.67 402-356.33q0 31.33 22.95 53.83 22.94 22.5 55.16 22.5ZM226.67-146.67v-422.66 422.66Z"/>
                </svg>
                }
            head="Unlock Full Course Access"
            des="Get complete access to Sigma 9.0, including every lecture, project, and detailed note. Everything is organized for easy learning, and you can revisit the content anytime, no restrictions."
        />

        <Card
            svg={
                <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#FF8904"><path d="M407-325q23 23 66.5 21.5T537-336l216-339-335 219q-30 20-32 64t21 67Zm71-474q57 0 119 18.5T716-717l-52 37q-45-30-96.5-44.5T477.98-739q-140.47 0-239.23 100.22Q140-538.57 140-396.02 140-351 152.5-305q12.5 46 35.5 85h579q22-36 35-84t13-94q0-42-12.5-90.5T758-578l39-52q38 56 57 112.5T875-404q2 60-12 113t-41 98q-12 23-25.5 28t-33.5 5H192q-17 0-33.5-8.5T134-193q-26-48-40-97.5T80-396q0-83 31.5-156.5t85.5-128Q251-735 323.68-767T478-799Zm-9 331Z"/></svg>
                }
            head="100% Course Coverage"
            des="Every topic from the official Sigma 9.0 course is included. no shortcuts, no missing parts. From beginner to advanced, all lessons, projects, and extra materials are fully available for you to master."
        />

        <Card
            svg={
                <svg xmlns="http://www.w3.org/2000/svg" height="80px" viewBox="0 -960 960 960" width="80px" fill="#FF8904"><path d="M200-320h70q-4-28-23-48t-47-22v70Zm122 0h48q0-71-49.73-120.5Q270.55-490 200-490v48q51 0 86.5 35.65Q322-370.69 322-320Zm100 0h48q0-55.69-21.09-105.05-21.1-49.36-57.8-86.06-36.7-36.7-86.06-57.8Q255.69-590 200-590v48q93 0 157.5 64.5T422-320Zm-92 200v-80H140q-24 0-42-18t-18-42v-520q0-24 18-42t42-18h680q24 0 42 18t18 42v520q0 24-18 42t-42 18H630v80H330ZM140-260h680v-520H140v520Zm0 0v-520 520Z"/></svg>                }
            head="Seamless Streaming"
            des="Watch all content smoothly in high resolution on a reliable player. Study without interruptions, enjoy clear audio and video, and focus entirely on learning. no ads, no lag, just pure course content."
        />
    </div>
    <Look />
    < Crazy />
    </div>
  )
}

export default Section2