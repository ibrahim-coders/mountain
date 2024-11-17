import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const BannerSlider = () => {
  const slides = [
    {
      id: 1,
      image:
        'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*_crAGd8QGQZNbfjxfi8cjw.jpeg',
      title: 'Rainforest Ziplining',
      description: 'Feel the thrill of soaring through lush rainforests.',
    },
    {
      id: 2,
      image:
        'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ZX_vumEJ6QUbIR3N_tOhGg.jpeg',
      title: 'Mangrove Kayaking',
      description:
        'Paddle through serene mangroves and discover exotic wildlife.',
    },
    {
      id: 3,
      image:
        'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*zT60b4kegq8Fi9DyQjDnyQ.jpeg',
      title: 'Mountain Trekking',
      description:
        'Conquer breathtaking peaks and experience nature like never before.',
    },
  ];

  return (
    <div className="w-full max-w-screen-xl mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
      >
        {slides.map(slide => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-[400px] bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white text-center">
                <h2 className="text-4xl font-bold">{slide.title}</h2>
                <p className="mt-4 text-lg">{slide.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
