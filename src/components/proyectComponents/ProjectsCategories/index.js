import React from 'react';

export default function ProjectCategories() {
  return (
    <div className="container py-10 md:py-20">
      <div class="lg:grid sm:grid-flow-col gap-10">
        <div
          
          className="box-shadow-category sm:row-span-3 items-center rounded-3xl flex duration-500 border-2 border-[#A7A6A6] cursor-pointer hover:duration-500"
        >
          <div className="px-8 py-8 lg:py-0">
            <img className="w-24 m-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ZZ-3TcfpOo7KFWoZTWq_KUCpsMtQ7lZ9Fg&usqp=CAU" />
            <h3 className="text-xl font-bold text-purpledark w-full m-auto text-center mt-4">Derechos Humanos</h3>
            <p className="text-[gray] font-bold text-sm m-auto text-center my-8">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </p>
            <div className="w-full text-center">
              <button className="bg-purpledark text-white m-auto text-center px-4 py-1 duration-500 rounded-md hover:bg-purplelight hover:duration-500">Ver más</button>
            </div>
          </div>
        </div>
        <div class="sm:col-span-2/* Agregando un margen superior de 5px en pantallas pequeñas y 0px en
        pantallas grandes. */
         mt-5 lg:mt-0">
          <div class="sm:grid sm:grid-columns-2 grid-flow-col gap-10">
            <div className="box-shadow-category hover:duration-500 bg-white rounded-3xl duration-500 border-2 border-[#A7A6A6] cursor-pointer">
              <div className="px-8 py-8">
                <img className="w-24 m-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ZZ-3TcfpOo7KFWoZTWq_KUCpsMtQ7lZ9Fg&usqp=CAU" />
                <h3 className="text-xl font-bold text-purpledark w-full m-auto text-center mt-4">Derechos Humanos</h3>
                <p className="text-[gray] font-bold text-sm m-auto text-center my-4">
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
                <div className="w-full text-center">
                  <button className="bg-purpledark text-white m-auto text-center px-4 py-1 duration-500 rounded-md hover:bg-purplelight hover:duration-500">Ver más</button>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-3xl duration-500 box-shadow-category hover:duration-500 border-2 border-[#A7A6A6] cursor-pointer">
              <div className="px-8 py-8">
                <img className="w-24 m-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ZZ-3TcfpOo7KFWoZTWq_KUCpsMtQ7lZ9Fg&usqp=CAU" />
                <h3 className="text-xl font-bold text-purpledark w-full m-auto text-center mt-4">Derechos Humanos</h3>
                <p className="text-[gray] font-bold text-sm m-auto text-center my-4">
                  Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                </p>
                <div className="w-full text-center">
                  <button className="bg-purpledark text-white m-auto text-center px-4 py-1 duration-500 rounded-md hover:bg-purplelight hover:duration-500">Ver más</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row-span-1  mt-5 lg:mt-0 sm:row-span-2 flex items-center col-span-2 bg-white rounded-3xl duration-500 box-shadow-category  hover:duration-500   border-2 border-[#A7A6A6] cursor-pointer">
          <div className="px-8 py-8">
            <img className="w-24 m-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ZZ-3TcfpOo7KFWoZTWq_KUCpsMtQ7lZ9Fg&usqp=CAU" />
            <h3 className="text-xl font-bold text-purpledark w-full m-auto text-center mt-4">Derechos Humanos</h3>
            <p className="text-[gray] font-bold text-sm m-auto text-center my-4">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
            <div className="w-full text-center">
              <button className="bg-purpledark text-white m-auto text-center px-4 py-1 duration-500 rounded-md hover:bg-purplelight hover:duration-500">Ver más</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
