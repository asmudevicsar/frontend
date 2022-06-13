import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getSocialLinks } from 'api/socialLinksAPI';
import { API_URL } from 'utils/constants';

export default function SocialLinksOnlyIcons() {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await getSocialLinks();
      setData(response);
    })();
  }, []);
  return (
    <>
      <div className="float-right social-links">
        <div className="flex  sm:flex bg-purplelight  text-white ">
          {data?.map((item,index) => (
            <a href={item?.attributes?.Enlace} target="_BLANK" key={index}>
              <div className="flex ml-2 my-1 sm:my-0 cursor-pointer duration-300 hover:text-purpledark  hover:duration-300">
                <img src={`${API_URL}${item?.attributes?.Logo?.data?.attributes.url}`} alt={item?.attributes?.Nombre} className=" w-5 h-5 m-auto mr-1 ml-1.5" />
                <span className="text-xs m-auto font-semibold social-links-responsive">{item?.attributes?.Nombre}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
