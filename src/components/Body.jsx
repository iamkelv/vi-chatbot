import React from 'react'
import bot from '../assets/panda.png'
export const Body = () => {
  return (
    <div className=" flex flex-col overflow-auto   gap-4 p-3 flex-1 font-bold font-[lato] text-[rgb(81,79,79)]">
      <div className="flex gap-1 ">
        <span className="flex-[1]">
          <img
            className="max-w-[35px] p-2 bg-[rgb(216,216,216)] rounded-full"
            src={bot}
            alt=""
          />
        </span>
        <span className="flex-[4.4] p-2 rounded-lg bg-[#000000] text-white text-[12px]  ">
          Hi I'm ViBot
        </span>
      </div>
      <div className=" p-2 rounded-lg bg-[#000000] text-white text-[12px]">
        <span>
          I'm here to help or chat with you. What do you want to go ahead with?
        </span>
      </div>
      <div className="flex flex-wrap gap-1">
        {[
          'Gaming',
          'Web Developmenet',
          'Chat with Vibot',
          'Chat with Vibot',
        ].map((res) => (
          <span
            className="bg-[#D0F2D7] rounded-lg p-1 cursor-pointer font-sans  text-[12px] font-normal shadow-md drop-shadow"
            key={res}
          >
            {res}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-1 text-[13px] font-bold">
        Bot is typing...
      </div>
    </div>
  )
}
