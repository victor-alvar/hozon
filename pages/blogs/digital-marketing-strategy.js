import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import React from "react";

const MarketingStrategy = () => {
  return (
    <>
      <Head>
        <title>Start Digital Marketing Strategy</title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="DIGITAL MARKETING STRATEGY / APRIL 12, 2023" />{" "}
            <br />
            <br />
            <Title
              title="How to start a digital marketing strategy (that gets results)"
              className="title-bg"
            />
            <div className="img py">
              <img
                src="../images/b1.webp"
                alt="Girl with a laptop"
                width="100%"
                height="100%"
                className="round"
              />
            </div>
            <div className="desc">
              <TitleSm title="A digital marketing strategy provides the framework your company needs to make the best decisions for strategic development and implementation." />
              <p className="desc-p">
                {" "}
                When you ask yourself, ‘What is a digital marketing strategy,’
                you should automatically think about your customers. The very
                foundation of it relies on a firm understanding of your customer
                base to generate leads and produce conversions.
              </p>
              <p className="desc-p">
                Your target audience is the main key when trying to figure out
                how to do digital marketing. In fact, according to a study by
                Juniper Research, a targeted approach has the potential to
                improve conversions rates by as much as 355% from email
                marketing alone, potentially increasing profits by 781%.
              </p>
              <p className="desc-p">
                Your digital marketing strategy needs a unique approach that
                offers customers what your competitors are lacking. This is key
                to understanding how to do digital marketing properly.
              </p>
            </div>
          </div>
          <Banner />

          <div className="heading-title">
            <div className="desc">
              <TitleSm title="When considering how to start digital marketing, you can’t be afraid to fail." />

              <p className="desc-p">
                {" "}
                Often, it takes trial and error to find the perfect approach to
                generate the results you expect.
              </p>
              <p className="desc-p">
                Through this process, you are creating your own lead generation
                machine. Building it is the hard part. Once it is in place, all
                it takes is a little maintenance.
              </p>
              <p className="desc-p">
                Jump in with both feet, but don’t become discouraged if you
                don’t see results immediately.
              </p>
              <p className="desc-p">
                Once you’ve put your plan in action, remember to closely monitor
                your data (through analytics) to make adjustments to your
                digital marketing strategy where needed.
              </p>
              <p className="desc-p">
                If you stay with one tried and true method, you will be limiting
                your marketing potential. Success requires patience,
                determination, and consistency, so give it your all.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketingStrategy;
