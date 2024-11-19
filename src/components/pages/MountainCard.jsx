import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const MountainCard = ({ mountain }) => {
  const { title, image, ecoFriendlyFeatures, id } = mountain;
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      className="p-4 border rounded-lg shadow-lg"
      data-aos="fade-up"
      data-aos-duration="3000"
    >
      <img src={image} alt={title} className="w-full h-48 rounded-lg mb-4" />
      <div>
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <h3 className="text-lg font-semibold mb-2">Eco-Friendly Features:</h3>
        <ul className="list-disc pl-6">
          {ecoFriendlyFeatures.map((feature, index) => (
            <li key={index} className="text-gray-700 text-start">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className=" mt-2">
        <Link
          to={`/details/${id}`}
          className="btn bg-red-500 mx-4 my-2 text-white "
        >
          Explore Now
        </Link>
      </div>
    </div>
  );
};

export default MountainCard;
