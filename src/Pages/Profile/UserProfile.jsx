import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { User, Mail, Phone, MapPin, Upload, Save, Camera } from 'lucide-react';

const UserProfile = () => {
  const [user, setUser] = useState({
    full_name: '',
    email: '',
    phone: '',
    address: '',
    gender: '',
    profile: '',
  });

  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 🔁 Fetch user data using localStorage ID
  // useEffect(() => {
  //   const id = localStorage.getItem('userId');
  //   if (!id) return;

  //   axios
  //     .get(`http://localhost:5000/api/profile/${id}`)
  //     .then((res) => {
  //       const data = res.data;
  //       setUser({
  //         full_name: data.full_name || '',
  //         email: data.email || '',
  //         phone: data.phone || '',
  //         address: data.address || '',
  //         gender: data.gender || '',
  //         profile: data.profile || '',
  //       });
  //       setPreviewUrl(data.profile || '');
  //     })
  //     .catch((err) => {
  //       console.error("Failed to fetch user:", err);
  //     });
  // }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleFile = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onload = (e) => setPreviewUrl(e.target.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const id = localStorage.getItem('userId');
    if (!id) {
      alert("User ID missing");
      setIsLoading(false);
      return;
    }

    const form = new FormData();
    form.append('fullName', user.full_name);
    form.append('email', user.email);
    form.append('phone', user.phone);
    form.append('address', user.address);
    form.append('gender', user.gender);
    if (image) form.append('profile', image);

    try {
      // await axios.put(`http://localhost:5000/api/update-profile/${id}`, form);
      // alert("Profile updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
      alert("Error updating profile");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">User Profile</h1>
          <p className="text-green-600">Manage your personal information</p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-green-100 overflow-hidden">
          {/* Profile Header */}
          <div className="relative bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 px-8 py-12">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10 flex flex-col items-center">
              <div className="relative group">
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src={previewUrl}
                    alt="Profile"
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                </div>
                <label className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer flex items-center justify-center">
                  <Camera className="text-white w-8 h-8" />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFile}
                    className="hidden"
                  />
                </label>
              </div>
              <h2 className="text-2xl font-bold text-white mt-4">{user.full_name}</h2>
              <p className="text-green-100">{user.email}</p>
            </div>
          </div>

          {/* Form Content */}
          <form onSubmit={handleSubmit} className="p-8">
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-green-800 mb-2">
                    <User className="w-4 h-4 mr-2 text-green-600" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="full_name"
                    value={user.full_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-green-200 rounded-xl bg-green-50/50 focus:outline-none focus:border-green-500"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-green-800 mb-2">
                    <Mail className="w-4 h-4 mr-2 text-green-600" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    disabled
                    className="w-full px-4 py-3 border-2 border-green-200 rounded-xl bg-green-100 text-green-700 cursor-not-allowed"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-green-800 mb-2">
                    <Phone className="w-4 h-4 mr-2 text-green-600" />
                    Phone
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-green-200 rounded-xl bg-green-50/50 focus:outline-none focus:border-green-500"
                    placeholder="Enter phone number"
                  />
                </div>

                {/* Gender */}
                <div className="space-y-2">
                  <label className="flex items-center text-sm font-semibold text-green-800 mb-2">
                    <User className="w-4 h-4 mr-2 text-green-600" />
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={user.gender}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-green-200 rounded-xl bg-green-50/50 focus:outline-none focus:border-green-500"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              {/* Address */}
              <div className="space-y-2">
                <label className="flex items-center text-sm font-semibold text-green-800 mb-2">
                  <MapPin className="w-4 h-4 mr-2 text-green-600" />
                  Address
                </label>
                <textarea
                  name="address"
                  value={user.address}
                  onChange={handleChange}
                  rows="3"
                  className="w-full px-4 py-3 border-2 border-green-200 rounded-xl bg-green-50/50 focus:outline-none focus:border-green-500 resize-none"
                  placeholder="Enter your address"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6 flex justify-end">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span className="flex items-center">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="w-5 h-5 mr-2" />
                        Save Profile
                      </>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
