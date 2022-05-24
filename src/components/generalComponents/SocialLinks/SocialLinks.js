import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube, FaSnapchatGhost, FaPinterestP, FaCaretDown } from 'react-icons/fa';

export default function SocialLinks({ isResponsive }) {
  return (
    <div className={`flex justify-end ${isResponsive && 'remove-social-links'}`}>
      <div className=" flex bg-purpledark pt-5 pb-3 pr-6 px-6 text-white rounded-bl-2xl">
        <span>Síguenos</span>
        <Link href="home">
          <FaFacebookF className="ml-1.5 cursor-pointer duration-300 hover:text-purplelight  hover:duration-300" />
        </Link>
        <Link href="">
          <FaTwitter className="ml-1.5 cursor-pointer duration-300 hover:text-purplelight  hover:duration-300" />
        </Link>
        <Link href="">
          <FaInstagram className="ml-1.5 cursor-pointer duration-300 hover:text-purplelight  hover:duration-300" />
        </Link>
        <Link href="">
          <FaLinkedinIn className="ml-1.5 cursor-pointer duration-300 hover:text-purplelight  hover:duration-300" />
        </Link>
        <Link href="">
          <FaTiktok className="ml-1.5 cursor-pointer duration-300 hover:text-purplelight  hover:duration-300" />
        </Link>
        <Link href="">
          <FaYoutube className="ml-1.5 cursor-pointer duration-300 hover:text-purplelight  hover:duration-300" />
        </Link>
        <Link href="">
          <FaSnapchatGhost className="ml-1.5 cursor-pointer duration-300 hover:text-purplelight  hover:duration-300" />
        </Link>
        <Link href="">
          <FaPinterestP className="ml-1.5 cursor-pointer duration-300 hover:text-purplelight  hover:duration-300" />
        </Link>
      </div>
    </div>
  );
}
