interface EducationProps {
  theme: string;
  language: boolean;
}

const Education: React.FC<EducationProps> = ({ theme, language }) => {
  return (
    <>
      <div className="relative h-[25.25vw]">
        <div
          className={`${
            theme === "light" ? "bg-zinc-100" : "bg-zinc-800"
          } flex items-center justify-start h-600 mb-10`}
        >
            <img
            className={`${
              theme === "light" ? "border-gray-800" : "border-gray-200"
            } rounded-full border-4 w-60 h-60 ml-10`}
            src="/images/education.jpg"
            alt="EXP"
          ></img>
          <div className="mb-8 ml-5 text-left">
          
            <h2
              className={`${
                theme === `light` ? "text-black" : "text-white"
              } text-xl font-bold`}
            >
              {`${language ? `Formation 🎒 📙 👨‍🎓 📓` : `Formação 🎒 📙 👨‍🎓 📓`}`}
            </h2>

            <p className={`${theme === `light` ? "text-black" : "text-white"} mt-2 mr-40`}>
              {`${
                language
                  ? `• Studying a Bachelor's degree in Computer Science, seeking to improve technical skills and knowledge in areas such as programming, algorithms and software engineering.`
                  : `• Cursando Ciência da Computação, buscando aprimorar habilidades técnicas e conhecimento em áreas como programação, algoritmos e engenharia de software.`
              }`}
            </p>

            <p className={`${theme === `light` ? "text-black" : "text-white"} mt-2 mr-40`}>
              {`${
                language
                  ? `• Technical training in IT at QI schools, aiming to integrate theory and practice for innovative solutions in the area of ​​information technology.`
                  : `• Formação técnica em Informática nas escolas QI, visando a integração de teoria e prática para soluções inovadoras na área de tecnologia da informação.`
              }`}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Education;
