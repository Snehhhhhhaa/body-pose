import React, { useState } from "react";
import "./UserProfile.css";

const UserProfile = () => {
  const [user, setUser] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    age: 25,
    gender: "Male",
    profilePic: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUser({ ...user, profilePic: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="profile-container">
      <h2>User Profile</h2>
      <div className="profile-card">
        <div className="profile-pic">
          <img src={user.profilePic || "https://via.placeholder.com/150"} alt="Profile" />
          {isEditing && <input type="file" accept="image/*" onChange={handleImageUpload} />}
        </div>

        <div className="profile-info">
          <label>Name:</label>
          {isEditing ? <input type="text" name="name" value={user.name} onChange={handleChange} /> : <p>{user.name}</p>}

          <label>Email:</label>
          <p>{user.email}</p>

          <label>Age:</label>
          {isEditing ? <input type="number" name="age" value={user.age} onChange={handleChange} /> : <p>{user.age}</p>}

          <label>Gender:</label>
          {isEditing ? (
            <select name="gender" value={user.gender} onChange={handleChange}>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          ) : (
            <p>{user.gender}</p>
          )}

          <button onClick={toggleEdit}>{isEditing ? "Save" : "Edit Profile"}</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
