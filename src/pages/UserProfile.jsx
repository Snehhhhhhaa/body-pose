import React, { useState } from "react";
import "./UserProfile.css";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "",
    age: "",
    height: "",
    weight: "",
    gender: "",
    healthIssues: "",
    profilePicture: "/profile.jpg", // Default profile image from public folder
  });

  // Handle input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUser({ ...user, profilePicture: imageUrl });
    }
  };

  // Handle form submission
  const handleSubmit = () => {
    console.log("User Data Submitted:", user);
  };

  return (
    <div className="profile-page">
      <div className="profile-banner">
        <div className="profile-content">
          {/* Profile Image */}
          <div className="profile-image">
            <img src={user.profilePicture} alt="Profile" />
            <input type="file" accept="image/*" onChange={handleImageUpload} />
          </div>

          {/* Editable User Info */}
          <div className="profile-info">
            <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Enter your name" />
            <input type="number" name="age" value={user.age} onChange={handleChange} placeholder="Age" />
            <input type="text" name="height" value={user.height} onChange={handleChange} placeholder="Height" />
            <input type="text" name="weight" value={user.weight} onChange={handleChange} placeholder="Weight" />
            <input type="text" name="gender" value={user.gender} onChange={handleChange} placeholder="Gender" />
            <input type="text" name="healthIssues" value={user.healthIssues} onChange={handleChange} placeholder="Health Issues" />

            {/* Submit Button */}
            <button className="submit-button" onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
