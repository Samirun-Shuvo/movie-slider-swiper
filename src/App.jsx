import { Swiper, SwiperSlide } from "swiper/react";

import "./App.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/autoplay";
import "swiper/css/a11y";
import "swiper/css/controller";
import "swiper/css/effect-cards";
import "swiper/css/effect-creative";
import "swiper/css/effect-cube";
import "swiper/css/effect-fade";
import "swiper/css/effect-flip";
import "swiper/css/free-mode";
import "swiper/css/grid";
import "swiper/css/hash-navigation";
import "swiper/css/history";
import "swiper/css/keyboard";
import "swiper/css/manipulation";
import "swiper/css/mousewheel";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/parallax";
import "swiper/css/scrollbar";
import "swiper/css/thumbs";
import "swiper/css/virtual";
import "swiper/css/zoom";

import {
  EffectCoverflow,
  Autoplay,
  Navigation,
  Pagination,
} from "swiper/modules";

const info = [
  {
    id: 1,
    image: "./images/image-1.jpg",
    des: "description 1",
  },
  {
    id: 2,
    image: "./images/image-2.jpg",
    des: "description 2",
  },
  {
    id: 3,
    image: "./images/image-3.jpg",
    des: "description 3",
  },
  {
    id: 4,
    image: "./images/image-4.jpg",
    des: "description 4",
  },
];

function App() {
  return (
    <div className="container flex justify-between">
      <Swiper
        effect={"coverflow"}
        autoplay={true}
        grabCursor={true}
        centeredSlides={false}
        loop={true}
        slidesPerView={3}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
      >
        {info.map((data) => (
          <SwiperSlide key={data.id}>
            <img src={data.image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default App;
