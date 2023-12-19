import { fetchData, postData } from "@/utils/apiUtils";

export const fetchSlide = async () => {
  return fetchData("/slides");
};

export const fetchSlideMostViewed = async () => {
  return fetchData("/cursos-populares");
};

export const fetchCategories = async () => {
  return fetchData("/categorias");
};

export const postUser = async (data) => {
  return postData("/user/register", data);
};
 export const postLoginUser = async(data)=>{
   return postData("/user/login",data)
 }