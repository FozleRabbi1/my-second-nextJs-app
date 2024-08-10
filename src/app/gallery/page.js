/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';
import React from 'react';
import baby from '../../assets/newbaby.jpg'

const GalleryPage = () => {
    return (
        <div>
            <h2 className='text-center text-3xl'>Image oprimizations</h2>
            <h2 className='text-center text-2xl'>Regular Image Tag</h2>

            <img className='mx-auto'
             width={650} 
             height={500} 
            //  src={baby} ======>>> normal img tag এ dynamic image support করবে না
             src="https://onebighappyphoto.com/wp-content/uploads/Newborn-Photos-full-of-color-6517-One-Big-Happy-Photo.jpg" alt="next image" />

            <h2 className='text-center text-2xl mt-4'>Next Component Image Tag</h2>
            <Image
                width={650}
                height={500}
                // fill  =============>>> fill use করেলে hight width আর কাজ করবে না 
                className='mx-auto' src='https://onebighappyphoto.com/wp-content/uploads/Newborn-Photos-full-of-color-6517-One-Big-Happy-Photo.jpg' />

            <h2 className='text-center text-2xl mt-4'>Local Image Tag</h2>
            <Image
                width={650}
                height={500}
                // fill  =============>>> fill use করেলে hight width আর কাজ করবে না 
                className='mx-auto' src={baby} />


        </div>
    );
};

export default GalleryPage;