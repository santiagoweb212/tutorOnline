// main.jsx
import { Cursos } from "./cursos";
import { cursosData } from "./data";
import { useState } from "react";

export const Main = () => {
  const itemsPerPage = 5; // Número de cursos por página
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(cursosData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      handlePageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      handlePageChange(currentPage + 1);
    }
  };

  return (
    <>
      <div className="text-center p-8 text-3xl">
        <h2>"Bienvenido a Todos Tus Cursos"</h2>
      </div>
      <div className="flex flex-wrap">
        {cursosData.slice(startIndex, endIndex).map((curso, index) => (
          <Cursos key={index} title={curso.title} imageSrc={curso.imageSrc} />
        ))}
      </div>
      <div className="text-center mt-5 p-10 flex justify-center">
        <div className="flex items-center">
          <button
            className="border-b-2 border-white p-2 cursor-pointer text-black hover:text-white hover:bg-gray-500 transition-all"
            onClick={handlePrevPage}
          >
            {"<"}
          </button>
          <ul className="flex">
            {[...Array(totalPages)].map((_, index) => (
              <li key={index} className="inline-block mx-1">
                <a
                  href="#"
                  className={`border-b-2 border-white p-2 cursor-pointer ${
                    currentPage === index + 1
                      ? "text-blue-500 bg-gray-200"
                      : "text-black hover:text-white hover:bg-orange-500 transition-all"
                  }`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="border-b-2 border-white p-2 cursor-pointer text-black hover:text-white hover:bg-gray-500 transition-all"
            onClick={handleNextPage}
          >
            {">"}
          </button>
        </div>
      </div>
    </>
  );
};
