import React from 'react';
import BannerInterno from '@components/generalComponents/BannerInterno';
import ProjectCategories from '@components/proyectComponents/ProjectsCategories';

export default function proyectos() {
  return (
    <>
      <BannerInterno
        title="Proyectos"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNiKhuv0pfwFxwLB2idvrmaubdad0Fp9KYQ&usqp=CAU"
        description="Quisque nisl metus, placerat nec velit non, elementum ornare quam. Curabitur egestas blandit tempus. Pellentesque condimentum arcu quis consequat convallis. Cras ornare felis in diam gravida, vel auctor ante efficitur."
      />
      <ProjectCategories />
    </>
  );
}
