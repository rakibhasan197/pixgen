import React from 'react';
import PhotoCard from './PhotoCard';

const TopGenerations = async () => {
  const res = await fetch('https://pixgen-mu.vercel.app/data.json');
  const photos = await res.json();
  const topPhotos = photos.slice(0,8);
  console.log(topPhotos)
  return (
    <div>
      <h2 className='text-2xl font-bold my-5'>Top Generation Image</h2>
      <div className='grid grid-cols-4 gap-4'>
        {
          topPhotos.map(photo => <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
        }
      </div>
    </div>
  );
};

export default TopGenerations;