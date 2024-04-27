import Aboutme from "@/components/Aboutme";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState(true);

  const handleThemeChange = (newTheme: any) => {
    setTheme(newTheme);
  };

  const handleLanguageChange = (newLanguage: any) => {
    setLanguage(newLanguage);
  };

  return (
    <>
      <div className={`${theme === "light" ? "bg-zinc-100" : "bg-zinc-800"} h-full flex flex-col`}>
        <Navbar onChangeHandlers={{ handleThemeChange, handleLanguageChange }} />
        <Aboutme theme={theme} language={language}/>
        
      </div>

    </>
  );
}
