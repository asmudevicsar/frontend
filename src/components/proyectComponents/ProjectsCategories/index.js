import React from 'react';

export default function ProjectCategories() {
  return (
    <div className="container">
      <div class="grid grid-rows-3 grid-flow-col gap-4">
        <div class="row-span-3 flex items-center rounded-3xl duration-500 hover:drop-shadow-2xl hover:duration-500 border border-[#E6E6E6] cursor-pointer">
          <div>
            <img className="w-24 m-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ZZ-3TcfpOo7KFWoZTWq_KUCpsMtQ7lZ9Fg&usqp=CAU" />
            <h3 className="text-xl font-bold text-purpledark w-full m-auto text-center">Derechos Humanos</h3>
            <p className="text-[gray] font-bold text-sm m-auto text-center">
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </p>
          </div>
        </div>
        <div class="col-span-2">
          <div class="grid grid-columns-2 grid-flow-col gap-4">
            <div className="bg-white rounded-3xl duration-500 hover:drop-shadow-2xl hover:duration-500 border border-[#E6E6E6] cursor-pointer">
              <img className="w-24 m-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ZZ-3TcfpOo7KFWoZTWq_KUCpsMtQ7lZ9Fg&usqp=CAU" />
              <h3 className="text-xl font-bold text-purpledark w-1/5 m-auto text-center">Derechos Humanos</h3>
              <p className="text-[gray] font-bold text-sm m-auto">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              </p>
            </div>
            <div className="bg-white rounded-3xl duration-500 hover:drop-shadow-2xl hover:duration-500 border border-[#E6E6E6] cursor-pointer">
              <img className="w-24 m-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ZZ-3TcfpOo7KFWoZTWq_KUCpsMtQ7lZ9Fg&usqp=CAU" />
              <h3 className="text-xl font-bold text-purpledark w-1/5 m-auto text-center">Derechos Humanos</h3>
              <p className="text-[gray] font-bold text-sm m-auto">
                Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
              </p>
            </div>
          </div>
        </div>
        <div class="row-span-2 col-span-2 bg-white rounded-3xl duration-500 hover:drop-shadow-2xl hover:duration-500 border border-[#E6E6E6] cursor-pointer">
          <img className="w-24 m-auto" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ZZ-3TcfpOo7KFWoZTWq_KUCpsMtQ7lZ9Fg&usqp=CAU" />
          <h3 className="text-xl font-bold text-purpledark w-1/5 m-auto text-center">Derechos Humanos</h3>
          <p className="text-[gray] font-bold text-sm m-auto">
            Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
          </p>
        </div>
      </div>
    </div>
  );
}
