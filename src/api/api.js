import { fetchData } from "@/utils/apiUtils";

export const fetchSlide = async () => {
  return fetchData("/slides");
};

export const fetchSlideMostViewed = async () => {
  return fetchData("/cursos-populares");
};

export const fetchCategories = async () => {
  return fetchData("/categorias");
};
