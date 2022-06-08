import React from 'react';
import Link from 'next/link';

export default function IdentidadCorporativaOrganizativa({ titleIdentidadOrganizativa, imageIdentidadOrganizativa, titleIdentidadCorporativa, imageIdentidadCorporativa }) {
  return (
    <div className="grid gri-cols-1 lg:grid-cols-2 mt-10 lg:mt-20">
      <div
        className="pt-16 bg-no-repeat img-identidades"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7)),url(${imageIdentidadCorporativa})`,
        }}
      >
        <div className="ml-10 sm:ml-28 mt-14 sm:mt-40">
          <h2 className="text-3xl sm:text-5xl w-0 text-white font-extrabold">{titleIdentidadCorporativa}</h2>
          <Link href="/quienes-somos/identidad-corporativa"><button className="mt-4 mb-8 bg-purpledark drop-shadow-lg h-12 px-6 rounded-3xl text-white text-base duration-500 hover:bg-purplelight hover:duration-500 ">Ver Más</button></Link>
        </div>
      </div>
      <div
        className="pt-16 bg-no-repeat img-identidades"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.7)),url(${imageIdentidadOrganizativa})`,
        }}
      >
        <div className="ml-10 sm:ml-28 mt-14 sm:mt-40">
          <h2 className="text-3xl sm:text-5xl w-0 text-white font-extrabold">{titleIdentidadOrganizativa}</h2>
          <Link href="/quienes-somos/identidad-organizativa"><button className="mt-4 mb-8 bg-purpledark drop-shadow-lg h-12 px-6 rounded-3xl text-white text-base duration-500 hover:bg-purplelight hover:duration-500 ">Ver Más</button></Link>
        </div>
      </div>
    </div>
  );
}
