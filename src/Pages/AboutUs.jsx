import React from "react";
import HeroDesign from "../heroSection/HeroDesign";

const AboutUs = () => {
  return (
    <div className="w-full h-[100vh] border-[1px] border-pink-500">
      <h2 className="flex justify-center font-bold text-[24px] underline mt-10">
        About Us
      </h2>

      <p className="m-10">
        SAIL is a visionary organization dedicated to empowering the next
        generation of tech professionals through education and opportunity. We
        believe that talent exists everywhere, but access to quality training
        and resources can be a barrier for many aspiring innovators. Our mission
        is to bridge this gap by providing scholarships to passionate and driven
        youth, enabling them to acquire in-demand skills in technology and
        digital innovation. At SAIL, we focus on equipping individuals with
        expertise in key areas such as Frontend Development, Backend
        Development, UI/UX Design, Graphic Design, Artificial Intelligence, and
        Data Science. These fields are shaping the future, and we are committed
        to ensuring that young talents, regardless of their background, have the
        opportunity to be part of this transformation. Through strategic
        partnerships with leading educational institutions and industry
        professionals, we offer comprehensive training programs designed to
        provide both theoretical knowledge and hands-on experience. Our scholars
        gain practical skills, mentorship, and access to real-world projects
        that prepare them for successful careers in the tech industry. We
        envision a world where financial constraints do not limit potential. By
        investing in the education and professional growth of young minds, we
        are fostering a new generation of problem-solvers, innovators, and
        leaders who will drive technological advancement and economic growth.{" "}
        <HeroDesign />
        SAIL is more than just a scholarship program; it is a movement towards
        inclusivity, innovation, and empowerment. We are committed to shaping
        the future of technology by nurturing skilled professionals who will
        make a lasting impact in their communities and beyond. Join us in our
        mission to unlock opportunities and transform lives. Together, we can
        build a brighter future, one scholarship at a time.
      </p>
    </div>
  );
};

export default AboutUs;
