// cursos.jsx
export const Cursos = ({ title, imageSrc }) => {
    return (
      <div className="bg-white pb-10">
        <section className="w-56 p-2 border-gray-500 border pb-8 ml-8">
          <div>
            <img src={imageSrc} alt={`Imagen de ${title}`} className="w-54 h-40 " />
          </div>
          <div className="flex flex-col justify-center items-center text-center">
            <p>{title}</p>
            <button
              type="button"
              className="bg-black text-white p-2 pl-3 pr-3 mt-3 rounded hover:bg-sky-700"
            >
              Empezar
            </button>
          </div>
        </section>
      </div>
    );
  };
  