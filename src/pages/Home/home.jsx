import Slider from "@/components/slider/slider";
import React, { Suspense, useEffect, useState } from "react";

const Home = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/slides")
      .then((response) => response.json())
      .then((data) => setSlides(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  return (
    <section className=" w-full h-80">
      <Slider slides={slides} />
    </section>
  );
};

export default Home;
