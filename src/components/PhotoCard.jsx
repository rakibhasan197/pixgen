import { Button, Card, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaDownload, FaHeart } from 'react-icons/fa';

const PhotoCard = ({photo}) => {
  console.log(photo, 'photo')
  return (
    <Card className='border rounded-xl'>
    <div className='relative w-full aspect-square'>
      <Image src={photo.imageUrl} fill className='rounded-md object-cover' alt={photo.title}/>
      <Chip className='size-sm absolute right-2 top-2'>{photo.category}</Chip>
      </div>
      <h1 className='font-medium'>{photo.title}</h1>


     <div className='flex items-center gap-4'>
       <div className='flex items-center gap-2'>
        <p><FaHeart/></p>
        <p>{photo.likes}</p>
      </div>
      <Separator orientation='vertical'></Separator>
      <div className='flex items-center gap-2'>
        <p><FaDownload/></p>
        <p>{photo.downloads}</p>
      </div>
     </div>
    <Link href={`/all-photos/${photo.id}`}><Button variant='outline' className={'w-full'}>View</Button></Link>
    </Card>
  );
};

export default PhotoCard;