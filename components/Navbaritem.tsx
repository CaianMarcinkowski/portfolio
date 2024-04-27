import React from "react";

interface NavbarItemProps {
  label: String;
  theme: string;
}

const Navbaritem: React.FC<NavbarItemProps> = ({ 
    label, theme
}) => {
  return (
    <div className= {` ${theme === 'light' ? 'text-black' : 'text-white' } cursor-pointer hover:text-orange-400 transition font-semibolda hover:underline`}>
      {label}
    </div>
  )
}

export default Navbaritem;