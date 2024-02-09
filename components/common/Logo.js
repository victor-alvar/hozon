import Image from "next/image";
import img from "/public/images/hozon-logo.png";

export const Logo = ({ className }) => {
  return (
    <>
      <div className="logo-wrapper">
        <Image
          src={img}
          alt="Hozon logo"
          className={`${className}  company-logo`}
        />
      </div>
    </>
  );
};
