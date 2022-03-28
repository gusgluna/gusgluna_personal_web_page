import React from "react";
import responsive from "@img/responsive.png"

const Hero = () => {
  return (
    <section className="w-full" id="home">
      <div className="container pt-24 mx-auto text-center">
        <h2 className="text-xl sm:text-3xl text-pr_color ">gusgluna</h2>
        <h1 className="text-2xl sm:text-5xl m-4">Front-end Devolper</h1>
        <p className="mt-8 text-xl sm:text-2xl text-pr_color">Keep it simple, make it useful &amp; code it clean.</p>
        <img src={responsive} alt="responsive design" className="sm:w-6/12 w-full p-2 sm:p-0 mx-auto"/>
      </div>
    </section>
  );
};

export default Hero;
