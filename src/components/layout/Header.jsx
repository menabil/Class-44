import Container from "../Container";
import Flex from "../Flex";
import Image from "../Image";
import logo from "../../assets/Logo.png";
import Button from "../Button";

const Header = ({ className }) => {
  return (
    <div className={`${className} mt-5`}>
      <Container>
        <Flex className="justify-between">
          <div className="">
            <Image imgSrc={logo} />
          </div>
          <div className="">
            <ul className="flex gap-x-13 items-center">
              <li>Home</li>
              <li>About</li>
              <li>Service</li>
              <li>Portfolio</li>
              <li>Price</li>
              <li>Blog</li>
            </ul>
          </div>
          <div className="">
            <Button btnText={"Contact Us"} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Header;
