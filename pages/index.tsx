import Aboutme from "@/components/Aboutme";
import Education from "@/components/Education";
import Experiences from "@/components/Experiences";
import Navbar from "@/components/Navbar";
import Social from "@/components/Social";
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
      <div className={`${theme === "light" ? "bg-zinc-100" : "bg-zinc-800"} flex flex-col`}>
        <Navbar onChangeHandlers={{ handleThemeChange, handleLanguageChange }} />
        <Aboutme theme={theme} language={language}/>
        <Experiences theme={theme} language={language}/>
        <Education theme={theme} language={language}/>
        <Social theme={theme} language={language}/>
      </div>

    </>
  );
}
