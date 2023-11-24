import Slider from "@/components/slider/slider";
import React, { Suspense, useEffect, useState } from "react";
import Welcome from "./components/welcome";
import MostViewedSection from "./components/mostViewed/mostViewedSection";
import axios from "axios";
import SliderMostViewed from "./components/mostViewed/slider";
import ComunityOpinions from "./components/comunitySection/comunityOpinions";

const Home = () => {
  const [slides, setSlides] = useState([]);
  const [slideMostViewed, setSlideMostViewed] = useState([]);
  const fetchSlideMostViewed = async () => {
    const data = await axios.get("http://localhost:3001/cursos-populares");
    return data.data;
  };
  const fetchSlide = async () => {
    const data = await axios.get("http://localhost:3001/slides");
    return data.data;
  };
  useEffect(() => {
    const fecthData = async () => {
      const [slides, slideMostViewed] = await Promise.all([
        fetchSlide(),
        fetchSlideMostViewed(),
      ]);
      setSlides(slides);
      setSlideMostViewed(slideMostViewed);
    };
    fecthData();
  
  }, []);
  return (
    <>
      <section className=" w-full h-80">
        <Slider slides={slides} />
      </section>
      <Welcome
        text={
          "Únete a la comunidad de aprendizaje online y en vivo más grande de habla hispana"
        }
      />
      <MostViewedSection  >
        <SliderMostViewed slides={slideMostViewed}/>
      </MostViewedSection>
      <ComunityOpinions/>
    </>
  );
};

export default Home;
