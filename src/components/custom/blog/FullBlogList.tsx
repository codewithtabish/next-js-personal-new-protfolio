/** @format */

import BlurFade from '@/components/ui/blur-fade';
import { BlogInterface } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
const BLUR_FADE_DELAY = 0.04;

const FullBlogList = ({ blogs }: { blogs: any }) => {
  return (
    <div>
      <div className='flex flex-col gap-4 md:py-16 md:pb-24'>
        {blogs?.map((item: BlogInterface, index: number) => {
          return (
            <Link
              href={'/blogs/' + item?.id}
              key={index}
              className='md:grid grid-cols-12  border rounded-md shadow-sm items-center flex flex-col gap-3 p-1'
            >
              <div className='md:col-span-5'>
                <Image
                  src={item?.banner_image}
                  alt={item?.title}
                  width={700}
                  height={200}
                  className='object-cover  max-h-[160px] min-h-[160px] rounded-md'
                />
              </div>
              <div className='md:col-span-7 p-3 gap-4'>
                <BlurFade delay={BLUR_FADE_DELAY * 7}>
                  <h2 className=' font-bold'>{item?.title}</h2>
                </BlurFade>
                <p className='line-clamp-2 text-gray-600 text-[14px]'>
                  {item?.content}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FullBlogList;
