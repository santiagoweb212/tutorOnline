import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./card";

const CardOpinions = () => {
  const [opinions, setOpinions] = useState([]);
  const fetchOpinions = async () => {
    const data = await axios.get("http://localhost:3001/coments");
    return data.data;
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetchOpinions();
        setOpinions(response);
      } catch (error) {
        console.error("Error setting opinions:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className=" flex  gap-8 justify-center mt-10 ">
      {opinions &&
        opinions.slice(0, 3).map((opinion) => {
          return (
            <Card
              key={opinion.id}
              foto={opinion.foto}
              nombre={opinion.nombre}
              opinion={opinion.opinion}
            />
          );
        })}
    </section>
  );
};

export default CardOpinions;
