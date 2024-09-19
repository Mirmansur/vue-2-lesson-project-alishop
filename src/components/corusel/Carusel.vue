<template>
  <div class="container mx-auto py-8">
    <div class="main rounded-md">
      <swiper
        :slidesPerView="1"
        :spaceBetween="30"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
        }"
        :keyboard="{
          enabled: true,
        }"
        :pagination="{
          clickable: true,
        }"
        :navigation="true"
        :modules="modules"
        class="mySwiper_all"
      >
        <swiper-slide>
          <div class="slide-item flex justify-center items-center">
            <img
              src="https://gumlet-images.assettype.com/afaqs%2F2022-03%2F3b9cbba1-e1f0-4285-8a56-5865d2732437%2FScreenshot_2022_03_21_at_2_16_31_AM.png?format=webp&w=480&dpr=2.6"
              alt="Slide Image"
              class="w-full h-full object-cover"
            />
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="slide-item flex justify-center items-center">
            <img
              src="https://teamvelocitymarketing.com/wp-content/uploads/2024/01/3-laptops-genesis.png"
              alt="Slide Image"
              class="w-full h-full object-cover"
            />
          </div>
        </swiper-slide>

        <swiper-slide>
          <div class="slide-item flex justify-center items-center">
            <img
              src="https://cdn.images.express.co.uk/img/dynamic/59/590x/1790063_1.jpg"
              alt="Slide Image"
              class="w-full h-full object-cover"
            />
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class="slide-item flex justify-center items-center">
            <img
              src="https://fdn.gsmarena.com/imgroot/news/22/08/asus-zenbook-17-fold-oled/-1200/gsmarena_001.jpg"
              alt="Slide Image"
              class="w-full h-full object-cover"
            />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "swiper/vue";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Keyboard, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.mySwiper_all {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  border-radius: 20px;
}

.slide-item {
  width: 100%;
  height: 550px;
}
</style>
