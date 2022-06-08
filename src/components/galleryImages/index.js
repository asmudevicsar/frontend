import React from 'react';
import ImageGallery from 'react-image-gallery';
import { API_URL } from 'utils/constants';

export default function GalleryImages({ imagesData }) {
  const images = [];
  imagesData?.map((item) => {
    images.push({ original: `${API_URL}${item.attributes.url}`, thumbnail: `${API_URL}${item.attributes.url}` });
  });
  return (
    <div>
      <ImageGallery items={images} />
    </div>
  );
}
