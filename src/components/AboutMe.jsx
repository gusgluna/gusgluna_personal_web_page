import React from "react";
import "../styles/AboutMe.scss"

const AboutMe = () => {
  return (
<section className="w-full text-white bg-pr_color pt-24" id="about-me">
  <div className="container mx-auto p-8 text-center h-full">
    <h3 className="text-xl sm:text-4xl ">Hi I'm gus, thanks for visit my site</h3>
    <div className="flex flex-col items-center justify-center p-4 h-full sm:flex-row">
      <p className="flex items-center justify-center grow shrink basis-0 text-base sm:text-2xl p-4">
        I'm a self taught developer, i started to code by hobby, after three
        years i decided to change my career to tech
        industry, because i love to code and i wanna be part of the
        future...
      </p>
      <section className="
      flex items-center justify-start flex-col
      grow shrink basis-0 bg-white text-pr_color
      p-0 sm:p-4 rounded-3xl text-xl">
        <span className="sm:text-3xl text-base font-bold mt-8">My Skills</span>
        <div className="icon-terminal bg-pr_color w-8 h-8 sm:w-12 sm:h-12" />
        <span className="text-base sm:text-2xl">Languages:</span>
        <p className="sm:text-xl text-sm">
        JavaScript, HTML, CSS, SASS, Tailwind <br />
        ReactJS, NodeJS, MongoDB, SQL &amp; Python.
        </p>
        <div className="icon-tools bg-pr_color w-8 h-8 sm:w-12 sm:h-12" />
        <span className="text-base sm:text-2xl mb-4"> Tools: </span>
        <p className="sm:text-xl text-sm">
        VSCode, VIM, Github, <br />
        NPM, Linux &amp; Terminal.
        </p>
      </section>
    </div>
  </div>
</section>

  );
};

export default AboutMe;
