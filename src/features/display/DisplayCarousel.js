
import { Carousel, CarouselCaption, CarouselItem } from 'reactstrap';



const DisplayCarousel = () => {
    return (
        <Carousel>
            <CarouselItem>
               
            <CarouselCaption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
                

            <CarouselCaption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </CarouselCaption>
            </CarouselItem>
            <CarouselItem>
            

            <CarouselCaption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </CarouselCaption>
            </CarouselItem>
        </Carousel>
    )
};
          


    


export default DisplayCarousel;