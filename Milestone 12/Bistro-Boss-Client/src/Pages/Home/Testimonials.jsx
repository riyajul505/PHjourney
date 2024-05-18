import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SectionTitle from "../../Components/SectionTitle";

import '@smastrom/react-rating/style.css';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="space-y-10">
      <SectionTitle
        subHeading={"What Our Client Say"}
        heading={"Testimonials"}
      />
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((i) => (
          <SwiperSlide key={i._id}>
            <div className="m-20 flex flex-col items-center space-y-5">
            <Rating style={{ maxWidth: 250 }} value={i.rating}/>
              <p>{i.details}</p>
              <h1>{i.name}</h1>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
