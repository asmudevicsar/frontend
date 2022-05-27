import React from 'react';
import SocialLinksOnlyIcons from '@components/generalComponents/SocialLinks/SocialLinksOnlyIcons';
import { HiOutlineMailOpen } from 'react-icons/hi';
import { FaRegCommentDots } from 'react-icons/fa';
import { BsPhoneVibrate } from 'react-icons/bs';
import { RiRoadMapLine } from 'react-icons/ri';

export default function Footer() {
  return (
    <footer class="block mx-auto bg-white rounded-lg  md:items-center md:justify-between dark:bg-gray-800">
      

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
