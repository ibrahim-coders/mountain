import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthContext/AuthProvider ';

const MyProfile = () => {
  const { users, loading } = useContext(AuthContext);

  const navigate = useNavigate();

  if (loading) {
    return <span className="loading loading-ring loading-lg"></span>;
  }
  const { displayName, email, photoURL } = users;
  console.log(photoURL);

  return (
    <div className="p-6 bg-white shadow-md  max-w-screen-sm mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Welcome, {displayName}!</h1>
      <div className=" rounded-lg p-4">
        <div className="flex justify-center items-center mb-4">
          <img
            src={photoURL}
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-2 border-gray-300"
          />
        </div>
        <p className="text-lg font-medium">Name: {displayName}</p>
        <p className="text-lg font-medium">Email: {email}</p>
        <button
          onClick={() => navigate('/')}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
