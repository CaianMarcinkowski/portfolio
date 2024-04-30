interface AboutmeProps {
  theme: string;
  language: boolean;
}

const Aboutme:React.FC <AboutmeProps> = ({
  theme,
  language
}) => {
  return (
    <div className="relative h-[25.25vw]">
      <div className="flex items-center justify-left h-full mt-20">
        <img
          className={`${theme === 'light' ? 'border-gray-800' : 'border-gray-200'} rounded-full border-4 ml-10 mr-5 h-60`}
          src="/images/perfil.png"
          alt="Perfil"
        />
        <div className="mb-5">

          <h2 
            className={`${theme === 'light' ? 'text-black' : 'text-white' } text-xl font-bold mb-2`}
          >
            {`${language ? `Hi, I am Caian 👨‍💻🖥️` : `Olá, Eu sou o Caian 👨‍💻🖥️` }`}
          </h2>

          <p 
            className={`${theme === 'light' ? 'text-black' : 'text-white' } text-lg`}
          >
            {`${language ? `I am a software developer` : `Eu sou um desenvolvedor de software`}`}
          </p>

          <p 
            className={`${theme === 'light' ? 'text-black' : 'text-white' } mt-1 w-90 h-20 mr-40`}
          >
            {`${language ? `
            Hello! I am a technology enthusiast passionate about solving problems and creating innovative solutions. With a solid background in software development, I am always looking to learn and improve myself in the latest technologies and programming practices.
            My experience includes developing web and mobile applications, where I had the opportunity to work on challenging projects and collaborate with multidisciplinary teams. I am driven by curiosity and the continuous search for technical excellence.
            ` : `
            Olá! Sou um entusiasta da tecnologia apaixonado por resolver problemas e criar soluções inovadoras. Com uma sólida formação em desenvolvimento de software, estou sempre buscando aprender e me aprimorar nas mais recentes tecnologias e práticas de programação.
            Minha experiência inclui o desenvolvimento de aplicativos web e móveis, onde tive a oportunidade de trabalhar em projetos desafiadores e colaborar com equipes multidisciplinares. Sou movido pela curiosidade e pela busca contínua pela excelência técnica.
            `}`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aboutme;
