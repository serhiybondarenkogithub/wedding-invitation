import "./index.css";
import Swiper from "swiper";
import { Mousewheel } from "swiper/modules";

new Swiper("[data-swiper]", {
  modules: [Mousewheel],
  direction: "vertical",
  slidesPerView: 1,
  mousewheel: true,
  cssMode: true,
  speed: 700,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
