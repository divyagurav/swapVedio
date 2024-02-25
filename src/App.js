import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

const data = [
  {
    id: 1,
    username: "Shudrak",
    testimonial: "lorem ipsum.",
    url: "https://www.youtube.com/embed/NSAOrGb9orM?si=YxZ3LfwM8o9FWofz",
  },
  {
    id: 2,
    username: "adrik",
    testimonial: "lorem ipsum.",
    url: "https://www.youtube.com/embed/hjOEj4jcYmU?si=k8yE8cLO9u4Big__",
  },
  {
    id: 3,
    username: "divya",
    testimonial: "lorem ipsum.",
    url: "https://www.youtube.com/embed/nqye02H_H6I?si=DaIiY3JU4j7_-rEa",
  },
  {
    id: 4,
    username: "shankar",
    testimonial: "lorem ipsum.",
    url: "https://www.youtube.com/embed/3Q_9FElbiEg?si=9vrFbJsgUv-CIs4F",
  },
  {
    id: 5,
    username: "neha",
    testimonial: "lorem ipsum.",
    url: "https://www.youtube.com/embed/l5w_k0Qf31A?si=qKF1RWmCSKLO1mNd",
  },
  {
    id: 6,
    username: "harish",
    testimonial: "lorem ipsum.",
    url: "https://www.youtube.com/embed/AloRSoJYXXc?si=KP-z1djYAyUK2nch",
  },
];

function App() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {/* <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
      {/* ... */}
      {data.map((user) => (
        <div style={{ height: "500px" }}>
          <SwiperSlide key={user.id} className="slide">
            <div className="user">
              <iframe
                width="500"
                height="300"
                src={user.url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                autoplay
              ></iframe>
              {/* <div>{user.username}</div>
            <div>{user.testimonial}</div> */}
            </div>
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
}

export default App;
