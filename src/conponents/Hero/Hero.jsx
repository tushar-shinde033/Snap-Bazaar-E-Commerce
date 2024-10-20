import Carousel from "react-bootstrap/Carousel";
import mens_banner from "../Assets/banner_mens.png";
import womens_banner from "../Assets/banner_women.png";
import kids_banner from "../Assets/banner_kids.png";
import Image from "react-bootstrap/Image";
function UncontrolledExample() {
  return (
    <Carousel>
      <Carousel.Item interval={1000}>
        <Image src={mens_banner} alt="" />
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <Image src={womens_banner} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <Image src={kids_banner} alt="" />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
