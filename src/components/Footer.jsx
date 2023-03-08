import React from 'react'
import { BsFillSendFill } from 'react-icons/bs'
export const Footer = () => {
  return (
    <div className="h-[3rem] bg-red-100 flex  items-center">
      <span className="flex w-[100%] h-[100%]">
        <input
          className="w-[100%] rounded-md p-1 outline-none border-solid border"
          type="text"
          placeholder="Write your message here"
        />
      </span>

      <button className="flex items-center justify-center mx-auto px-[20px] bg-black text-white h-[100%]">
        <BsFillSendFill />
      </button>
    </div>
  )
}
