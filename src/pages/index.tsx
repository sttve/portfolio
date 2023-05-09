import Image from 'next/image';
import Head from 'next/head';

import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub} from 'react-icons/ai';
import deved from "public/dev-ed-wave.png";

import {useState} from "react";








export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""} >
      <Head>
        <title>Steven Ribeiro </title>
        <meta name="description" content="Steven"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-zinc-900 ">
        <section className="min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons"></h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill 
                onClick={() => setDarkMode(!darkMode)} 
                className="cursor-pointer text-2xl dark:text-gray-100"/>
              </li>
              <li> 
                <a className="bg-gradient-to-r from-indigo-500 to-violet-500 text-white px-4 py-2 rounded-md ml-8" target="_blank" href="https://www.linkedin.com/in/sttveandersona/">Contact</a>
              </li>
              <li>
                <a className="bg-gradient-to-r from-violet-500 to-indigo-600 text-white px-4 py-2 rounded-md ml-8" target="_blank" href="https://docs.google.com/document/d/1LvF7vF6P_hrJMdclPF54ggnz8Z2V30h4jLUP9wHl8No/edit?usp=sharing">Resume</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'>
            <h2 className='text-5xl py-2 text-violet-500 font-medium md:text-6xl'>Steven Ribeiro</h2>
            <h3 className='text-2xl py-2 md:text-3xl dark:text-gray-100'>Full-Stack Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-lg mx-auto dark:text-gray-300">My expertise includes software development, project management, business development, and strategic planning. I am passionate about using technology to solve complex business problems and drive growth.</p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-800 dark:text-gray-300">
            <AiFillTwitterCircle 
            onClick={()=> window.open("https://twitter.com/StevenA63049428","_blank")}
            className="cursor-pointer" />
            <AiFillLinkedin
            onClick={()=> window.open("https://linkedin.com/in/sttveandersona/","_blank")}
            className="cursor-pointer" />
            <AiFillGithub
            onClick={()=> window.open("https://github.com/sttve","_blank")}
            className="cursor-pointer" />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-violet-500 rounded-full w-60 h-60 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image alt="" src={deved} layout="fill" objectFit="cover"/>
          </div>
        </section>

        
        <section>
          <div>
            <br>
            </br>
            <h3 className="text-3xl py-1 dark:text-gray-100 mt-8">About Me</h3>
            <p className="text-md md:text-xl py-2 leading-8 text-gray-800 dark:text-gray-300">
            As an <span className="text-violet-500 py-10">Assistant Manager</span>, <span className="text-violet-500">IT Analyst</span>, and <span className="text-violet-500">Full-Stack Developer</span>, I have gained a diverse set of skills and experiences that have equipped me to excel in a variety of roles. My passion for technology and problem-solving has driven me to continuously improve my skills and stay up-to-date with the latest trends and technologies. I am a strong <span className="text-violet-500">communicator</span> and <span className="text-violet-500">collaborator</span>, and I am always looking for new challenges to tackle.
            </p>
            <br />
            <h3 className="text-3xl py-1 dark:text-gray-100">Job Experience</h3>
            <p className="text-md md:text-xl py-2 leading-8 text-gray-800 dark:text-gray-300">
            In my previous roles, I have gained experience in a variety of areas, including project management, data analysis, and full-stack development.<br></br> I am skilled in using a variety of programming languages and frameworks, including TypeScript, JavaScript, React, Next.js, HTML, CSS and Node.js.<br/>Additionally, I have experience in managing teams and collaborating with stakeholders to deliver high-quality solutions.
            </p>
          </div>
          <div className="lg:flex gap-10 " >
            <div className="text-center shadow-xl p-10 rounded-2xl my-8 bg-slate-50 dark:bg-zinc-950">
            <h3 className="text-lg font-medium py-0 pb-2 dark:text-gray-100">
                IT Analyst
              </h3>
              <p className="py-2 font-medium text-gray-800 leading-6 dark:text-gray-300">· Designing, analyzing and implementing efficient IT systems<br />
               · Plan and oversee projects<br /> (e.g. upgrades, hardware/software installations)<br /> 
               · Design efficient IT systems to meet business and technology needs<br /> 
               · Integratet multiple systems and reconcile needs of different teams<br /> 
               · Gather feedback from end users about system performance
              </p>
              <h4 className='py-2 text-violet-500 font-medium'>Intensive Training · 2023</h4>
              <br />
              <h3 className="text-lg font-medium py-0 pb-2 dark:text-gray-100">
                Assistant Manager
              </h3>
              <p className="py-2 font-medium text-gray-800 leading-6 dark:text-gray-300">· Support the manager in daily operations<br />
              · Manage staff and delegate tasks<br />
              · Monitor inventory and order supplies<br />
              · Analyzed sales data and make recommendations
              </p>
              <h4 className='py-2 text-violet-500 font-medium'>Online Impulse · 2022</h4> 
            </div>
            
            <div className="text-center shadow-xl p-10 rounded-2xl my-8 bg-slate-50 dark:bg-zinc-950 ">
              <h3 className="text-lg font-medium py-0 pb-2 dark:text-gray-100">
                Full Stack Jr. Developer
              </h3>
              <p className="py-2 font-medium text-gray-800 leading-6  dark:text-gray-300">· Designed and developed web applications using React, Node.js, and MongoDB<br />  
              · Collaborated with cross-functional teams to identify business requirements and develop solutions that met customer needs<br />  
              · Worked with clients to understand their business needs and develop solutions that met their requirements

              </p>
              <h4 className='py-2 font-medium text-violet-500'>Freelancer · 2022</h4>
              <br />
              <h3 className="text-lg font-medium py-0 pb-2 dark:text-gray-100">
                Skills
              </h3>
              <p className="py-2 text-gray-800 font-medium  leading-6 dark:text-gray-300">
              · JavaScript (ES6+)/TypeScript<br />
              · React/ Node.js<br /> 
              · Vue.js/ Nextjs<br /> 
              · HTML/ CSS<br /> 
              · Git/ GitHub<br /> 
              · Agile/Scrum methodologies<br />
              · Project management<br /> 
              · Team leadership<br /> 
              · Excellent communication and collaboration abilities


              </p>
              

            </div>
          
            <div className="text-center shadow-xl p-10 rounded-2xl my-8 bg-slate-50 dark:bg-zinc-950">
              <h3 className="text-lg font-medium py-0 pb-2 dark:text-gray-100">
                Alignment Technician
              </h3>
              <p className="py-2 font-medium text-gray-800 leading-6 dark:text-gray-300">· Inspect and adjust vehicle alignment<br />
              · Diagnose and repair suspension and steering issues<br />
              · Using specialized tools and equipment<br />
              · Report to customers about recommended services<br />
              · Maintained accurate records of services performed
              </p>
              <h4 className='py-2 text-violet-500 font-medium'>EME Autocenter · 2022</h4>
              <br />
              <h3 className="text-lg font-medium py-0 pb-2 dark:text-gray-100">
                Mechanic Assistant
              </h3>
              <p className="py-2 font-medium text-gray-800 leading-6 dark:text-gray-300">· Conduct preventive and corrective maintenance on equipment and machinery, including pumps, compressors, and generators<br />
              · Performing troubleshooting and repairs on hydraulic, pneumatic, and mechanic systems<br />
              · Conducting welding and fabrication work as needed<br />
              · Maintained accurate records of maintenance activities and reported to management<br />
              · Ensured compliance with safety regulations and procedures
              </p>
              <h4 className='py-2 text-violet-500 font-medium'>285 Garage · 2017</h4>
              <br />
              
            </div>

            
          
            
          </div>
        </section>
        <section>
          <div className="">
            <h3 className="text-3xl py-1 dark:text-gray-100">Work</h3>
            <p className="text-md md:text-xl py-2 leading-8 text-gray-800 dark:text-gray-300">
            I am excited about the opportunity to pursue a career as<span className="text-violet-500 py-10"> a Software Engineer</span> or <span className="text-violet-500 py-10">Data Scientist/Analyst</span>. <br></br><br></br>I am deeply committed to using my skills and knowledge to create innovative solutions that address real-world problems and improve the quality of life for individuals and communities. Whether it’s developing software applications that streamline processes and increase efficiency, or designing data systems that provide valuable insights and inform decision-making, I am eager to contribute my talents and work collaboratively with others to achieve meaningful results.
            </p>

          </div>

          <br />
           
          <div >
            <section>
         
            <h3 className="text-3xl py-1  dark:text-gray-100 ">Education</h3>
            <div className="text-center shadow-xl p-10 rounded-2xl my-8 bg-slate-50 dark:bg-zinc-950 ">
              <h3 className="text-lg font-medium py-0 pb-2 dark:text-gray-100">
              Bachelor of Computer Engineering
              </h3>
              <h4 className='py-2 text-violet-500 font-medium'>Instituto Federal Fluminense Campus Campos</h4>
              <h2 className="dark:text-gray-300 font-medium">2022 · 2026</h2>
              <br />
              <h3 className="text-lg font-medium py-0 pb-2 dark:text-gray-100">
              Technical Course in Web Full Stack Development</h3>
              <h4 className='py-2 text-violet-500 font-medium'>Digital House, Rocketseat</h4>
              <h2 className="dark:text-gray-300 font-medium">2021 · 2022</h2>
              <br />
              <h3 className="text-lg font-medium py-0 pb-2 dark:text-gray-100">
              Introduction to Data Engineering</h3>
              <h4 className='py-2 text-violet-500 font-medium'>DIO.me</h4>
              <h2 className="dark:text-gray-300 font-medium">2023</h2>
              
              
            </div>
            <section>
              <footer>
           
                
                <h2 className="text-md md:text-xl py-0 pb-0 text-center dark:text-gray-100">Made by Steven Ribeiro</h2>
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
