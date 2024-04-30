import { FaLinkedin, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";

interface SocialProps {
  theme: string;
  language: boolean;
}

const Social: React.FC<SocialProps> = ({ theme, language }) => {
  const handleLinkedInClick = () => {
    window.open(
      "https://www.linkedin.com/in/caian-marcinkowski-ferreira-bb541a137/",
      "_blank"
    );
  };

  const handleGithubClick = () => {
    window.open("https://github.com/CaianMarcinkowski", "_blank");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/Marcinkowski__/", "_blank");
  };

  const handleDiscordClick = () => {
    window.open("https://discord.com/invite/KrhJ4mF6MK", "_blank");
  };

  return (
    <>
      <div className="relative h-[15.25vw] mb-40">
        <div
          className={`${
            theme === "light" ? "bg-zinc-100" : "bg-zinc-800"
          } flex items-center justify-end h-600 `}
        >
          <div className="mb-8 mr-5 text-right">
            <h2
              className={`${
                theme === `light` ? "text-black" : "text-white"
              } text-xl font-bold`}
            >
              {`${language ? `Social 💼📷🐙` : `Social 💼📷🐙`}`}
            </h2>

            <div className="mt-2 text-right">
              <button
                onClick={handleLinkedInClick}
                className={`${
                  theme === "light"
                    ? "bg-zinc-800 hover:bg-zinc-500 text-white"
                    : "bg-zinc-100 hover:bg-zinc-300 text-black"
                }
                block 
                w-full
                mt-2
                rounded-md
                py-1 md:pya-2
                px-2 md:px-4
                text-xs lg:text-lg
                font-semibold
                flex
                flex-row
                items-center
                justify-center
                transition
                `}
              >
                <FaLinkedin
                  className={`${
                    theme === "light" ? "text-white" : "text-black"
                  } mr-1`}
                />{" "}
                LinkedIn
              </button>

              <button
                onClick={handleGithubClick}
                className={`${
                  theme === "light"
                    ? "bg-zinc-800 hover:bg-zinc-500 text-white"
                    : "bg-zinc-100 hover:bg-zinc-300 text-black"
                }
                block 
                mt-2
                w-full
                rounded-md
                py-1 md:pya-2
                px-2 md:px-4
                text-xs lg:text-lg
                font-semibold
                flex
                flex-row
                items-center
                hover:bg-neutral-300
                justify-center
                transition
                `}
              >
                <FaGithub
                  className={`${
                    theme === "light" ? "text-white" : "text-black"
                  } mr-1`}
                />{" "}
                GitHub
              </button>

              <button
                onClick={handleInstagramClick}
                className={`${
                  theme === "light"
                    ? "bg-zinc-800 hover:bg-zinc-500 text-white"
                    : "bg-zinc-100 hover:bg-zinc-300 text-black"
                }
                block 
                mt-2
                w-full	
                rounded-md
                py-1 md:pya-2
                px-2 md:px-4
                text-xs lg:text-lg
                font-semibold
                flex
                flex-row
                items-center
                justify-center
                hover:bg-neutral-300
                transition
                `}
              >
                <FaInstagram
                  className={`${
                    theme === "light" ? "text-white" : "text-black"
                  } mr-1`}
                />{" "}
                Instagram
              </button>
              <button
                onClick={handleDiscordClick}
                className={`${
                  theme === "light"
                    ? "bg-zinc-800 hover:bg-zinc-500 text-white"
                    : "bg-zinc-100 hover:bg-zinc-300 text-black"
                }
                block 
                mt-2
                w-full	
                rounded-md
                py-1 md:pya-2
                px-2 md:px-4
                text-xs lg:text-lg
                font-semibold
                flex
                flex-row
                items-center
                justify-center
                hover:bg-neutral-300
                transition
                `}
              >
                <FaDiscord className="mr-1" /> Discord
              </button>
            </div>
          </div>
          <img
            className={`${
              theme === "light" ? "border-gray-800" : "border-gray-200"
            } rounded-full border-4 w-60 h-60 mr-10 bg-fixed`}
            src="/images/social.jpg"
            alt="EXP"
          ></img>
        </div>
      </div>
    </>
  );
};

export default Social;
