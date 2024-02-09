import React from "react";
import { CardResources } from "./common/CardResources";
import { blogdata } from "@/assets/data/dummydata";

const BlogCard = () => {
  return (
    <>
      <div className="container blog-card grid-2 py">
        {blogdata.map((item) => (
          <CardResources data={item} key={item.id} path="blogs" />
        ))}
      </div>
    </>
  );
};

export default BlogCard;
