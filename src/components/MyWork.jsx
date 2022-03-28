import React from "react";
import "@styles/MyWork.scss"

const MyWork = () => {
  return (
<section className="w-full pt-24" id="work">
  <div className="container mx-auto text-center text-pr_color p-4">
    <h3 className="text-4xl">My Work</h3>
    <section className="p-4 flex sm:flex-row flex-col items-center justify-around text-lg">
      <div className="overflow-hidden h-60 w-88 border-solid border-pr_color border-2 rounded-3xl bg-pr_color text-white m-2">
        <p className="flex items-center justify-center h-full w-full">Coming Soon...</p>
      </div>
      <div className="overflow-hidden h-60 w-88 border-solid border-pr_color border-2 rounded-3xl bg-pr_color text-white m-2">
        <p className="flex items-center justify-center h-full w-full">Coming Soon...</p>
      </div>
      <div className="card order-first overflow-hidden h-60 w-88 border-solid border-pr_color border-2 rounded-3xl pokedex m-2">
        <p className="flex items-center justify-center h-full w-full flex-col p-4 bg-pr_color text-white">
          POKEDEX <br/>
          I code a SPA pokedex using the pokeAPI, whit vanilla JS, Bootstrap and HTML. Deploy on Netlify with Webpack.<br />
          <br />
          <a className="font-bold p-2 underline" href="https://agitated-heisenberg-d4fc96.netlify.app/" target="_blank" rel="noopener noreferrer">
            Check it out...
          </a>
        </p>
      </div>
    </section>
  </div>
</section>

  );
};

export default MyWork;
