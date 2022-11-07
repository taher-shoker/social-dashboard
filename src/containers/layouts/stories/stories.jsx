import React from "react";
import Story from "./component/story";
import Carousel from "react-multi-carousel";
import { useStories } from "./stories.services";

function Stories() {
  const { stories } = useStories();
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 7,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };

  return (
    <div className="stories">
      <Carousel
        arrows={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        autoPlay={true}
        customTransition="all .5"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <Story
          item={{
            id: 1,
            name: "you",
            src: "https://pbs.twimg.com/profile_images/1346200826998644736/GXKFXDl7_400x400.jpg",
          }}
          className="you"
        />
        {stories?.map((s, index) => (
          <Story item={s} key={s.id} />
        ))}
      </Carousel>
    </div>
  );
}

export default Stories;
