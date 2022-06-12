import React, { useState, useEffect } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';

import BannerInterno from '@components/generalComponents/BannerInterno';
import GalleryImages from '@components/galleryImages';
import 'react-responsive-modal/styles.css';
import Modal from 'react-modal';
import { getComunicadoPrensaByUrl } from 'api/centroDePrensaAPI';
import { useRouter } from 'next/router';
import { API_URL } from 'utils/constants';
import Seo from '@components/seo';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
  },
  content: {
    color: 'lightsteelblue',
  },
};
export default function GalleryComunicadosDetail() {
  const { query } = useRouter();
  const [modalIsOpen, setIsOpen] = useState(false);
  const [fotosData, setFotosData] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getComunicadoPrensaByUrl(query.fotos);
      setFotosData(response?.data);
    })();
  }, []);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
        <Seo title={`Galeria ${fotosData?.length && fotosData[0]?.attributes?.Nombre}`} description={`Galeria ${fotosData?.length && fotosData[0]?.attributes?.Nombre}`}/>

      <BannerInterno
        title={`Galeria ${fotosData?.length && fotosData[0]?.attributes?.Nombre}`}
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNiKhuv0pfwFxwLB2idvrmaubdad0Fp9KYQ&usqp=CAU"
        description="Quisque nisl metus, placerat nec velit non, elementum ornare quam. Curabitur egestas blandit tempus. Pellentesque condimentum arcu quis consequat convallis. Cras ornare felis in diam gravida, vel auctor ante efficitur."
      />
      {fotosData?.length > 0 && (
        <img
          className="w-full h-96 cursor-pointer darken-image duration-500 hover:duration-500"
          onClick={openModal}
          src={`${API_URL}${fotosData[0]?.attributes?.Galeria_de_imagenes?.data[0]?.attributes.url}`}
        />
      )}
      {fotosData?.length > 0 ? (
        <div className={`grid grid-cols-2 sm:grid-cols-4`}>
          {fotosData[0]?.attributes?.Galeria_de_imagenes?.data.map(
            (item, index) =>
              index != 0 && (
                <div key={index}>
                  <img className="w-full h-44 cursor-pointer darken-image duration-500 hover:duration-500" onClick={openModal} src={`${API_URL}${item.attributes.url}`} />
                </div>
              )
          )}
        </div>
      ) : (
        <p className="text-center text-purpledark py-4">No existen imagenes de galería</p>
      )}

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        {fotosData?.length> 0 && <GalleryImages imagesData={fotosData[0]?.attributes?.Galeria_de_imagenes?.data} />}
      </Modal>
    </>
  );
}
