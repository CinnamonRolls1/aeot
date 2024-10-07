'use client';

import { Dialog } from '@headlessui/react';
import React from 'react';

const Lightbox = ({ isOpen, onRequestClose, mediaFile }) => {
  return (
    <Dialog open={isOpen} onClose={onRequestClose} className="relative z-50">
      {/* Overlay */}
      <div className="fixed inset-0 bg-black/70" aria-hidden="true" />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto max-w-full">
          <button
            onClick={onRequestClose}
            className="absolute top-4 right-4 text-white text-2xl"
          >
            &times;
          </button>
          {mediaFile.type === 'video' ? (
            <video 
              className="max-h-screen" 
              autoPlay 
              muted 
              playsInline 
              loop 
              controls={false} 
            >
              <source src={mediaFile.src} type="video/mp4" />
            </video>
          ) : (
            <img src={mediaFile.src} alt="Enlarged Media" className="max-h-screen" />
          )}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Lightbox;
