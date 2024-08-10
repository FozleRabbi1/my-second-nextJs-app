import Image from 'next/image';
import React from 'react';

const GalleryPage = () => {
    return (
        <div>
            <h2 className='text-center text-3xl'>Image oprimizations</h2>
            <h2 className='text-center text-2xl'>Regular Image Tag</h2>

            <img className='mx-auto' width={650} height={500} src="https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-little-girl-baby-girl-hd-wallpapers-indian-baby-image_2948600.jpg" alt="next image" />

            <h2 className='text-center text-2xl mt-4'>Next Component Image Tag</h2>
            <Image width={650} height={500} className='mx-auto' src='https://png.pngtree.com/thumb_back/fh260/background/20230617/pngtree-little-girl-baby-girl-hd-wallpapers-indian-baby-image_2948600.jpg' />


        </div>
    );
};

export default GalleryPage;