'use client';

import React, { useState, useEffect } from 'react';
import MediaGrid from '../components/MediaGrid';
import Lightbox from '../components/Lightbox';
import { Description, Field } from '@headlessui/react';

const HomePage = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [mediaFiles, setMediaFiles] = useState([]);

  const currentYear = new Date().getFullYear();
  const yearsSince2017 = currentYear - 2017;

  useEffect(() => {
    const mediaCount = 33; 
    const videoIndices = [7, 10, 11, 12, 16, 18, 19, 21, 22, 23, 24, 25, 29, 30];
    const files = Array.from({ length: mediaCount }, (_, i) => {
      const index = mediaCount - i;
      const isVideo = videoIndices.includes(index);
      return {
        src: isVideo ? `/media/full/${index}.mp4` : `/media/full/${index}.png`,
        thumbnail: `/media/thumbs/${index}.png`,
        type: isVideo ? 'video' : 'image',
      };
    });
    setMediaFiles(files);
  }, []);

  const openLightbox = (index) => {
    setCurrentMediaIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  return (
    <div className="min-h-screen bg-white px-40 pt-20">
      <h3 className="text-7xl font-bold font-sans text-center text-gray-800 mb-8">An Ending Of Things</h3>
      <Field>
        <Description className="text-lg text-center text-black/60 mb-1">
          {yearsSince2017} years ago, we lived out the 'last summer' of our lives. I was there with a camera.
        </Description>
      </Field>
      <MediaGrid mediaFiles={mediaFiles} openLightbox={openLightbox} />
      {lightboxOpen && (
        <Lightbox
          isOpen={lightboxOpen}
          onRequestClose={closeLightbox}
          mediaFile={mediaFiles[currentMediaIndex]}
        />
      )}
    </div>
  );
};

export default HomePage;
