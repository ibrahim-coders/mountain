import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Hotel = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="w-11/12 mx-auto px-4">
      <div className="text-centerpy-8 px-4">
        <h2 className="text-3xl font-bold text-center my-4">Hotel Service</h2>
        <p className="text-gray-600 text-center max-w-2xl mx-auto">
          The forest paradise of warmth, tranquility, and exceptional
          hospitality. Explore breathtaking views, luxurious accommodations, and
          unforgettable experiences at Mountain Hotel.
        </p>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 py-8"
        data-aos="fade-up"
        data-aos-duration="3000"
      >
        {/* Card 1 */}
        <div className="card bg-base-100 shadow-xl rounded-lg">
          <figure>
            <img
              src="https://lh3.googleusercontent.com/proxy/mQH84b4g6e_2gT6TmMZ4hpAka_E0KDuohkG2jHrT3C6cAZKV5AgOkUKm1bng4BoO0BeJKqOfpauBqXIv-MlZjtjoA1C8Wm5dmi7AXWwevHeoRJbM1Isb0wSuTOQ5_NMqLvgj3WZNGODVYaix3qq2OTSOl2z6kZ4=w574-h384-n-k-rw-no-v1"
              alt="Hotel View"
              className="w-full h-64 object-cover rounded-t-lg"
            />
          </figure>
          <div className="card-body p-4 text-center">
            <h2 className="card-title text-lg font-bold">Hotel Name</h2>
            <p className="text-sm text-gray-600 text-start">
              Beautiful resort in the mountains
            </p>
            <p className="text-lg font-semibold text-gray-700 text-start">
              Price: $200/night
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card bg-base-100 shadow-xl rounded-lg">
          <figure>
            <img
              src="https://snow-mountain.ancorathemes.com/wp-content/uploads/2017/03/bg-12.jpg"
              alt="Hotel Room"
              className="w-full h-64 object-cover rounded-t-lg"
            />
          </figure>
          <div className="card-body p-4 text-center">
            <h2 className="card-title text-lg font-bold">Luxury Hotel</h2>
            <p className="text-sm text-gray-600 text-start">
              Relax in comfort with amazing views.
            </p>
            <p className="text-lg font-semibold text-gray-700 text-start">
              Price:<span className="text-gray-700"> $350/night</span>
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card bg-base-100 shadow-xl rounded-lg">
          <figure>
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipOG2aQggllaG-YAv9e861bicQyffDx_jj-gmR2s=w574-h384-n-k-rw-no-v1"
              alt="Hotel Interior"
              className="w-full h-64 object-cover rounded-t-lg"
            />
          </figure>
          <div className="card-body p-4 text-center">
            <h2 className="card-title text-lg font-bold">Elegant Stay</h2>
            <p className="text-sm text-gray-600 text-start">
              A cozy escape in the city.
            </p>
            <p className="text-lg font-semibold text-gray-700 text-start">
              Price: <span className="text-gray-800">$150/night</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotel;
