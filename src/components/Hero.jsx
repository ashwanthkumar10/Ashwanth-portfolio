import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import React,{useState, useEffect} from "react";
import ScrollTransition from "./ScrollTransition";

const Hero = () => {
  // Animated text states
  const texts = ["MERN Stack Developer", "Tech Enthusiast"];
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
   
      <section className="relative h-screen bg-gray-900 text-white flex flex-col justify-start items-center overflow-hidden">
        {/* Main Content */}
        <div className="relative z-10 flex flex-col justify-start items-center text-center mt-16 space-y-4">
          {/* Hero Image */}
          <img
            src="/images/Ashwanth's Picture.jpg"
            alt="Profile"
            className="w-36 h-36 rounded-full border-4 border-indigo-500 shadow-lg mb-4"
          />

          {/* Name */}
          <h1 className="text-4xl font-bold">
  Hey there! I'm <span className="text-blue-500 font-extrabold italic">Ashwanth K</span>
</h1>


          {/* Animated Subtitle */}
          <p className="text-lg text-gray-300 animate-fade-in">
            {texts[currentText]}
          </p>

          {/* Social Links */}
          <div className="flex space-x-6 mt-4">
            <a
              href="https://github.com/ashwanthkumar10"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a
              href="https://www.linkedin.com/in/ashwanth10/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a
              href="mailto:ashwanthashu10@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-indigo-400 transition-colors"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </div>

          {/* Action Button */}
          <a
            href="https://drive.google.com/file/d/1o1at3RDnUKpYUVJ24BAzMfmsKbAay0hw/view?usp=drive_link"
            target="_blank"
            className="inline-block mt-6 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition duration-300"
          >
            View CV
          </a>
        </div>

        {/* Floating Tech Icons (Moved Below Main Content) */}
        <div className="absolute bottom-24 z-0 flex flex-wrap justify-center items-center space-x-20">
          <div className="relative animate-float hover:scale-110 transition-transform">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="MongoDB"
              className="w-16 h-16 opacity-80"
            />
          </div>
          <div className="relative animate-float delay-100 hover:scale-110 transition-transform">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="Express.js"
              className="w-16 h-16 opacity-80 invert"
            />
          </div>
          <div className="relative animate-float delay-200 hover:scale-110 transition-transform">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="React.js"
              className="w-16 h-16 opacity-80"
            />
          </div>
          <div className="relative animate-float delay-300 hover:scale-110 transition-transform">
            <img
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="Node.js"
              className="w-16 h-16 opacity-80"
            />
          </div>
        </div>
      </section>
    
  );
};

export default Hero;
