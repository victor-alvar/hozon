import Link from "next/link";
import { TitleSm } from "./Title";
import { HiOutlineArrowRight } from "react-icons/hi";

export const CardResources = ({ data, caption, show, path }) => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={data.cover} alt={data.title} />
        </div>
        <div className="card-details">
          <Link href={`${path}/${data.blogPath}`} className="title-link">
            <TitleSm title={data.title} />
          </Link>
          {caption && (
            <h4 href={`${path}/${data.id}`} className="position">
              {caption} <HiOutlineArrowRight className="link-icon" />
            </h4>
          )}
          <div className="category">
            <span>{data.catgeory}</span>
            {data.date && <span>&nbsp;-&nbsp;{data.date}</span>}
          </div>

          {show && (
            <ul>
              {data.desc.map((text, i) => (
                <li key={i}> - {text.text}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};
