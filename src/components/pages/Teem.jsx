import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { CiFacebook, CiLinkedin } from 'react-icons/ci';
import { FaInstagram } from 'react-icons/fa';
const Teem = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="text-center py-10">
      <div data-aos="fade-down">
        <h2 className="text-3xl font-bold mb-4">OUR FABULOUS TEAM</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          Meet the passionate individuals behind our success. Together, we
          combine creativity, expertise, and dedication to bring you the best
          results.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 mx-8">
        <div
          className="card card-compact bg-base-100 w-96 shadow-xl relative group"
          data-aos="fade-up"
        >
          <figure>
            <img
              src="https://shtheme.com/demosd/dolomia/wp-content/uploads/2022/11/hiker1.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body text-center">
            <h2 className="card-title">JOHN DOE</h2>
            <p className="text-start">Cortina, Italy</p>
          </div>

          <div className="absolute inset-0 flex justify-center items-center gap-4 bg-blue-100 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <CiFacebook className=" text-3xl hover:scale-110 transition-transform cursor-pointer" />
            <FaInstagram className="text-3xl hover:scale-110 transition-transform cursor-pointer" />
            <CiLinkedin className="text-3xl hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </div>

        <div
          className="card card-compact bg-base-100 w-96 shadow-xl group"
          data-aos="fade-left"
        >
          <figure>
            <img
              src="https://shtheme.com/demosd/dolomia/wp-content/uploads/2022/11/hiker2.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">JESSICA SIMPSON</h2>
            <p className="text-start">Chamonix-Mont-Blanc, France</p>
          </div>
          <div className="absolute inset-0 flex justify-center items-center gap-4 bg-blue-100 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <CiFacebook className=" text-3xl hover:scale-110 transition-transform cursor-pointer" />
            <FaInstagram className="text-3xl hover:scale-110 transition-transform cursor-pointer" />
            <CiLinkedin className="text-3xl hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </div>

        <div
          className="card card-compact bg-base-100 w-96 shadow-xl group"
          data-aos="fade-up-left"
        >
          <figure>
            <img
              src="https://shtheme.com/demosd/dolomia/wp-content/uploads/2022/11/hiker3.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p className="text-start">Kitzbühel, Austria</p>
          </div>
          <div className="absolute inset-0 flex justify-center items-center gap-4 bg-blue-100 bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
            <CiFacebook className=" text-3xl hover:scale-110 transition-transform cursor-pointer" />
            <FaInstagram className="text-3xl hover:scale-110 transition-transform cursor-pointer" />
            <CiLinkedin className="text-3xl hover:scale-110 transition-transform cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teem;
