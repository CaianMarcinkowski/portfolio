interface ExperiencesProps {
  theme: string;
  language: boolean;
}

const Experiences: React.FC<ExperiencesProps> = ({ theme, language }) => {
  
  const handleDownload = () => {
    const downloadLink = document.createElement("a");
    downloadLink.href = "/doc/CV Caian Marcinkowski Ferreira.pdf";
    downloadLink.download = "CV Caian Marcinkowski Ferreira.pdf";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <>
      <div className="relative h-[35.25vw]">
        <div
          className={`${
            theme === "light" ? "bg-zinc-100" : "bg-zinc-800"
          } flex items-center justify-end h-600 mt-40`}
        >
          <div className="mb-8 mr-5 text-right">
            <h2
              className={`${
                theme === `light` ? "text-black" : "text-white"
              } text-xl font-bold`}
            >
              {`${language ? `Experiences 💼📊` : `Experiencias 💼📊`}`}
            </h2>

            <p
              className={`${
                theme === `light` ? "text-black" : "text-white"
              } mt-2`}
            >
              {`${
                language
                  ? `IT Specialist at ECORE Group: (06/2019 - 11/2022) •`
                  : `Especialista em TI no grupo ECORE: (06/2019 - 11/2022) •`
              }`}
            </p>
            <p className={`${theme === `light` ? "text-black" : "text-white"}`}>
              {`${
                language
                  ? `User support and development of innovations and corrections on web and mobile systems •`
                  : `Suporte a usuários e desenvolvimento de inovações e correções nos sitemas web e mobile.`
              }`}
            </p>

            <p
              className={`${
                theme === `light` ? "text-black" : "text-white"
              } mt-2`}
            >
              {`${
                language
                  ? `Software Developer at MAVEN: (11/2022 - 07/2023) •`
                  : `Desenvolvedor de software em MAVEN: (11/2022 - 07/2023) •`
              }`}
            </p>
            <p className={`${theme === `light` ? "text-black" : "text-white"}`}>
              {`${
                language
                  ? `Develop new updates and corrections to the code of document indexing and visualization systems. •`
                  : `Desenvolver novas atualizações e correções nos código dos sistemas de indexação e visualização de documentos.`
              }`}
            </p>

            <p
              className={`${
                theme === `light` ? "text-black" : "text-white"
              } mt-2`}
            >
              {`${
                language
                  ? `More information download my CV 📄 •`
                  : `Mais informações baixe o meu curriculum 📄 •`
              }`}
            </p>
            <div className="mt-4">
              <button
                onClick={handleDownload}
                className={`${
                  theme === "light"
                    ? "bg-gray-800 hover:bg-gray-500 text-white"
                    : "bg-gray-200 hover:bg-gray-600 text-black"
                } text-gray-800 justify-center font-bold py-3 w-100 px-4 rounded inline-flex items-center`}
              >
                Download 📄
              </button>
            </div>
          </div>
          <img
            className={`${
              theme === "light" ? "border-gray-800" : "border-gray-200"
            } rounded-full border-4 w-60 h-60 mr-10`}
            src="/images/exp.jpg"
            alt="EXP"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Experiences;
