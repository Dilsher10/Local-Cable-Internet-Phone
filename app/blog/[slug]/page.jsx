import React from 'react';
import './style.css';
import Link from 'next/link';

const page = async ({ params }) => {

  return (
    <>
      <div className='blogDetails'>
        <div>
          <img src="" alt="" />
          <h1 className="blog-title">Title</h1>
          <div className="blog-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sapiente itaque reiciendis quod vero qui at iste. Reiciendis, quaerat! Perspiciatis.
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
