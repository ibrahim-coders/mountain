import { NavLink, useLoaderData } from 'react-router-dom';
import BannerSlider from './BannerSlider';
import MountainCard from './MountainCard';

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <BannerSlider />
      <div>
        <div className="my-10">
          <h5 className="text-2xl text-center font-bold">All Famous Places</h5>{' '}
          <h1 className="font-bold text-5xl text-red-500 text-center">
            Explore Destinations
          </h1>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8 mx-4">
        {data.slice(0, 4).map(mountain => (
          <MountainCard key={mountain.id} mountain={mountain}></MountainCard>
        ))}
      </div>

      <button className="mx-auto block btn btn-primary my-8">
        <NavLink to="/allmountain">Show More</NavLink>
      </button>
    </div>
  );
};

export default Home;
