import React from 'react';
import BannerInterno from '@components/generalComponents/BannerInterno';
import Origen from '@components/quienesSomos/Origen';
import NuestraHistoria from '@components/quienesSomos/NuestraHistoria';
import MisionVision from '@components/quienesSomos/MisionVision';
import IdentidadCorporativaOrganizativa from '@components/quienesSomos/IdentidadCorporativaOrganizativa';

export default function QuienesSomos() {
  return (
    <div>
      <BannerInterno
        title="Quienes Sómos"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNiKhuv0pfwFxwLB2idvrmaubdad0Fp9KYQ&usqp=CAU"
        description="Quisque nisl metus, placerat nec velit non, elementum ornare quam. Curabitur egestas blandit tempus. Pellentesque condimentum arcu quis consequat convallis. Cras ornare felis in diam gravida, vel auctor ante efficitur."
      />
      <Origen />
      <NuestraHistoria />
      <MisionVision />
      <IdentidadCorporativaOrganizativa />
    </div>
  );
}
