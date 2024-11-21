import { useContext, useEffect, useState } from 'react';
import { auth } from '../../firebase.console';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { AuthContext } from '../AuthContext/AuthProvider ';

const UpdateProfile = () => {
  const { setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState(auth.currentUser?.displayName || '');
  const [photoURL, setPhotoURL] = useState(auth.currentUser?.photoURL || '');

  useEffect(() => {
    setName(auth.currentUser?.displayName || '');
    setPhotoURL(auth.currentUser?.photoURL || '');
  }, [auth.currentUser]);

  const handleUpdate = e => {
    e.preventDefault();
    updateProfile(auth.currentUser, { displayName: name, photoURL })
      .then(() => {
        const updatedUser = {
          ...auth.currentUser,
          displayName: name,
          photoURL,
        };
        setUser(updatedUser);
        toast.success('Profile updated successfully!');
        navigate('/myprofile');
      })
      .catch(error => {
        console.error('ERROR:', error.message);
      });
  };

  return (
    <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg mx-auto text-start my-10">
      <h1 className="text-2xl font-bold text-center mb-4">
        Update Your Profile
      </h1>
      <form onSubmit={handleUpdate} className="space-y-4">
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-gray-700 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            onChange={e => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            required
          />
        </div>
        {/* Photo URL Field */}
        <div className="mb-4">
          <label
            htmlFor="photoURL"
            className="block text-gray-700 font-medium mb-2"
          >
            Photo URL
          </label>
          <input
            type="url"
            name="photoURL"
            placeholder="Enter your photo URL"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            onChange={e => setPhotoURL(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-full hover:bg-blue-600 transition-colors"
        >
          Update Information
        </button>
      </form>
    </div>
  );
};

export default UpdateProfile;
