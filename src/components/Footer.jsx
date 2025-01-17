import { FaGithub, FaInstagram , FaEnvelope, FaLinkedin } from "react-icons/fa";
import ScrollTransition from "./ScrollTransition";


const Footer = () => {
  return (
    <ScrollTransition  id="footer">
    <div className="px-12 py-16 max-w-8xl mx-auto bg-gray-900">
      <div className="flex justify-center mb-16 text-3xl font-bold">Connect with me</div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <a href="https://github.com/ashwanthkumar10" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-3xl hover:text-gray-600" />
          </a>
          <div className="mt-2 text-sm">GitHub</div>
        </div>
        <div className="flex flex-col items-center">
  <a href="https://www.instagram.com/__ashwan__15?igsh=NmM4d3k4djg1ZnBu" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="text-3xl hover:text-gray-600" />
  </a>
  <div className="mt-2 text-sm">Instagram</div>
</div>
      
      
        <div className="flex flex-col items-center">
          <a href="mailto:ashwanthashu10@gmail.com">
            <FaEnvelope className="text-3xl hover:text-gray-600" />
          </a>
          <div className="mt-2 text-sm">Gmail</div>
        </div>
        <div className="flex flex-col items-center">
          <a href="https://www.linkedin.com/in/ashwanth10/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-3xl hover:text-gray-600" />
          </a>
          <div className="mt-2 text-sm">Linkedin</div>
        </div>
      </div>
    </div>
    </ScrollTransition>
  );
};

export default Footer;
