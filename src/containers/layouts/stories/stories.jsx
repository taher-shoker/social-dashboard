import React from "react";
import Story from "./component/story";
import Carousel from "react-multi-carousel";
import { useStories } from "./stories.services";

function Stories() {
  const { stories } = useStories();
  return (
    <div className="stories">
      <Carousel
       additionalTransfrom={0}
      //  arrows
       autoPlaySpeed={3000}
       centerMode={false}
       className=""
       containerClass="container-with-dots"
       dotListClass=""
       draggable
       focusOnSelect={false}
       keyBoardControl
       minimumTouchDrag={80}
       pauseOnHover
       infinite
       renderArrowsWhenDisabled={false}
       renderButtonGroupOutside={false}
       renderDotsOutside={false}
       responsive={{
         desktop: {
           breakpoint: {
             max: 3000,
             min: 1024
           },
           items: 7,

           partialVisibilityGutter: 40
         },
         mobile: {
           breakpoint: {
             max: 464,
             min: 0
           },
           items: 3,
           partialVisibilityGutter: 30
         },
         tablet: {
           breakpoint: {
             max: 1024,
             min: 464
           },
           items: 5,
           partialVisibilityGutter: 30
         }
       }}
       rewind={false}
       rewindWithAnimation={false}
       rtl={false}
       shouldResetAutoplay
       showDots={false}
       sliderClass=""
       slidesToSlide={1}
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
