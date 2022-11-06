import React from "react";
import Story from "./component/story";
import Carousel from "react-multi-carousel";
import { useStories } from "./stories.services";


function Stories() {
 const {stories} = useStories()
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        }
    };

    return (
        <div className="stories">
            <Carousel
                arrows={false}
                swipeable={true}
                draggable={true}
                showDots={false}
                responsive={responsive}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
            >
                {['1', '2', '3', '15', '2', '3', '1', '2', '3', '1', '2', '3', '1', '2', '3'].map((el, index) => (
                    <Story item={el} />

                ))}

            </Carousel>

        </div>
    );
}

export default Stories;



