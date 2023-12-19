import React from "react";
import Start from "./start";

const StartRating = ({ rating }) => {
  const yellowBlack = "#dbce18";
  const middleStar = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={yellowBlack}
      className="w-6 h-6"
    >
      <defs>
        <linearGradient id="halfStarGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop
            offset="50%"
            style={{ stopColor: yellowBlack, stopOpacity: 1 }}
          />
          <stop
            offset="50%"
            style={{ stopColor: "transparent", stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="url(#halfStarGradient)"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
  const star = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={yellowBlack}
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={yellowBlack}
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
  const starFillNone = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke={yellowBlack}
      className="w-6 h-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
      />
    </svg>
  );
  const roundedRating = Math.round(rating * 2) / 2;

  const stars = Array.from({ length: 5 }, (_, index) => {
    const isHalfStar = roundedRating - index === 0.5;
    const isFilledStar = index < roundedRating;

    return (
      <span key={index} className="star">
        {isHalfStar ? middleStar : isFilledStar ? star : starFillNone}
      </span>
    );
  });
 
  return <div className=" flex">{stars}</div>;
};

export default StartRating;
