import React from 'react'
import Carousel from 'react-multi-carousel'


const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};


const Slide = ({ products }) => {
    return (
        <Carousel responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            slidesToSlide={1}
            keyBoardControl={true}
            centerMode={true}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container"
        >
            {
                products.map((product) => {
                    return <img src={product.url} alt="" />
                })
            }
        </Carousel>
    )
}

export default Slide