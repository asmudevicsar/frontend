import React from 'react';
import SocialLinksOnlyIcons from '@components/generalComponents/SocialLinks/SocialLinksOnlyIcons';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaRegCommentDots } from 'react-icons/fa';
import { BsPhoneVibrate } from 'react-icons/bs';
import { RiRoadMapLine } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer class="block mx-auto bg-white rounded-lg  md:items-center md:justify-between dark:bg-gray-800">
      <div class="container grid-container grid grid-cols-5 pt-2 pb-14">
        <div class="item1 col-span-5 sm:col-span-1 m-auto">
          <img className="" src="http://localhost:3000/images/logoblanco.png" alt="logoimage" />
        </div>
        <div class="item2 col-span-5 sm:col-span-4 mt-8">
          <h3 className="text-center font-bold text-purpledark text-2xl w-3/4 m-auto">Contactanos para recibir información acerca de nuestros proyectos o ayuda en general</h3>
          <div className="container mt-10">
            <form>
              <div className="columns-1 sm:columns-3">
                <div>
                  <label>
                    <span class="block text-sm font-bold text-purpledark font-bold">Nombre</span>
                    <input
                      type="text"
                      class="mt-1 block w-full px-3 py-2 bg-white border border-purpledark rounded text-sm text-purpledark placeholder-purpledark
                      focus:outline-none focus:border-purpledark focus:ring-purpledark"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <span class="block text-sm font-bold text-purpledark font-bold">Email</span>
                    <input
                      type="text"
                      class="mt-1 block w-full px-3 py-2 bg-white border border-purpledark rounded text-sm text-purpledark placeholder-purpledark
                      focus:outline-none focus:border-purpledark focus:ring-purpledark"
                    />
                  </label>
                </div>
                <div>
                  <label>
                    <span class="block text-sm font-bold text-purpledark font-bold">Celular</span>
                    <input
                      type="text"
                      class="mt-1 block w-full px-3 py-2 bg-white border border-purpledark rounded text-sm text-purpledark placeholder-purpledark
                      focus:outline-none focus:border-purpledark focus:ring-purpledark"
                    />
                  </label>
                </div>
              </div>
              <div className="mt-3">
                <label>
                  <span class="block text-sm font-medium text-purpledark font-bold">Mensaje</span>
                  <textarea
                    class="mt-1 block w-full px-3 py-2 bg-white border border-purpledark rounded text-sm text-purpledark placeholder-purpledark
                      focus:outline-none focus:border-purpledark focus:ring-purpledark"
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

      <div className="bg-purplelight py-4">
        <div className="container  grid grid-cols-1 sm:grid-cols-2 gap-1 justify-evenly">
          <div className="float-right text-white text-sm mt-auto text-center sm:text-left">Derechos Reservados ASMUDEVICSAR</div>
          <div className="justify-start mt-0.5 m-auto sm:m-0">
            <SocialLinksOnlyIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}
