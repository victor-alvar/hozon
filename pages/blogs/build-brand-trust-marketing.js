import Banner from "@/components/Banner";
import { Title, TitleSm } from "@/components/common/Title";
import Head from "next/head";
import React from "react";

const MarketingStrategy = () => {
  return (
    <>
      <Head>
        <title>Build Brand Trust Through Marketing</title>
      </Head>
      <section className="post-details bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="BUILD BRAND TRUST THROUGH MARKETING / SEPTEMBER 23, 2023" />{" "}
            <br />
            <br />
            <Title
              title="Want to build a brand your customer's trust?"
              className="title-bg"
            />
            <div className="img py">
              <img
                src="../images/b4.jpg"
                alt="Two girls posing"
                width="100%"
                height="100%"
                className="round"
              />
            </div>
            <div className="desc">
              <TitleSm title="build trust in your brand, because believe it or not, we're in a bit of a crisis. a  brand trust crisis, that is." />
              <p className="desc-p">
                {" "}
                According to the 2018 Edelman Trust Barometer, only 48% of the
                general population in the United States trusts businesses,
                falling from 58% last year and with a general trend moving
                downward over the past decade.
              </p>
              <p className="desc-p">
                This is pretty bad news for brands, as it is proven to be a
                pretty big deal when it comes to customer acquisition and
                loyalty.
              </p>
              <p className="desc-p">
                In a recent study, PwC found that more than one in three ranked
                ‘trust in brand’ as among their top three reasons that influence
                their decision to shop at a particular retailer, other than
                price. This has fallen significantly. Just a decade ago, that
                number would have looked pretty different.
              </p>
              <p className="desc-p">
                But that was before when consumers didn’t have hundreds of
                brands competing in the same space to choose from and the
                internet to inform their decisions. And that was before brands
                were all-in on the content trend, becoming not just merchants
                but trusted sources of information.
              </p>
              <p className="desc-p">
                These days, consumers turn to brands to keep them up-to-date and
                informed, whether it’s through blog content, social media
                interactions or a YouTube channel. That’s because they need
                proof.
              </p>
            </div>
          </div>
          <Banner />

          <div className="heading-title">
            <div className="desc">
              <TitleSm title="How to Build Trust in Your Brand." />

              <p className="desc-p">
                {" "}
                Your consumers need a reason to choose your brand over the
                who-knows-how-many others in your space, and a big name alone is
                no longer enough to ensure a strong customer base.
              </p>
              <p className="desc-p">
                Since the Cambridge Analytica scandal broke, consumer confidence
                in the brand has plummeted, and the social giant reported a 20%
                decrease in shares last quarter. That, and the growing
                skepticism around “fake news,” has led to many wary would-be
                customers – and brands scrambling to prove they can live up to
                their promises.
              </p>
              <p className="desc-p">
                Sadly, 62% of Americans see corporations as corrupt. This is a
                major concern among consumers. But, while trust does take time
                to build, brands can no longer afford the often lengthy wait
                times that it takes to spread organically.
              </p>
              <p className="desc-p">
                Instead, they need to adopt a proactive strategy to secure and
                solidify assurance among their customers early on.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MarketingStrategy;
