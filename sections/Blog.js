import BlogCard from "@/components/BlogCard";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";

const Blog = () => {
  return (
    <>
      <section className="agency bg-top">
        <div>
          <div className="heading-title">
            <TitleSm title="BLOG" /> <br />
            <br />
            <Title title="Our views on marketing, design & technology" />
          </div>
          <BlogCard />
        </div>
      </section>
    </>
  );
};

export default Blog;
