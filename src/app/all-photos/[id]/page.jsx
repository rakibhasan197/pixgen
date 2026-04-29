import { Chip } from '@heroui/react';
import { p } from 'framer-motion/client';
import Image from 'next/image';
import React from 'react';

const PhotoDetailsPage = async ({params}) => {
  const {id} = await params;
    const res = await fetch('https://pixgen-mu.vercel.app/data.json');
    const photos = await res.json();  
  const photo = photos.find(p=> p.id == id);
  console.log(photo, 'photos');
  return (
    <div className='container mx-auto shadow-md p-4 mt-4'>
      <h2 className='text-center font-bold text-3xl my-6'>{photo.title}</h2>
    <div className='relative  h-[500px] w-[500px] mx-auto aspect-square'>
          <Image src={photo.imageUrl} fill className='rounded-md object-cover' alt={photo.title}/>
          <Chip className='size-sm absolute right-2 top-2'>{photo.category}</Chip>
          </div>
          <p className='text-center mt-3 font-medium'>{photo.prompt}</p>
    </div>
  );
};

export default PhotoDetailsPage;