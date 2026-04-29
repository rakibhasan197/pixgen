import PhotoCard from '@/components/PhotoCard';
import React from 'react';

const AllAppsPage = async () => {
  const res = await fetch('https://pixgen-mu.vercel.app/data.json');
  const photos = await res.json();
  console.log(photos)
  return (
    <div>
      <h2>All Photos Page</h2>
      <div className='grid grid-cols-4 gap-4'>
        {
          photos.map(photo=> <PhotoCard key={photo.id} photo={photo}></PhotoCard>)
        }
      </div>
    </div>
  );
};

export default AllAppsPage;