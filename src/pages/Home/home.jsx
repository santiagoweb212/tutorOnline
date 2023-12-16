import Slider from "@/components/slider/slider";
import Welcome from "./components/welcome";
import MostViewedSection from "./components/mostViewed/mostViewedSection";
import SliderMostViewed from "./components/mostViewed/slider";
import ComunityOpinions from "./components/comunitySection/comunityOpinions";
import { useQueries } from "react-query";
import useCategoriesStore from "@/store/useCategorieStore";
import { QUERYKEYS } from "@/constants/stringKeys";
import { fetchCategories, fetchSlide, fetchSlideMostViewed } from "@/api/api";

const Home = () => {
  const setCategories = useCategoriesStore((state) => state.setCategories);
  const [slideImg, popularCourse] = useQueries([
    {
      queryKey: [QUERYKEYS.SLIDEIMG],
      queryFn: fetchSlide,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
    {
      queryKey: [QUERYKEYS.POPULARCOURSE],
      queryFn: fetchSlideMostViewed,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
    },
    {
      queryKey: [QUERYKEYS.CATEGORIES],
      queryFn: fetchCategories,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onSuccess: (data) => {
        if (data) setCategories(data);
      },
    },
  ]);

  return (
    <>
      <section className=" w-full h-80">
        <Slider slides={slideImg.data} />
      </section>
      <Welcome text="Únete a la comunidad de aprendizaje online y en vivo más grande de habla hispana" />
      <MostViewedSection>
        {popularCourse.isLoading ? (
          <p>Cargando...</p>
        ) : (
          <SliderMostViewed slides={popularCourse.data} />
        )}
      </MostViewedSection>
      <ComunityOpinions />
    </>
  );
};
export default Home;
