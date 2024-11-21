import { useLoaderData } from 'react-router-dom';
import Modal from './Modal';
// import { Helmet } from 'react-helmet-async';

const Detalis = () => {
  const data = useLoaderData();

  const {
    adventureCost,
    adventureLevel,
    bookingAvailability,
    category,
    duration,
    ecoFriendlyFeatures,
    image,
    includedItems,
    location,
    maxGroupSize,
    shortDescription,
    specialInstructions,
    title,
  } = data;

  return (
    <div className="container mx-auto p-4 max-w-screen-md">
      {/* <Helmet>
        <title>HIKKER/DetailsS</title>
      </Helmet> */}
      <div className="w-full  p-4 mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-80 object-cover overflow-hidden"
        />
        <div className="p-4">
          <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
          <p className="text-gray-600">{shortDescription}</p>
          <div className="flex flex-col md:flex-row md:justify-between text-start pt-4">
            <div>
              {' '}
              <div className="mt-4 space-y-2">
                <p className="text-sm text-gray-600">
                  <strong>Location:</strong> {location}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Category:</strong> {category}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Adventure Level:</strong> {adventureLevel}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Cost:</strong> ${adventureCost}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Duration:</strong> {duration}
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Max Group Size:</strong> {maxGroupSize}
                </p>

                <div>
                  <strong>Special Instructions:</strong>
                  <ul className="list-disc pl-5 text-sm text-gray-600">
                    {specialInstructions.map((instruction, index) => (
                      <li key={index}>{instruction}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              {' '}
              <div>
                <strong>Eco-friendly Features:</strong>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  {ecoFriendlyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div>
                <strong>Included Items:</strong>
                <ul className="list-disc pl-5 text-sm text-gray-600">
                  {includedItems.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-start">
            <button
              className={`btn py-2 rounded-md text-white ${
                bookingAvailability ? 'bg-blue-500' : 'bg-gray-500'
              }`}
              disabled={!bookingAvailability}
            >
              {bookingAvailability ? 'Book Now' : 'Not Available'}
            </button>
          </div>
        </div>
        <button
          className="btn bg-red-500 text-white"
          onClick={() => document.getElementById('my_modal_1').showModal()}
        >
          Talk with Expert
        </button>
      </div>
      <Modal />
    </div>
  );
};

export default Detalis;
