import React, { useState } from 'react';
import 'react-image-gallery/styles/css/image-gallery.css';
import BannerInterno from '@components/generalComponents/BannerInterno';
import GalleryImages from '@components/galleryImages';
import 'react-responsive-modal/styles.css';
import Modal from 'react-modal';
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
export default function Gallery() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <>
      <BannerInterno
        title="Galeria"
        img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNiKhuv0pfwFxwLB2idvrmaubdad0Fp9KYQ&usqp=CAU"
        description="Quisque nisl metus, placerat nec velit non, elementum ornare quam. Curabitur egestas blandit tempus. Pellentesque condimentum arcu quis consequat convallis. Cras ornare felis in diam gravida, vel auctor ante efficitur."
      />
      <img
        className="w-full h-96 cursor-pointer darken-image duration-500 hover:duration-500"
        onClick={openModal}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNiKhuv0pfwFxwLB2idvrmaubdad0Fp9KYQ&usqp=CAU"
      />
      <div className=" grid grid-cols-2 sm:grid-cols-4">
        <div>
          <img
            className="w-full h-44 cursor-pointer darken-image duration-500 hover:duration-500"
            onClick={openModal}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNiKhuv0pfwFxwLB2idvrmaubdad0Fp9KYQ&usqp=CAU"
          />
        </div>
        <div>
          <img
            className="w-full h-44 cursor-pointer darken-image duration-500 hover:duration-500"
            onClick={openModal}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNiKhuv0pfwFxwLB2idvrmaubdad0Fp9KYQ&usqp=CAU"
          />
        </div>
        <div>
          <img
            className="w-full h-44 cursor-pointer darken-image duration-500 hover:duration-500"
            onClick={openModal}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNiKhuv0pfwFxwLB2idvrmaubdad0Fp9KYQ&usqp=CAU"
          />
        </div>
        <div>
          <img
            className="w-full h-44 cursor-pointer darken-image duration-500 hover:duration-500"
            onClick={openModal}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQNiKhuv0pfwFxwLB2idvrmaubdad0Fp9KYQ&usqp=CAU"
          />
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
        <GalleryImages />
      </Modal>
    </>
  );
}
