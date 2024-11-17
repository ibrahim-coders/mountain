import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
const AllMountainCard = () => {
  const data = useLoaderData();
  console.log(data);
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8 mx-4">
        {data.map(mountain => (
          <div
            key={mountain.id}
            className="p-4 border rounded-lg shadow-lg"
            data-aos="flip-up"
          >
            <img
              src={mountain.image}
              alt={mountain.title}
              className="w-full h-48 rounded-lg mb-4"
            />
            <div>
              <h2 className="text-2xl font-bold mb-2">{mountain.title}</h2>

              <h3 className="text-lg font-semibold mb-2">
                Eco-Friendly Features:
              </h3>
              <ul className="list-disc pl-6">
                {mountain.ecoFriendlyFeatures?.map((feature, index) => (
                  <li key={index} className="text-gray-700">
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className=" mt-2">
              <Link
                to={`/mountain/${mountain.id}`}
                className="btn bg-red-500 mx-4 my-2 text-white"
              >
                Explore Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default AllMountainCard;
