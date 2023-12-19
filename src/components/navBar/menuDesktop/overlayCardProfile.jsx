import { linksMenuMobile } from "@/constants/links";
import React from "react";
import { NavLink } from "react-router-dom";
import UserCardPrevProfile from "../userCardPrevProfile";
import { useAuthToken } from "@/store/userTokenStore";

const OverlayCardProfile = ({ isVisible }) => {
  const profileData = {
    name: "karla xxxxx",
    email: "xxxx@gamil.com",
    img: "/public/woman.webp",
  };
  const closeSession = useAuthToken((state) => state.logOutUser);
  return (
    <>
      {isVisible && (
        <div className="text-white absolute z-40  botom-0 w-60 right-0  rounded-md  bg-customDarkGray p-2">
          <div className="flex pb-2 border-b items-center gap-2">
            <img
              src={profileData.img}
              alt=""
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <p className="font-bold text-white">{profileData.name}</p>
              <p className="text-sm text-[#e4e4e4] ">{profileData.email}</p>
            </div>
          </div>
          <ul>
            {linksMenuMobile.map((link) => (
              <li key={link.id}>
                <NavLink to={link.link}>{link.title}</NavLink>
              </li>
            ))}
            <button
              className="px-4 mx-auto py-1 font-poppins text-sm font-medium bg-red-400 hover:bg-red-700 text-white rounded-md place-self-start"
              onClick={closeSession}
            >
              cerrar session
            </button>
          </ul>
        </div>
      )}
    </>
  );
};

export default OverlayCardProfile;
