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
          <h3 className="text-center font-bold text-purpledark text-2xl">¿Necesitas comunicarte con nosotros?</h3>
          <p className="text-center font-bold text-[#606060] w-3/5 m-auto text-center">Contáctanos a través de nuestros canales de servicio al cliente</p>
          <div className="container gap-8 columns-1 sm:columns-4 mt-10">
            <div>
              <HiOutlineMailOpen className="m-auto w-12 h-12 text-purpledark" />
              <h3 className="text-center font-bold text-purpledark text-xl pt-4">E-mail</h3>
              <p className="text-sm font-bold text-[#606060] w-4/5 m-auto text-center">Conoce nuestros correos para más información.</p>
            </div>
            <div>
              <FaRegCommentDots className="m-auto w-12 h-12 text-purpledark" /> <h3 className="text-center font-bold text-purpledark text-xl pt-4">Preguntanos</h3>
              <p className="text-sm font-bold text-[#606060] w-4/5 m-auto text-center">Conoce los medios de consulta que tenemos para ti.</p>
            </div>
            <div>
              <BsPhoneVibrate className="m-auto w-12 h-12 text-purpledark" /> <h3 className="text-center font-bold text-purpledark text-xl pt-4">Contáctanos</h3>
              <p className="text-sm font-bold text-[#606060] w-4/5 m-auto text-center">Conoce nuestras líneas de atención telefónica</p>
            </div>
            <div>
              <RiRoadMapLine className="m-auto w-12 h-12 text-purpledark" /> <h3 className="text-center font-bold text-purpledark text-xl pt-4">Oficinas</h3>
              <p className="text-sm font-bold text-[#606060] w-4/5 m-auto text-center">Ubica nuestros puntos de atención.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-purplelight py-4">
        <div className="container  grid grid-cols-2 gap-1 justify-evenly">
          <div className="float-right text-white text-sm">Derechos Reservados ASMUDEVICSAR</div>
          <div className="justify-start mt-0.5">
            <SocialLinksOnlyIcons />
          </div>
        </div>
      </div>
    </footer>
  );
}
