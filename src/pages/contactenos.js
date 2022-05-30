import React from 'react';

export default function Contactenos() {
  return (
    <div
      style={{ backgroundImage: 'url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNiKhuv0pfwFxwLB2idvrmaubdad0Fp9KYQ&usqp=CAU)' }}
      className={'contactenos relative mt-8 lg:mt-24 banner-interno active-anim image-banner h-52'}
    >
      <div className="content-image">
        <div className="container block sm:grid grid-cols-1 lg:grid-cols-3 gap-4 center-data">
          <div className="col-span-2 w-full m-auto">
            <div className="grid justify-center">
              <h3 className="font-normal text-4xl sm:text-5xl">Contactanos</h3>
              <p className="font-bold text-lg mt-5">Tipo de mensaje</p>
              <div className="bg-purpledark rounded-md px-3 py-0 mt-2 w-auto sm:w-96">
                <p className="text-white text-base py-2 cursor-pointer duration-500 hover:bg-purplelight hover:duration-500">Preguntas Frecuentes</p>
                <hr className="text-white" />
                <p className="text-white text-base py-2 cursor-pointer duration-500 hover:bg-purplelight hover:duration-500">Felicitaciones</p>
                <hr className="text-white" />

                <p className="text-white text-base py-2 cursor-pointer duration-500 hover:bg-purplelight hover:duration-500">Quejas y reclamos</p>
              </div>
            </div>
          </div>

          <div className="bg-white px-8 py-4 col-span-1 mt-5 sm:mt-0">
            <img className=" logoresponsive top-1 m-auto w-24 h-20 sm:w-28 sm:h-20" src="http://localhost:3000/images/logo.png" alt="logoimage" />
            <p className="w-3/4 py-4 text-center !text-gray m-auto text-sm">Dejanos tus dudas, nos pondremos en contacto</p>
            <form>
              <div className="columns-1">
                <div>
                  <label>
                    <span class="block text-sm font-bold text-gray font-bold">Nombre</span>
                    <input
                      type="text"
                      class="mt-1 block w-full px-3 py-2 bg-[#F6F6F6] border border-[#E8E8E8] rounded text-sm text-gray placeholder-gray
                      focus:outline-none focus:border-gray focus:ring-gray"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <span class="block text-sm font-bold text-gray font-bold">Email</span>
                    <input
                      type="text"
                      class="mt-1 block w-full px-3 py-2 bg-[#F6F6F6] border border-[#E8E8E8] rounded text-sm text-gray placeholder-gray
                      focus:outline-none focus:border-gray focus:ring-gray"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <span class="block text-sm font-bold text-gray font-bold">Celular</span>
                    <input
                      type="text"
                      class="mt-1 block w-full px-3 py-2 bg-[#F6F6F6] border border-[#E8E8E8] rounded text-sm text-gray placeholder-gray
                      focus:outline-none focus:border-gray focus:ring-gray"
                    />
                  </label>
                </div>
              </div>
              <div className="mt-3">
                <label>
                  <span class="block text-sm font-bold text-gray font-bold">Mensaje</span>

                  <textarea
                    class="mt-1 block w-full px-3 py-2 bg-[#F6F6F6] border border-[#E8E8E8] rounded text-sm text-gray placeholder-gray
                      focus:outline-none focus:border-gray focus:ring-gray"
                  ></textarea>
                </label>
              </div>
              <div className="w-full text-center mt-6">
                <button className="rounded-3xl bg-purpledark duration-500 text-white px-8 py-2 hover:bg-purplelight hover:duration-500">Enviar</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
