/** @format */

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { Github, Globe } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Markdown from 'react-markdown';

interface Props {
  title: string;
  href?: string;
  githubRepoLink?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  projectID?: string;
  type?: string;
  projectURL: string;
  image?: string;
  video?: string;
  isPublic?: boolean;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  projectID,
  projectURL,
  isPublic,
  image,
  video,
  type,
  links,
  githubRepoLink,
  className,
}: Props) {
  return (
    <Card
      className={
        'flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full'
      }
    >
      <Link
        href={`/projects/${projectID}`}
        className={cn('block cursor-pointer', className)}
      >
        {/* {video !== 'not-found' && (
          <video
            src={
              'https://res.cloudinary.com/dnrt7rxxb/video/upload/v1728736207/TWO_fhagnp.mp4'
            }
            autoPlay
            loop
            muted
            playsInline
            className='pointer-events-none mx-auto h-40 w-full object-cover object-top' // needed because random black line at bottom of video
          />
        )} */}
        {image && (
          <Image
            src={image}
            alt={title}
            width={500}
            height={300}
            className='min-h-48 min-w-full max-w-full max-h-48 overflow-hidden object-cover '
          />
        )}
      </Link>
      <CardHeader className='px-2'>
        <div className='space-y-1'>
          <CardTitle className='mt-1 text-base'>{title}</CardTitle>
          <time className='font-sans text-xs'>{dates}</time>
          <div className='hidden font-sans text-xs underline print:visible'>
            {link?.replace('https://', '').replace('www.', '').replace('/', '')}
          </div>
          <Markdown className='prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert'>
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className='mt-auto flex flex-col px-2'>
        {tags && tags.length > 0 && (
          <div className='mt-2 flex flex-wrap gap-1'>
            {tags?.map((tag) => (
              <Badge
                className='px-1 py-0 text-[10px]'
                variant='secondary'
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className='px-2 pb-2'>
        <div className='flex flex-row items-center'>
          <div className='flex-1'>
            {type === 'web' ? (
              <Link
                //   href={href}
                href={projectURL}
                // key={idx}
                target='_blank'
                className=' flex gap-2 items-centerpx-3 '
              >
                <Badge
                  className='flex gap-2 items-center'
                  variant={'outline'}
                >
                  <Globe className='w-4 h-4' />
                  <span className='text-[10px]'>Website</span>
                </Badge>
              </Link>
            ) : null}
          </div>
          <div className='flex-1'>
            {isPublic ? (
              <Link
                //   href={href}
                href={githubRepoLink as string}
                // key={idx}
                target='_blank'
                className=' flex gap-2 items-centerpx-3 '
              >
                <Badge
                  className='flex  gap-2 items-center'
                  variant={'outline'}
                >
                  <Github className='w-4 h-4' />
                  <span className='text-[10px]'>github</span>
                </Badge>
              </Link>
            ) : null}
          </div>
        </div>

        {/* {links && links.length > 0 && (
          <div className='flex flex-row flex-wrap items-start gap-1'>
            {links?.map((link, idx) => (
              <Link
                href={link?.href}
                key={idx}
                target='_blank'
                className='px-3 block'
              >
                <Badge
                  variant={'outline'}
                  key={idx}
                  className='flex gap-2 px-2 py-1 text-[10px] '
                >
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )} */}
      </CardFooter>
    </Card>
  );
}
