import ScrollTransition from "./ScrollTransition";
import React from "react";

const About = () => {
  return (
    <ScrollTransition id="about">
    <section className="py-10 " >
      <div className="bg-gray-900 text-white py-16 rounded-xl shadow-lg mx-auto max-w-4xl p-8">
        <h2 className="text-4xl font-extrabold mb-6 text-center">About Me</h2>
        <p className="text-lg leading-relaxed">
   🚀 I'm a passionate <span className="font-semibold">MERN-stack developer</span> with a knack for crafting seamless and scalable web applications. Currently, I’m pursuing a B.E. in <span className="font-semibold">Computer Science and Engineering</span> at Dr. Mahalingam College of Engineering & Technology.
</p>
<p className="text-lg leading-relaxed mt-4">
  Beyond just coding, I excel at <span className="font-semibold">problem-solving</span> and designing solutions that don’t just work but delight. My expertise lies in <b>MongoDB</b>, <b>Express.js</b>, <b>React.js</b>, and <b>Node.js</b>, with a vision to merge functionality and aesthetics into every project I undertake.
</p>
<p className="text-lg leading-relaxed mt-4">
  But here's the unique part: I believe that every line of code has a story to tell. For me, programming isn’t just about solving problems—it’s about creating experiences. Whether it's optimizing backend workflows or building intuitive UIs, I strive to bring value through innovation and creativity. 🧑‍💻✨
</p>
<p className="text-lg leading-relaxed mt-4">
  When I'm not coding, you’ll find me exploring emerging technologies, brainstorming startup ideas, or mentoring peers. My goal? To not just build applications but to contribute to impactful tech solutions that make life better for everyone.
</p>

      </div>
    </section>
    </ScrollTransition>
  );
};

export default About;
