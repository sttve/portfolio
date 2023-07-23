import Image from 'next/image';
import Head from 'next/head';

import { BsFillBrightnessHighFill  } from 'react-icons/bs';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineLink, AiOutlineAudit, AiOutlineCoffee  } from 'react-icons/ai';
import deved from "public/avatarr.jpg";

import { useState } from "react";







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
                <BsFillBrightnessHighFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-gray-100" />
              </li>
              <li>
                <a className="bg-gradient-to-r from-slate-500 to-pink-500 text-white px-4 py-2 rounded-md ml-8" target="_blank" href="https://docs.google.com/document/d/1LvF7vF6P_hrJMdclPF54ggnz8Z2V30h4jLUP9wHl8No/edit?usp=sharing">Resume on PDF</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 py-2'>
            <h2 className='text-5xl py-2 text-slate-500 font-medium md:text-6xl dark:text-pink-500' >Steven Ribeiro</h2>
            <h3 className='font-semibold italic text-2xl py-2 md:text-3xl dark:text-gray-100'>Front-end Developer</h3>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-800 dark:text-gray-100">
            <AiOutlineGithub
              onClick={() => window.open("https://github.com/sttve", "_blank")}
              className="cursor-pointer" />
               <AiOutlineLinkedin
              onClick={() => window.open("https://linkedin.com/in/sttveandersona/", "_blank")}
              className="cursor-pointer" />
              <AiOutlineAudit
              onClick={() => window.open("https://cal.com/stevenandersona/30min", "_blank")}
              className="cursor-pointer" />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-slate-500 rounded-full w-60 h-60 mt-20 overflow-hidden md:h-96 md:w-96">
            <Image alt="" src={deved} layout="fill" objectFit="cover" />
          </div>
        </section>
        <section>
          <div className="text-center">
          <br />
            <h4 className="text-3xl py-1 dark:text-gray-100">Job Experience</h4>
            <p className="text-md md:text-xl py-2 leading-8 text-gray-800 dark:text-gray-300">
              In my previous roles, I have gained experience in a variety of areas, including project management, data analysis, and full-stack development.<br></br> I am skilled in using a variety of programming languages and frameworks, including TypeScript, React, Next.js, Tailwind CSS and Node.js.<br />Additionally, I have experience in managing teams and collaborating with stakeholders to deliver high-quality solutions.
            </p>
           <br/>
          </div>
          </section>
          <div className="lg: gap-2 " >
            <div className="shadow-xl p-10 rounded-2xl my-8 bg-slate-50 dark:bg-zinc-950">
              <h4 className="font-semibold italic text-lg font-medium py-0 pb-2 dark:text-gray-100">
                IT Analyst
              </h4>
              <p className="py-2 font-medium text-gray-800 leading-8 dark:text-gray-300">Designing, analyzing and implementing efficient IT systems<br />
                Plan and oversee projects (e.g. upgrades, hardware/software installations)<br />
                Design efficient IT systems to meet business and technology needs<br />
                Integratet multiple systems and reconcile needs of different teams<br />
                Gather feedback from end users about system performance
              </p>
              <h3 className='font-semibold italic py-2 text-lg text-slate-500 dark:text-pink-500'>Intensive Training · 2023</h3>
              <br />
              <h4 className="font-semibold italic text-lg font-medium py-0 pb-2 dark:text-gray-100">
                Administrative Analyst
              </h4>
              <p className="py-2 font-medium text-gray-800 leading-8 dark:text-gray-300">Support the manager in daily operations<br />
                Manage staff and delegate tasks<br />
                Monitor inventory and order supplies<br />
                Analyzed sales data and make recommendations
              </p>
              <h3 className='font-semibold italic py-2 text-lg text-slate-500 dark:text-pink-500'>Online Impulse · 2022</h3>
            </div>
            <div className="shadow-xl p-10 rounded-2xl my-8 bg-slate-50 dark:bg-zinc-950 ">
              <h4 className="font-semibold italic text-lg font-medium py-0 pb-2 dark:text-gray-100">
                Full Stack Developer
              </h4>
              <p className="py-2 font-medium text-gray-800 leading-6  dark:text-gray-300">Designed and developed web applications using React, Node.js, and MongoDB<br />
                Collaborated with cross-functional teams to identify business requirements and develop solutions that met customer needs<br />
                Worked with clients to understand their business needs and develop solutions that met their requirements

              </p>
              <h3 className='font-semibold italic py-2 text-lg text-slate-500 dark:text-pink-500'>Self-taught · 2021 - 2023</h3>
              <br />
              <h4 className="font-semibold italic text-lg font-medium py-0 pb-2 dark:text-gray-100">
                Skills
              </h4>
              <p className="font-semibold italic py-2 text-slate-500 font-medium  leading-8 dark:text-pink-500">
                Javascript + Typescript<br />
                React + Next.js<br />
                Node.js + Python<br />
                HTML + CSS<br />
                Git + Github<br />
                Scrum + Lean Agile methodologies<br />
                Project management<br />
                Team leadership<br />
                Excellent communication and collaboration abilities
              </p>
              <div className="font-semibold italic text-lg font-medium py-0 pb-2 dark:text-gray-100 p-0 pt-10"> Reach me on LinkedIn, WhatsApp or Cal.com
              <div className="text-5xl flex lg: gap-2 py-2 my-2 p-2 "><br />
              <ul>
                <li>
                  <a href="https://api.whatsapp.com/send?phone=5522992790998" target="_blank"><AiOutlineCoffee />
                  </a>
                </li>
              </ul>
             <br />
              <p className="text-sm dark:text-gray-100">If you need a Front-end developer, Designer. <br />I will be available from 8 a.m. to 6 p.m. (America/Sao Paulo)</p>
              </div>
              </div>      
            </div>
          </div>
        <section>
          <div className="text-center">     
            <h3 className="text-3xl py-1 dark:text-gray-100">About me</h3>
            <p className="text-md md:text-xl py-2 leading-8 text-slate-500 dark:text-pink-500">
              I am excited about the opportunity to pursue a career as<span className="text-slate-500 py-10"> a Software Engineer</span> or <span className="text-slate-500 py-10">Data Scientist/Analyst</span>. <br></br>I am deeply committed to using my skills and knowledge to create innovative solutions that address real-world problems and improve the quality of life for individuals and communities. Whether it’s developing software applications that streamline processes and increase efficiency, or designing data systems that provide valuable insights and inform decision-making, I am eager to contribute my talents and work collaboratively with others to achieve meaningful results.
            <br/>
            </p>
          </div>
          <div >
            <section>
              <footer>
                <br />
                <div className="text-center">
                <blockquote className="text-2xl font-semibold italic text-slate-500">
                Made with Love   
                <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
                <span className="relative text-slate-500"> by Steven</span> 
                </span>
                </blockquote>
                </div>
              </footer> 
              <br />
           </section>
          </div>
        </section>
      </main>
    </div>
  );
}
