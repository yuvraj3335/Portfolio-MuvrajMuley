import { Helmet, HelmetProvider } from "react-helmet-async";
import react_icon from "../../assets/icons/react_icon.svg";
import js_icon from "../../assets/icons/js_icon.svg";
import AWS from "../../assets/icons/AWS.svg";
import Docker from "../../assets/icons/Docker.svg";
import github_icon from "../../assets/icons/github_icon.svg";
import ApacheKafka from "../../assets/icons/ApacheKafka.svg";
import Java from "../../assets/icons/Java.svg";
import Node from "../../assets/icons/Node.js.svg";
import Redis from "../../assets/icons/Redis.svg";
import MongoDB from "../../assets/icons/MongoDB.svg";
import PostgresSQL from "../../assets/icons/PostgresSQL.svg";
function About() {
  const techStack = [
    js_icon,
    react_icon,
    AWS,
    Docker, 
    ApacheKafka, 
    github_icon, 
    Java, 
    Node, 
    Redis,
    MongoDB,
    PostgresSQL


  ];

  return (
    <HelmetProvider>
      <Helmet>
        <title>yuvraj Muley | About</title>
      </Helmet>
      <div className=" flex flex-col  items-center justify-center gap-y-4 p-8 text-textColor xl:gap-y-8 ">
        <div className="flex flex-col items-center gap-x-48 xl:flex-row">
          <div className=" xl:order-2">
            {/* <div className=" box border-4 border-accentColor xl:h-[300px] xl:w-[300px] "></div> */}
          </div>
          <div>
            <h1 className="text-center text-3xl font-extrabold text-white xl:text-start xl:text-6xl">
            MERN Stack<br /> Java Backend Developer
            </h1> 
            <h2 className="text-xl max-sm:hidden">
              Hi, I'm Yuvraj Muley. A passionate MERN Stack and a Java Backend Developer <br />{" "}
              
            </h2>
          </div>
        </div>
        <div className="xl:flex xl:gap-x-24 ">
          <div className="order-1 space-y-4 text-center xl:w-1/2 ">
            <h2 className="text-2xl font-semibold text-accentColor xl:text-3xl">
              About me:
            </h2>
            <p className="text-lg font-medium leading-tight text-slate-400 xl:text-xl">
            Hey everyone! I'm excited to connect with fellow tech enthusiasts. I've got a solid background in Java backend, DevOps, cloud technologies, Kafka, Hibernate, databases, React, and Node.js. I'm always eager to learn and collaborate on exciting projects. Let's chat and see how we can innovate together!
            </p>
          </div>
          <div className=" xl:w-1/2">
            <h3 className=" my-4 text-center text-lg font-semibold text-accentColor underline-offset-4 max-sm:underline xl:text-3xl ">
              Tech Stack{" "}
            </h3>
            <div className="flex items-center justify-center gap-5 max-sm:grid max-sm:grid-cols-3">
              {techStack.map((item, i) => {
                return (
                  <img
                    className=" h-14 w-14 cursor-pointer rounded-full p-2  shadow-md  shadow-accentColor "
                    key={i}
                    src={item}
                    alt="tech-stack"
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </HelmetProvider>
  );
}

{
  /* <p className="px-8 text-lg font-medium  md:text-xl">
&lt;p&gt; As a Junior Front-End Developer, I possess an impressive
arsenal of skills in HTML, CSS, JavaScript, React and Tailwind. I
excel in designing and maintaining responsive websites that offer a
smooth user experience. My expertise lies in crafting dynamic,
engaging interfaces through writing clean and optimized code and
utilizing cutting-edge development tools and techniques. I am also a
team player who thrives in collaborating with cross-functional teams
to produce outstanding web applications. &lt;/p&gt;
</p> */
}
export default About;
