import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube, FaSnapchatGhost, FaPinterestP, FaCaretDown } from 'react-icons/fa';

export default function SocialLinksOnlyIcons({ isResponsive }) {
  return (
    <div className="float-right">
      <div className=" flex bg-purplelight  text-white ">
        <Link href="home">
          <FaFacebookF className="ml-1.5 cursor-pointer duration-300 hover:text-purpledark  hover:duration-300" />
        </Link>
        <Link href="">
          <FaTwitter className="ml-1.5 cursor-pointer duration-300 hover:text-purpledark  hover:duration-300" />
        </Link>
        <Link href="">
          <FaInstagram className="ml-1.5 cursor-pointer duration-300 hover:text-purpledark  hover:duration-300" />
        </Link>
        <Link href="">
          <FaLinkedinIn className="ml-1.5 cursor-pointer duration-300 hover:text-purpledark  hover:duration-300" />
        </Link>
        <Link href="">
          <FaTiktok className="ml-1.5 cursor-pointer duration-300 hover:text-purpledark  hover:duration-300" />
        </Link>
        <Link href="">
          <FaYoutube className="ml-1.5 cursor-pointer duration-300 hover:text-purpledark  hover:duration-300" />
        </Link>
        <Link href="">
          <FaSnapchatGhost className="ml-1.5 cursor-pointer duration-300 hover:text-purpledark  hover:duration-300" />
        </Link>
        <Link href="">
          <FaPinterestP className="ml-1.5 cursor-pointer duration-300 hover:text-purpledark  hover:duration-300" />
        </Link>
      </div>
    </div>
  );
}
