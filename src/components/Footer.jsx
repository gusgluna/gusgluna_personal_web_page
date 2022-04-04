import React from "react";
import SocialLogo from "./SocialLogo";
import github_logo from "@logos/github_logo.svg"
import twitter_logo from "@logos/twitter_logo.svg"
import linkedin_logo from "@logos/linkedin_logo.svg"
import instagram_logo from "@logos/instagram_logo.svg"
import mail_logo from "@logos/mail_me.svg"

const Footer = () => {
  return (
  <footer className="w-full bg-pr_color text-white text-center text-2xl p-4">
  <div className="container mx-auto">
    <div className="social">
      lets chat!
      <ul className="flex items-center justify-center m-4">
        <SocialLogo link="https://github.com/gusgluna" imgSrc={github_logo} alt="github"/>
        <SocialLogo link="https://twitter.com/gusgluna" imgSrc={twitter_logo} alt="twitter"/>
        <SocialLogo link="https://www.linkedin.com/in/gusgluna/" imgSrc={linkedin_logo} alt="linkedin"/>
        <SocialLogo link="https://www.instagram.com/gusgluna/" imgSrc={instagram_logo} alt="instagram"/>
        <SocialLogo link="mailto:gusgluna@gmail.com" imgSrc={mail_logo} alt="mail"/>
      </ul>
    </div>
    <p className="text-sm">coded with ❤ by gusgluna © 2022</p>
  </div>
</footer>

  );
};

export default Footer;
