'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const photos = [
  { src: '/assets/images/photo-1.jpg', category: 'hananingen' },
  { src: '/assets/images/photo-2.jpg', category: 'hananingen' },
  { src: '/assets/images/photo-3.jpg', category: 'hananingen' },
  { src: '/assets/images/photo-4.jpg', category: 'hananingen' },
  { src: '/assets/images/photo-5.jpg', category: 'hananingen' },
  { src: '/assets/images/photo-6.jpg', category: 'hananingen' },
  { src: '/assets/images/photo-7.jpg', category: 'hananingen' },
  { src: '/assets/images/photo-8.jpg', category: 'hananingen' },
  { src: '/assets/images/photo-9.jpg', category: 'hananingen' },
  { src: '/assets/images/photo-10.jpg', category: 'hananingen' },
  { src: '/assets/images/photo-11.jpg', category: 'hananingen' },
  { src: '/assets/images/photo-12.jpg', category: 'hananingen' },
  { src: '/assets/images/photo-13.jpg', category: 'hananingen' },
  { src: '/assets/images/photo-14.jpg', category: 'hananingen' },
  { src: '/assets/images/photo-15.jpg', category: 'hananingen' },
  { src: '/assets/images/photo-16.jpg', category: 'photoshoot' },
  { src: '/assets/images/photo-17.jpg', category: 'photoshoot' },
  { src: '/assets/images/photo-18.jpg', category: 'photoshoot' },
  { src: '/assets/images/photo-19.jpg', category: 'photoshoot' },
  { src: '/assets/images/photo-20.jpg', category: 'photoshoot' },
  { src: '/assets/images/photo-21.jpg', category: 'photoshoot' },
  { src: '/assets/images/art-1.png', category: 'art' },
  { src: '/assets/images/art-2.png', category: 'art' },
  { src: '/assets/images/art-3.png', category: 'art' },
  { src: '/assets/images/art-4.png', category: 'art' },
  { src: '/assets/images/art-5.png', category: 'art' },
  { src: '/assets/images/art-6.jpg', category: 'art' },
  { src: '/assets/images/art-7.jpg', category: 'art' },
  { src: '/assets/images/art-8.jpg', category: 'art' },
  { src: '/assets/images/art-9.jpg', category: 'art' },
  { src: '/assets/images/art-10.jpg', category: 'art' },
  { src: '/assets/images/art-11.jpg', category: 'art' },
];

export default function PhotoGrid() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [filter, setFilter] = useState('all');

  const filteredPhotos =
    filter === 'all'
      ? photos
      : photos.filter((photo) => photo.category === filter);

  return (
    <div className='min-h-screen bg-gradient-to-b from-zinc-900 to-zinc-950 text-white p-6'>
      {/* Header Buttons */}
      <header className='flex justify-center space-x-4 py-4 uppercase mb-6'>
        {['all', 'hananingen', 'photoshoot', 'art'].map((type) => (
          <button
            key={type}
            className={`px-6 py-2 rounded transition-colors duration-300 ${
              filter === type
                ? 'bg-amber-500 scale-105'
                : 'bg-amber-700 hover:bg-gray-600'
            }`}
            onClick={() => setFilter(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </header>

      {/* Image Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 mt-4'>
        {filteredPhotos.map((photo, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0.9 }}
            whileHover={{ scale: 1, transition: { duration: 0.5 } }}
            className='relative overflow-hidden shadow-lg cursor-pointer group'
            onClick={() => setSelectedImage(photo.src)}
          >
            {/* Image */}
            <Image
              src={photo.src}
              alt={`Photo ${index + 1}`}
              width={500}
              height={300}
              className='w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700 hover:border-8 hover:border-zinc-800 hover:z-50'
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className='relative max-w-3xl w-full p-4'
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {selectedImage && (
                <Image
                  src={selectedImage}
                  alt='Enlarged Photo'
                  width={800}
                  height={600}
                  className='w-full h-auto rounded-lg shadow-xl border-8 border-zinc-800'
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
