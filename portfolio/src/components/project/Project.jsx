import React from 'react';
import './project.css';
import { Data } from './Data';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    centerMode: true, // Focus the center item
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    centerMode: true,
  },
  tablet: {
    breakpoint: { max: 768, min: 576 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 576, min: 0 },
    items: 1,
  },
};

const Testimonials = () => {
  return (
    <section className="testimonial container section">
      <h2 className="section__title">My clients say</h2>
      <span className="section__subtitle">Testimonial</span>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="testimonial__container"
        removeArrowOnDeviceType={['tablet', 'mobile']}
        itemClass="testimonial__card"
        renderButtonGroupOutside={true}
        showDots={false} // Optional if you don't want dots
      >
        {Data.map(({ id, image, title, description, price, salePrice, rating }) => (
          <div className="testimonial__card" key={id}>
            {/* Image section */}
            <img src={image} alt={title} className="testimonial__img" />
            
            {/* Product title */}
            <h3 className="testimonial__name">{title}</h3>
            
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default Testimonials;