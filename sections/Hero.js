import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1 className="hero-title">WE BUILD DIGITAL EXPERIENCES</h1>
          {/* 
          <div className="sub-heading">
            <TitleSm title="WEBSITES" /> <span>.</span>
            <TitleSm title="BRANDING" /> <span>.</span>
            <TitleSm title="DIGITAL MARKETING" />
          </div> */}
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="The last marketing agency you'll ever need" />
            <p>
              Hozon is a digital marketing agency specializing in multichannel
              digital strategy, SEO, paid media, social media, creative, email,
              PR and CRO.
            </p>
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className="text-center">
        <Title title="Latest news & articles" />
      </div>
      <BlogCard />
    </>
  );
};

export default Hero;
