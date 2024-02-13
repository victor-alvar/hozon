import { TitleSm } from "./Title";

export const Card = ({ data, caption, show, path }) => {
  return (
    <>
      <div className="card">
        <div className="card-img">
          <img src={data.cover} alt={data.title} />
        </div>
        <div className="card-details">
          <span href={`${path}/${data.id}`} className="title-link">
            <TitleSm title={data.title} />
          </span>
          {caption && (
            <h4 href={`${path}/${data.id}`} className="position">
              {caption}
            </h4>
          )}
          <div className="flex">
            <span> {data.catgeory} </span>{" "}
            {data.date && <span> / {data.date}</span>}
          </div>

          {show && (
            <div className="service-card-text">
              {data.desc.map((text, i) => (
                <p key={i}>{text.text}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
