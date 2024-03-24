import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import "./Slider.css"
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Slider() {
  return (
    <Swiper
      className='col-md-10 rounded-lg border-amber-950 mt-6 bg-slate-500'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={100}
      slidesPerView={3}

      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      navigation={{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }}
    >
      {[...Array(3)].map((_, bannerIndex) => (
        <SwiperSlide key={`banner-${bannerIndex}`} className='w-100 flex justify-between'>
          {[...Array(3)].map((_, imageIndex) => (
            <img
              key={`image-${bannerIndex}-${imageIndex}`}
              src={`https://picsum.photos/id/${Math.floor(Math.random() * 1000)}/800/400`}
              alt={`Slide ${imageIndex + 1}`}
              className='m-2 rounded mt-[-20]'
            />
          ))}
        </SwiperSlide>
      ))}
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </Swiper>
  );
}
