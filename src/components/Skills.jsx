import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaCss3Alt, FaJava, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiMongodb, SiMysql, SiExpress } from "react-icons/si";
import ScrollTransition from "./ScrollTransition";

const Skills = () => {
  const skills = [
    "Java",
    "HTML",
    "CSS",
    "JavaScript",
    "Tailwind CSS",
    "React",
   
    "Node.js",
    "Express.js",
    
    "MongoDB",
    
    "MySQL",
    
  ];

  const icons = [
    { icon: <FaReact />, id: "react" },
    { icon: <SiJavascript />, id: "javascript" },
    { icon: <FaNodeJs />, id: "nodejs" },
    { icon: <SiTailwindcss />, id: "tailwind" },
    { icon: <SiMongodb />, id: "mongodb" },
    { icon: <FaCss3Alt />, id: "css" },
    { icon: <FaJava />, id: "java" },
    { icon: <SiMysql />, id: "mysql" },
    { icon: <FaHtml5 />, id: "html" },
    { icon: <SiExpress />, id: "express" },
  ];

  return (
    <ScrollTransition  id="skills">
    <section className="bg-black text-white flex justify-center items-center py-10 ">
      <div className="relative bg-gray-900 rounded-xl shadow-lg p-8 w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="bg-gray-800 text-white py-2 px-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-700 transition"
            >
              {skill}
            </motion.div>
          ))}
        </div>

        <div className="relative w-64 h-64 mx-auto">
          {icons.map((item, index) => (
            <motion.div
              key={item.id}
              className="absolute text-white text-3xl"
              initial={{
                rotate: (360 / icons.length) * index,
                translateX: -50,
                translateY: -50,
              }}
              animate={{
                rotate: [0, 360],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                ease: "linear",
              }}
              style={{
                top: `${50 + 40 * Math.sin((index * 2 * Math.PI) / icons.length)}%`,
                left: `${50 + 40 * Math.cos((index * 2 * Math.PI) / icons.length)}%`,
              }}
            >
              {item.icon}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    </ScrollTransition>
  );
};

export default Skills;
