import Slider, { CustomArrowProps } from 'react-slick';
import LagImg from '../../assets/images/interior-c.jpg';
import PhImg from '../../assets/images/interior-d.jpg';
import KdImg from '../../assets/images/kd.jpg';
import YenImg from '../../assets/images/yen.jpg';
import InteriorImg from '../../assets/images/interior1.jpg';
import InteriorImg1 from '../../assets/images/interior2.jpg';
import InteriorE from '../../assets/images/interior-e.jpg';
import InteriorF from '../../assets/images/interior-f.jpg';
import { LeftScrollArrow, RightScrollArrow } from '../../assets/icons';
import { ImageContainer, Text, Container } from './styles';

const data = [
  {
    url: LagImg,
    price: 'NGN350, 000',
  },
  {
    url: PhImg,
    price: 'NGN450, 000',
  },
  {
    url: KdImg,
    price: 'NGN350, 000',
  },
  {
    url: YenImg,
    price: 'NGN350, 000',
  },
  {
    url: InteriorImg,
    price: 'NGN350, 000',
  },
  {
    url: InteriorImg1,
    price: 'NGN350, 000',
  },
  {
    url: InteriorE,
    price: 'NGN350, 000',
  },
  {
    url: InteriorF,
    price: 'NGN350, 000',
  },
];

const Carousel: React.FC = () => {
  const SlickArrowLeft = ({
    currentSlide,
    slideCount,
    ...props
  }: CustomArrowProps) => <LeftScrollArrow {...props} />;
  const SlickArrowRught = ({
    currentSlide,
    slideCount,
    ...props
  }: CustomArrowProps) => <RightScrollArrow {...props} />;
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRught />,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Slider {...settings} className="card--inner">
        {data.map((item, index) => (
          <div>
            <ImageContainer key={index}>
              <img src={item.url} alt="house" className="image" />
              <div className="image__overlay">
                <Text>{item.price}</Text>
                <Text>Book Now</Text>
              </div>
            </ImageContainer>
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default Carousel;
