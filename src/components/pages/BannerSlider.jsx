const BannerSlider = () => {
  return (
    <div className="w-full">
      <div className="carousel w-full h-96 md:h-[450px]">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*_crAGd8QGQZNbfjxfi8cjw.jpeg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-center flex flex-col items-center space-y-2 px-4">
            <h2 className="text-lg md:text-2xl lg:text-4xl font-bold text-red-600">
              Mangrove Kayaking
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-white">
              Conquer breathtaking peaks and experience nature like never before
            </p>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*ZX_vumEJ6QUbIR3N_tOhGg.jpeg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-center flex flex-col items-center space-y-2 px-4">
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-red-600">
              Mountain Trekking
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-white">
              Feel the thrill of soaring through lush rainforests.
            </p>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://miro.medium.com/v2/resize:fit:1100/format:webp/1*zT60b4kegq8Fi9DyQjDnyQ.jpeg"
            className="w-full"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-center flex flex-col items-center space-y-2 px-4">
            <h2 className="text-lg md:text-2xl lg:text-3xl font-bold text-red-600">
              Rainforest Ziplining
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-white">
              Feel the thrill of soaring through lush rainforests.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
