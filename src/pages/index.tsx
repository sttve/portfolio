import Image from 'next/image';
import Head from 'next/head';
import { Inter } from 'next/font/google';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import deved from "public/dev-ed-wave.png";
import design from "public/design.png";
import code from "public/code.png";
import consulting from "public/consulting.png";
import web1 from "public/web1.png";
import web2 from "public/web2.png";
import web3 from "public/web3.png";
import web4 from "public/web4.png";
import web5 from "public/web5.png";
import web6 from "public/web6.png";
import {useState} from "react";



export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""} >
      <Head>
        <title>Steven Anderson Alvarenga</title>
        <meta name="description" content="Steven"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-500 ">
        <section className="min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons"></h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill 
                onClick={() => setDarkMode(!darkMode)} 
                className="cursor-pointer text-2xl"/>
              </li>
              <li> 
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"href="https://www.linkedin.com/in/sttveandersona/">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'>
            <h2 className='text-5xl py-2 text-teal-500 font-medium md:text-6xl'>Steven Alvarenga</h2>
            <h3 className='text-2xl py-2 md:text-3xl '>Full Stack Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto">My expertise includes software development, project management, business development, and strategic planning. I am passionate about using technology to solve complex business problems and drive growth.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-800">
            <AiFillTwitterCircle />
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image src={deved} layout="fill" objectFit="cover"/>
          </div>
        </section>

        
        <section>
          <div>
            <br>
            </br>
            <h3 className="text-3xl py-1 ">About Me</h3>
            <p className="text-md py-2 leading-8 text-gray-800 ">
            As an <span className="text-teal-500 py-10">Assistant Manager</span>, <span className="text-teal-500">IT Analyst</span>, and <span className="text-teal-500">Full-Stack Developer</span>, I have gained a diverse set of skills and experiences that have equipped me to excel in a variety of roles. My passion for technology and problem-solving has driven me to continuously improve my skills and stay up-to-date with the latest trends and technologies. I am a strong <span className="text-teal-500">communicator</span> and <span className="text-teal-500">collaborator</span>, and I am always looking for new challenges to tackle.
            </p>
            <br />
            <h3 className="text-3xl py-1">Job Experience</h3>
            <p className="text-md py-2 leading-8 text-gray-800 ">
            I am a highly skilled and experienced professional with a background in <span className="text-teal-500 py-10">technician mechanic course</span>, <span className="text-teal-500 py-10">full stack development</span>, and <span className="text-teal-500 py-10">data engineering</span>.
            </p>
          </div>
          <div className="lg:flex gap-10" >
            <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
              <h3 className="text-lg font-medium py-0 pb-2">
                Assistant Manager
              </h3>
              <p className="py-2">Support the manager in daily operations
              · Manage staff and delegate tasks
              · Monitor inventory and order supplies
              · Analyzed sales data and make recommendations
              </p>
              <h4 className='py-2 text-teal-500'>Online Impulse · 2023</h4>
            </div>
            
            <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
              <h3 className="text-lg font-medium py-0 pb-2">
                IT Analyst
              </h3>
              <p className="py-2">Designing, analyzing and implementing efficient IT systems · Plan and oversee projects (e.g. upgrades, hardware/software installations) · Design efficient IT systems to meet business and technology needs · Integrate multiple systems and reconcile needs of different teams · Gather feedback from end users about system performance

              </p>
              
              <h4 className='py-2 text-teal-500'>Intensive Training · 2023</h4>

            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
              <h3 className="text-lg font-medium py-0 pb-2">
                Full Stack Jr. Developer
              </h3>
              <p className="py-2">Designed and developed web applications using React, Node.js, and MongoDB · Collaborated with cross-functional teams to identify business requirements and develop solutions that met customer needs · Worked with clients to understand their business needs and develop solutions that met their requirements

              </p>
              <h4 className='py-2 text-teal-500'>Freelancer · 2022</h4>

            </div>
            
            <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
              <h3 className="text-lg font-medium py-0 pb-2">
                Alignment Technician
              </h3>
              <p className="py-2">Inspect and adjust vehicle alignment ·
Diagnose and repair suspension and steering issues ·
Use specialized tools and equipment ·
Communicate with customers about recommended services ·
Maintain accurate records of services performed

              </p>
              <h4 className='py-2 text-teal-500'>EME Autocenter · 2021</h4>

            </div>
            
          </div>
        </section>
        <section>
          <div className="">
            <h3 className="text-3xl py-1">Work</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
            I am excited about the opportunity to pursue a career as a software engineer or data engineer. I am deeply committed to using my skills and knowledge to create innovative solutions that address real-world problems and improve the quality of life for individuals and communities. Whether it’s developing software applications that streamline processes and increase efficiency, or designing data systems that provide valuable insights and inform decision-making, I am eager to contribute my talents and work collaboratively with others to achieve meaningful results.
            </p>

          </div>


           
          <div >
            <section>
         
            <h3 className="text-3xl py-1 ">Education</h3>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 ">
              <h3 className="text-lg font-medium py-0 pb-2">
              Bachelor of Computer Engineering
              </h3>
              <h4 className='py-2 text-teal-500'>Instituto Federal Fluminense Campus Campos</h4>
              <h2>2022 - 2023</h2>
              <br />
              <h3 className="text-lg font-medium py-0 pb-2">
              Technical Course in Web Full Stack Development</h3>
              <h4 className='py-2 text-teal-500'>Digital House, Rocketseat</h4>
              <h2>2021 - 2022</h2>
              <br />
              <h3 className="text-lg font-medium py-0 pb-2">
              Introduction to Data Engineering</h3>
              <h4 className='py-2 text-teal-500'>DIO.me</h4>
              <h2>2023</h2>
              
              
            </div>
            <section>
              <footer>
                <br />
              </footer>
            </section>
      
            </section>
          </div>
        </section>
      </main>
    </div>
  );
}
