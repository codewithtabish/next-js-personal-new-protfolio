/** @format */

import BlurFade from '@/components/ui/blur-fade';
import Marquee from '@/components/ui/marquee';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const reviews = [
  {
    name: 'Jack',
    username: '@jack',
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: 'https://avatar.vercel.sh/jack',
  },
  {
    name: 'Jill',
    username: '@jill',
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: 'https://avatar.vercel.sh/jill',
  },
  {
    name: 'John',
    username: '@john',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/john',
  },
  {
    name: 'Jane',
    username: '@jane',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jane',
  },
  {
    name: 'Jenny',
    username: '@jenny',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/jenny',
  },
  {
    name: 'James',
    username: '@james',
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: 'https://avatar.vercel.sh/james',
  },
];

const ReviewCard = ({
  imageURL,
  company,
  position,
  content,
  author,
}: //   img,
//   name,
//   username,
//   body,
{
  imageURL: string;
  company: string;
  position: string;
  content: string;
  author: string;
}) => {
  return (
    <figure
      className={cn(
        'relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4',
        // light styles
        'border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]',
        // dark styles
        'dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]'
      )}
    >
      <div className='flex flex-row items-center gap-2'>
        <Image
          className='rounded-full'
          width='32'
          height='32'
          alt=''
          src={imageURL}
        />
        <div className='flex flex-col'>
          <figcaption className='text-sm font-medium dark:text-white'>
            {author}
          </figcaption>
          <p className='text-xs font-medium dark:text-white/40'>{position}</p>
        </div>
      </div>
      <blockquote className='mt-2 text-[12px]'>{content}</blockquote>
    </figure>
  );
};

export default function FeedbackList({ feedbacks }: { feedbacks: any }) {
  const firstRow = feedbacks.slice(0, feedbacks.length / 2);
  const secondRow = feedbacks.slice(feedbacks.length / 2);
  const BLUR_FADE_DELAY = 0.04;

  return (
    <div className='relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden '>
      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <h2 className='text-xl font-bold my-4'>What Our Clients Say</h2>
      </BlurFade>
      <Marquee
        pauseOnHover
        className='[--duration:20s]'
      >
        {firstRow.map((review: any) => (
          <ReviewCard
            key={review.username}
            {...review}
          />
        ))}
      </Marquee>
      <Marquee
        reverse
        pauseOnHover
        className='[--duration:20s]'
      >
        {secondRow.map((review: any) => (
          <ReviewCard
            key={review.username}
            {...review}
          />
        ))}
      </Marquee>
      <div className='pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background'></div>
      <div className='pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background'></div>
    </div>
  );
}
