import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./card";
import { useQuery } from "react-query";
const fetchOpinions = async () => {
  const data = await axios.get("http://localhost:3001/coments");
  return data.data;
};
const CardOpinions = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["opinions"],
    queryFn: fetchOpinions,
    refetchOnMount: false,
  });
 
  return (
    <section className=" flex flex-col md:flex-row gap-12 justify-center mt-10 ">
      {data &&
        data.slice(0, 3).map((opinion) => {
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
