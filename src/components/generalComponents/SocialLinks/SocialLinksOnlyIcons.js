import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedinIn, FaTiktok, FaYoutube, FaSnapchatGhost, FaPinterestP, FaCaretDown } from 'react-icons/fa';

export default function SocialLinksOnlyIcons({ isResponsive }) {
  return (
    <>
    <div className="float-right social-links">
      <div className="flex  sm:flex bg-purplelight  text-white ">
        <Link href="home">
          <div className="flex ml-2 my-1 sm:my-0 cursor-pointer duration-300 hover:text-purpledark  hover:duration-300">
            <FaFacebook className="m-auto mr-1 ml-1.5" />
            <span className='text-xs m-auto font-semibold social-links-responsive'>Facebook</span>
          </div>
        </Link>
        <Link href="">
        <div className="flex ml-2 my-1 sm:my-0 cursor-pointer duration-300 hover:text-purpledark  hover:duration-300">
            <FaTwitter className="m-auto mr-1 ml-1.5" />
            <span className='text-xs m-auto font-semibold social-links-responsive'>Twitter</span>
          </div>
        </Link>
        <Link href="">
        <div className="flex ml-2 cursor-pointer duration-300 hover:text-purpledark  hover:duration-300">
            <FaInstagram className="m-auto mr-1 ml-1.5" />
            <span className='text-xs m-auto font-semibold social-links-responsive'>Instagram</span>
          </div>
        </Link>
        <Link href="">
        <div className="flex ml-2 my-1 sm:my-0 cursor-pointer duration-300 hover:text-purpledark  hover:duration-300">
            <FaLinkedinIn className="m-auto mr-1 ml-1.5" />
            <span className='text-xs m-auto font-semibold social-links-responsive'>Linkedin</span>
          </div>
        </Link>
        <Link href="">
        <div className="flex ml-2 my-1 sm:my-0 cursor-pointer duration-300 hover:text-purpledark  hover:duration-300">
            <FaTiktok className="m-auto mr-1 ml-1.5" />
            <span className='text-xs m-auto font-semibold social-links-responsive'>TikTok</span>
          </div>
        </Link>
        <Link href="">
        <div className="flex ml-2 my-1 sm:my-0 cursor-pointer duration-300 hover:text-purpledark  hover:duration-300">
            <FaYoutube className="m-auto mr-1 ml-1.5" />
            <span className='text-xs m-auto font-semibold social-links-responsive'>YouTube</span>
          </div>
        </Link>
        <Link href="">
        <div className="flex ml-2 my-1 sm:my-0 cursor-pointer duration-300 hover:text-purpledark  hover:duration-300">
            <FaSnapchatGhost className="m-auto mr-1 ml-1.5" />
            <span className='text-xs m-auto font-semibold social-links-responsive'>SnapChat</span>
          </div>
        </Link>
        <Link href="">
        <div className="flex ml-2 my-1 sm:my-0 cursor-pointer duration-300 hover:text-purpledark  hover:duration-300">
            <FaPinterestP className="m-auto mr-1 ml-1.5" />
            <span className='text-xs m-auto font-semibold social-links-responsive'>Pinterest</span>
          </div>
        </Link>
      </div>
    </div>
   
    </>
  );
}
