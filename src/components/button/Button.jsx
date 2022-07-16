import React, { useEffect, useState } from 'react'


const Button = ({color = "black", text, disabled}) => {
  const type = {
    black:{
        textColor: "text-white",
        bgColor: "bg-gray-800",
        hoverBgColor: "hover:bg-gray-900",
        darkMode: ["dark:bg-gray-800", "dark:hover:bg-gray-700", "dark:focus:ring-gray-700", "dark:border-gray-700"]
        
    },
    purple: { 
    textColor: "text-white",
    bgColor: "bg-purple-700",
    hoverBgColor: "hover:bg-purple-800",
    darkMode: ["dark:hover:bg-purple-700", "dark:bg-purple-600", "dark:focus:ring-purple-900", "dark:border-gray-700"],
    more: ["focus:outline-none", "focus:ring-purple-300"]
    }
  }



const typeProps = Object.keys(type)
const typeColor = typeProps.find(c => c === color)

const propsColorButton = type[typeColor]

const {textColor, bgColor, hoverBgColor, darkMode, more = undefined} = propsColorButton

  return (
    <>
    <button type="button" className={`${textColor} ${bgColor} ${hoverBgColor} ${darkMode.join(" ")} ${more ? more.join(" ") : ""}  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3.5 py-2 mr-2 mb-2  disabled:opacity-30`} disabled={!disabled}>{text}</button>
    </>
  )
}

export default Button