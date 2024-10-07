'use client';

import React from 'react';
import Image from 'next/image';

const MediaGrid = ({ mediaFiles, openLightbox }) => {
  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 lg:grid-cols-3">
      {mediaFiles.map((file, index) => (
        <div key={index} onClick={() => openLightbox(index)} className="cursor-pointer">
          {file.type === 'image' ? (
            <Image
              src={file.thumbnail}
              alt={`Media ${index + 1}`}
              width={500} 
              height={500} 
              className="w-full h-auto"
              loading="lazy"
            />
          ) : file.type === 'video' ? (
            <video
              src={file.src}
              alt={`Media ${index + 1}`}
              width={500}
              height={500}
              className="w-full h-auto"
              muted 
              autoPlay 
              playsInline 
              loop 
            />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default MediaGrid;
