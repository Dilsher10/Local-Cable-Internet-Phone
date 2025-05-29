'use client'
import React from 'react';
import './style.css';
import { useParams } from 'next/navigation';
import { useContextData } from '../../components/context/RootContext';

const page = () => {
  const { slug } = useParams();
  const contextData = useContextData();
  const blog = contextData.find(item => item.slug === slug);
  return (
    <>
      <div className='blogDetails'>
        <div>
          <img src="" alt="" />
          <h1 className="blog-title">{blog.title}</h1>
          <p>id: {blog.id}</p>
          <div className="blog-content">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam sapiente itaque reiciendis quod vero qui at iste. Reiciendis, quaerat! Perspiciatis.
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
