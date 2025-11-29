import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/Logo.png";

const Footer = () => {
  return (
    <div className="pt-[140px] pb-[60px]">
      <Container>
        <Flex className={"items-start"}>
          <div className="w-[45%]">
            <div className="">
              <Image imgSrc={logo} />
              <p className="font-nuni text-[#6C7D93] text-[18px] leading-[180%] pt-[50px]">
                Install any demo or template with a single click. You <br /> can
                mix and match all the demos & templates. Every <br /> demo can
                be turned into one or multi-page.
              </p>
            </div>
          </div>

          <div className="w-[55%] flex justify-between ">
            <div className="">
              <h3 className="font-openSan text-2xl font-semibold text-[#413F45] pb-12">
                Features
              </h3>
              <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                Home
              </p>
              <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                About
              </p>
              <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                Benifit
              </p>
              <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                Pricing
              </p>
              <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                Blog
              </p>
            </div>

            <div className="">
              <h3 className="font-openSan text-2xl font-semibold text-[#413F45] pb-12">
                Products
              </h3>
              <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                Task Management
              </p>
              <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                Company growth
              </p>
              <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                Time tracking
              </p>
            </div>

            <div className="">
              <h3 className="font-openSan text-2xl font-semibold text-[#413F45] pb-12">
                Support
              </h3>
              <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                Customer service
              </p>
              <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                Accessibility
              </p>
              <p className="font-nuni text-xl font-semibold text-[#6C7D93] pb-7.5">
                Contact us
              </p>
            </div>
          </div>
        </Flex>

        <div className="flex justify-between pt-20">
          <div className="w-[70%]">
            <p className="font-nuni text-[18px] text-[#6C7D93]">
              @2025 Innovate.All rights reserved.
            </p>
          </div>

          <div className="w-[30%] flex justify-between">
            <div className="pl-9">
              <p className="font-nuni text-[18px] text-[#6C7D93]">
                Privacy policy
              </p>
            </div>
            <div className="">
              <p className="font-nuni text-[18px] text-[#6C7D93]">
                Terms & condition
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
