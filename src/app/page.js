'use client';

import React, { useState, useEffect } from 'react';
import MediaGrid from '../components/MediaGrid';
import Lightbox from '../components/Lightbox';

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
    <div className="min-h-screen bg-white px-8 sm:px-20 pt-12 sm:pt-20">
      <div className="flex flex-col items-center mb-10">
        {/* Container for image and number */}
        <div className="relative inline-block w-auto bg-white ">
          {/* Main handwritten image */}
          <img
            src="/media/other/lines.png"
            alt="Handwritten heading"
            className="block max-w-full h-auto"
          />
          {/* Overlayed dynamic number */}
          <span
            className="
              absolute
              font-handwriting
              text-slate-950
              text-opacity-80
              text-[clamp(1rem,4vw,6rem)] // Increased font size
            "
            style={{
              top: '26%', 
              left: '6%', 
              transform: 'translate(-50%, -50%)', 
            }}
          >
            {yearsSince2017}
          </span>
        </div>
      </div>

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
