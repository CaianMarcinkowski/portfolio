import React from "react";

interface MobileMenuProps {
  visible?: boolean;
  options: string[];
  theme: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ visible, options, theme }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className={` ${ theme === 'light' ? 'bg-zinc-400' : 'bg-zinc-700' } w-56 absolute top-8 left-0 py-5 flex-col border-1 flex rounded-md`}>
      <div className="flex flex-col gap-4">
        {Array.isArray(options) &&
          options.map((option, index: any) => (
            <div
              className={`${theme === 'light' ? 'text-black' : 'text-white' } px-3 text-center hover:underline`}
              key={index}
            >
              {option}
            </div>
          ))}
      </div>
    </div>
  );
};

export default MobileMenu;
