import { useRef } from "react";
import Card from "../components/Card";
import { Globe } from "../components/globe";
import CopyEmailButton from "../components/CopyEmailButton";
import { Frameworks } from "../components/FrameWorks";

const About = () => {
  const grid2Container = useRef();
  return (
    <section className="c-space section-spacing scroll-mt-20" id="about">
      <h2 className="text-heading">About Me</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">
        {/* Grid 1 */}
        <div className="flex items-end grid-default-color grid-1">
          <img
            src="assets/coding-pov.png"
            className="absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
          />
          <div className="z-10">
            <p className="headtext">Hi, I'm Imtisal Sahil Ansari</p>
            <p className="subtext">
              AI/ML-focused Software Engineer with hands-on experience building full-stack intelligent systems, integrating LLMs, and developing scalable backend services. Published researcher (PReMI 2025, IIT Delhi) with expertise in React, TypeScript, Node.js, Express, OAuth 2.0, JWT, and modern AI/ML technologies including Gemini AI and Whisper for real-world automation and decision-support platforms.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo" />
        </div>
        {/* Grid 2 */}
        <div className="grid-default-color grid-2">
          <div
            ref={grid2Container}
            className="flex items-center justify-center w-full h-full"
          >
            <p className="flex items-end text-5xl text-gray-500">
              TECH SKILLS
            </p>
            {/* Languages */}
            <Card
              style={{ rotate: "15deg", top: "5%", left: "5%" }}
              image="assets/logos/python.svg"
              skillName="Python"
              colorClass="bg-blue-500/20"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-10deg", top: "8%", left: "28%" }}
              image="assets/logos/javascript.svg"
              skillName="JavaScript"
              colorClass="bg-yellow-500/20"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "20deg", top: "6%", left: "55%" }}
              image="assets/logos/typescript.svg"
              skillName="TypeScript"
              colorClass="bg-blue-600/20"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-15deg", top: "5%", left: "78%" }}
              image="assets/logos/cplusplus.svg"
              skillName="C++"
              colorClass="bg-indigo-500/20"
              containerRef={grid2Container}
            />
            {/* Frameworks */}
            <Card
              style={{ rotate: "-20deg", top: "32%", left: "2%" }}
              image="assets/logos/react.svg"
              skillName="React"
              colorClass="bg-cyan-500/20"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "10deg", top: "35%", left: "22%" }}
              image="assets/logos/nodedotjs.svg"
              skillName="Node.js"
              colorClass="bg-green-500/20"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-25deg", top: "33%", left: "45%" }}
              image="assets/logos/express.svg"
              skillName="Express"
              colorClass="bg-gray-600/20"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "18deg", top: "36%", left: "68%" }}
              image="assets/logos/springboot.svg"
              skillName="Spring"
              colorClass="bg-green-600/20"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-12deg", top: "32%", left: "88%" }}
              image="assets/logos/flask.svg"
              skillName="Flask"
              colorClass="bg-slate-500/20"
              containerRef={grid2Container}
            />
            {/* Databases */}
            <Card
              style={{ rotate: "22deg", top: "62%", left: "8%" }}
              image="assets/logos/mongodb.svg"
              skillName="MongoDB"
              colorClass="bg-emerald-500/20"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-18deg", top: "64%", left: "32%" }}
              image="assets/logos/mysql.svg"
              skillName="MySQL"
              colorClass="bg-orange-500/20"
              containerRef={grid2Container}
            />
            {/* Cloud/DevOps */}
            <Card
              style={{ rotate: "15deg", top: "65%", left: "55%" }}
              image="assets/logos/docker.svg"
              skillName="Docker"
              colorClass="bg-sky-500/20"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-20deg", top: "62%", left: "75%" }}
              image="assets/logos/git.svg"
              skillName="Git"
              colorClass="bg-red-500/20"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "25deg", bottom: "8%", left: "15%" }}
              image="assets/logos/vercel.svg"
              skillName="Vercel"
              colorClass="bg-violet-500/20"
              containerRef={grid2Container}
            />
            <Card
              style={{ rotate: "-15deg", bottom: "10%", left: "40%" }}
              image="assets/logos/render.svg"
              skillName="Render"
              colorClass="bg-purple-500/20"
              containerRef={grid2Container}
            />
          </div>
        </div>
        {/* Grid 3 */}
        <div className="grid-black-color grid-3">
          <div className="z-10 w-[50%]">
            <p className="headtext">Time Zone</p>
            <p className="subtext">
              I'm based in India (IST), and open to remote work worldwide
            </p>
          </div>
          <figure className="absolute left-[30%] top-[10%]">
            <Globe />
          </figure>
        </div>
        {/* Grid 4 */}
        <div className="grid-special-color grid-4">
          <div className="flex flex-col items-center justify-center gap-3 px-4 size-full">
            <p className="text-center headtext">
              Do you want to start a project together?
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <a
                href="https://github.com/imtisalsahil10"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-sm text-white transition-all duration-300 border border-white rounded-full bg-black/50 backdrop-blur-sm hover:bg-white hover:text-black"
              >
                <img src="/assets/github.svg" alt="GitHub" className="w-4 h-4" />
                <span className="font-medium">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/imtisalsahil/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 text-sm text-white transition-all duration-300 border border-white rounded-full bg-black/50 backdrop-blur-sm hover:bg-blue-600 hover:border-blue-600"
              >
                <img src="/assets/socials/linkedIn.svg" alt="LinkedIn" className="w-4 h-4" />
                <span className="font-medium">LinkedIn</span>
              </a>
              <CopyEmailButton />
            </div>
          </div>
        </div>
        {/* Grid 5 */}
        <div className="grid-default-color grid-5">
          <div className="z-10 w-[50%]">
            <p className="headText">Tech Stack & Skills</p>
            <p className="subtext">
              <strong>Languages:</strong> Java, Python, C, C++, JavaScript, TypeScript, CSS<br/>
              <strong>Frameworks:</strong> React, Node.js, Express.js, Spring, Flask, SQL<br/>
              <strong>Databases:</strong> MongoDB Atlas, MySQL<br/>
              <strong>AI/ML:</strong> Google Gemini AI, NLP, LLMs, TensorFlow, Scikit-learn, Pandas, NumPy<br/>
              <strong>Cloud/DevOps:</strong> Vercel, Render, Git, Postman, Docker, JWT Auth, OAuth 2.0
            </p>
          </div>
          <div className="absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125">
            <Frameworks />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
