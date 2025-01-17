import ScrollTransition from "./ScrollTransition";

const Experience = () => {
    return (
        <ScrollTransition id="experience">
      <section className="bg-black text-white py-8" >
        {/* Experience Container */}
        <div className="bg-gray-900 rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div>
            <h3 className="text-xl font-semibold">Nandha Infotech</h3>
            <p className="text-sm text-gray-400">Web Developer Intern</p>
            <p className="mt-4">
            <p className="text-lg leading-relaxed">
  During my internship, I took my first dive into the world of web development, building a strong foundation in <b>HTML</b>, <b>CSS</b>, and <b>JavaScript</b>. This experience introduced me to the art of creating interactive and visually appealing websites, sparking my passion for crafting meaningful web experiences.
</p>

            </p>
            <p className="text-sm text-gray-400 mt-4">
              June 2024 
            </p>
          </div>
        </div>
      </section>
      </ScrollTransition>
    );
  };
  
  export default Experience;
  