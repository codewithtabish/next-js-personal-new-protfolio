/** @format */
'use client';
import { MagicCard } from '@/components/ui/magic-card';
import React from 'react';
import Autoplay from 'embla-carousel-autoplay';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { BlogInterface } from '@/types';
import SingleSimilarBlog from './MagicCardBlog';
import BlurFade from '@/components/ui/blur-fade';
import Link from 'next/link';
const BLUR_FADE_DELAY = 0.04;

const SimilarBlog = ({ blogs }: { blogs: any }) => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  return (
    <div className='md:pb-28 hidden md:block'>
      <BlurFade
        delay={BLUR_FADE_DELAY * 7}
        className='py-5'
      >
        <h2 className=' font-bold'>Similar Blogs</h2>
      </BlurFade>
      <Carousel
        plugins={[plugin.current]}
        className='w-full basis-3'
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <div className=''>
          <CarouselContent className='basis-1/3'>
            {blogs?.map((blog: BlogInterface, index: number) => (
              <SingleSimilarBlog blog={blog} />
            ))}
          </CarouselContent>
        </div>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default SimilarBlog;
