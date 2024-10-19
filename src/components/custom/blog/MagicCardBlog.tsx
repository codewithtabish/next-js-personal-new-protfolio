/** @format */

import * as React from 'react';
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
import Image from 'next/image';
import Link from 'next/link';

export default function SingleSimilarBlog({ blog }: { blog: BlogInterface }) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <CarouselItem className='basis-1/3 p-0 mx-3'>
      <div className='p'>
        <Card>
          <Link
            // legacyBehavior
            href={'/blogs/' + blog?.id}
            className='block'
          >
            <CardContent className='flex flex-col gap-3 p-0'>
              <Image
                src={blog?.banner_image}
                alt={blog?.title}
                width={400}
                height={200}
                className='w-full object-cover min-h-[90px] max-h-[90px]'
              />
              <div className='pt-1 px-2'>
                <h4 className='text-sm dark:text-gray-600 line-clamp-2 px-2'>
                  {blog.title}
                </h4>
              </div>
              {/* <span className='text-4xl font-semibold'>{index + 1}</span> */}
            </CardContent>
          </Link>
        </Card>
      </div>
    </CarouselItem>
  );
}
