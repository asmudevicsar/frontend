import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { getSocialLinks } from 'api/socialLinksAPI';
import { API_URL } from 'utils/constants';

export default function SocialLinks({ isResponsive }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    (async () => {
      const response = await getSocialLinks();
      setData(response);
    })();
  }, []);
  return (
    <div className={`flex justify-end ${isResponsive && 'remove-social-links'}`}>
      <div className=" flex bg-purpledark pt-5 pb-3 pr-6 px-6 text-white rounded-bl-2xl">
        <span>Síguenos</span>
        {data?.map((item) => (
          <a href={item.attributes.Enlace} target="_BLANK">
            <img src={`${API_URL}${item.attributes.Logo.data.attributes.url}`} className="w-5 h-5 ml-1.5 cursor-pointer duration-300 hover:text-purplelight  hover:duration-300" />
          </a>
        ))}
      </div>
    </div>
  );
}
