import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
import SlideInfo from "./SlideInfo";
import allergy from "../assets/images/allergy.png";
import nutrition from "../assets/images/cutlery.png";
import stomach from "../assets/images/gastroenterology.png";
import immunity from "../assets/images/immunity.png";
import skin from "../assets/images/skin.png";
import hydration from "../assets/images/water-drops-svgrepo-com.svg";
import weight from "../assets/images/weight-scale.png";

const SwiperContainer = () => {
  return (
    <>
      <Swiper
        style={{
          "--swiper-pagination-color": "#AF0000",
        }}
        speed={600}
        keyboard={{
          enabled: true,
        }}
        pagination={{ dynamicBullets: true, clickable: true }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="swiper"
      >
        <SwiperSlide className="slide">
          <SlideInfo image={nutrition} title="Quality of Nutrition">
            Whole foods and unprocessed animal proteins have a higher quality of
            nutrients compared to processed foods. Kibble is made through a
            process called food extrusion and during this process, some of the
            ingredient's nutritional values and protein content are lost due to
            the high temperatures used.
          </SlideInfo>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <SlideInfo image={stomach} title="Better Digestibility">
            You are feeding food in its most digestible state, which allows more
            of the nutrients to be absorbed. This can also result in smaller
            poops and less frequent pooping compared to when feeding
            commercially processed dog foods that contain fillers.
          </SlideInfo>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <SlideInfo image={hydration} title="Better Hydration">
            The moisture content of raw food is about 70% while dry food only
            has about 6-10% of moisture. Lack of moisture can cause urinary
            health problems as well as impair normal bodily functions in our
            pets.
          </SlideInfo>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <SlideInfo image={weight} title="Weight Management">
            Raw foods are lower in carbs and packed with proteins and fats that
            provide your pet with more energy, making it easier to maintain a
            healthy weight. Commercial pet foods contain a lot of carb fillers
            that can lead obesity.
          </SlideInfo>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <SlideInfo image={allergy} title="Allergy Relief">
            Some pets experience allergies to the additives and fillers in
            commercial pet foods. A raw diet eliminates these triggers.
          </SlideInfo>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <SlideInfo image={immunity} title="Stronger Immune System">
            Nutrient dense raw foods can help boost your pet’s immune system,
            making them less susceptible to illnesses.
          </SlideInfo>
        </SwiperSlide>
        <SwiperSlide className="slide">
          <SlideInfo image={skin} title="Healthy Skin & Coat">
            The nutrients in raw foods, such as Omega-3 fatty acids promote
            shiny coats and alleviate skin problems.
          </SlideInfo>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default SwiperContainer;
