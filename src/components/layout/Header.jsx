import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/Logo.png";
import Button from "../Button";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <>
      <Container>
        <div className={`pt-5 fixed z-1 w-[1170px]`}>
          <Flex className="justify-between">
            <div className="">
              <Image imgSrc={logo} />
            </div>
            <div className="">
              <ul className="flex gap-x-12 items-center ">
                <li className="flex items-center  text-[18px] font-openSan font-semibold text-[#192239] ">
                  <span className="hover:text-[#FF7628] hover:duration-300">
                    Home
                  </span>
                  <MdOutlineKeyboardArrowDown className="text-2xl pl-2" />
                </li>
                <li className="flex items-center  text-[18px] font-openSan font-semibold text-[#192239] ">
                  <span className="hover:text-[#FF7628] hover:duration-300">
                    About
                  </span>
                  <MdOutlineKeyboardArrowDown className="text-2xl pl-2" />
                </li>
                <li className="flex items-center  text-[18px] font-openSan font-semibold text-[#192239] ">
                  <span className="hover:text-[#FF7628] hover:duration-300">
                    Service
                  </span>
                  <MdOutlineKeyboardArrowDown className="text-2xl pl-2" />
                </li>
                <li className="flex items-center  text-[18px] font-openSan font-semibold text-[#192239] ">
                  <span className="hover:text-[#FF7628] hover:duration-300">
                    Protfolio
                  </span>
                  <MdOutlineKeyboardArrowDown className="text-2xl pl-2" />
                </li>
                <li className="flex items-center  text-[18px] font-openSan font-semibold text-[#192239] ">
                  <span className="hover:text-[#FF7628] hover:duration-300">
                    Price
                  </span>
                  <MdOutlineKeyboardArrowDown className="text-2xl pl-2" />
                </li>
                <li className="flex items-center  text-[18px] font-openSan font-semibold text-[#192239] ">
                  <span className="hover:text-[#FF7628] hover:duration-300">
                    Blog
                  </span>
                  <MdOutlineKeyboardArrowDown className="text-2xl pl-2" />
                </li>
              </ul>
            </div>
            <div className="">
              <Button btnText={"Contact Us"} className={"font-semibold"} />
            </div>
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default Header;
