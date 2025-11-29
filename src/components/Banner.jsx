import Container from "./Container";
import Image from "./Image";
import bannerLogo from "../assets/bannerLogo.png";
import Button from "./Button";
import banner from "../assets/Banner.png";

const Banner = () => {
  return (
    <>
      <Image imgSrc={banner} />
      <Container>
        <div className="mt-[150px] absolute top-[50px]">
          <Image imgSrc={bannerLogo} />
          <h1 className="text-[72px] font-openSan font-extrabold leading-[98px] text-[#192239]">
            We Are Digital <br />{" "}
            <span className="text-[#FF7628]">Marketing</span> Agency
          </h1>
          <p className="text-[20px] font-papi leading-9 text-[#6C7D93] pt-5">
            Use customer data to build great and solid product <br />{" "}
            experiences that convert. Digital marketing’s <br /> development has
            changed the way brands and <br /> businesses use technology for
            marketing.
          </p>
          <Button className={"font-bold mt-7.5"} btnText={"Get Free Quoto"} />
        </div>
      </Container>
    </>
  );
};

export default Banner;
