import React from "react";

const UserCardPrevProfile = () => {
  const profileData = {
    name: "karla xxxxx",
    email: "xxxx@gamil.com",
    img: "/public/woman.webp",
  };
  return (
    <div className="flex py-3 px-3 border-b items-center gap-2">
      <img
        src={profileData.img}
        alt=""
        className="w-16 h-16 rounded-full object-cover"
      />
      <div>
        <p className="font-bold text-customDarkGray">{profileData.name}</p>
        <p className="text-sm text-gray-500 ">{profileData.email}</p>
      </div>
    </div>
  );
};

export default UserCardPrevProfile;
