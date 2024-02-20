import Carousel from 'react-bootstrap/Carousel';
import slide_one from '../assets/image/slider1.jpg';
import slide_two from '../assets/image/slider2.jpg';
import Button from 'react-bootstrap/Button';
function Slider() {
  return (
    <>
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide_one}
          alt="First slide"
        />
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide_two}
          alt="Second slide"
        />

        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slide_one}
          alt="Third slide"
        />

        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    <div className="w-100 py-4 d-grid gap-2 bg-black">
      <Button variant="danger" className='m-auto w-50' size="lg">
        Reordered
      </Button>
    </div>
    {/* <div className='text-center' >
        <Button variant="danger" size="lg">Danger</Button>
    </div> */}
    </>
  );
}

export default Slider;