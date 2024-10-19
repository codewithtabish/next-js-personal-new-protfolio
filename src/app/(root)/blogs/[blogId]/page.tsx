/** @format */

import SimilarBlog from '@/components/custom/blog/SimilarBlog';
import Loader from '@/components/custom/Loading';
import BlurFade from '@/components/ui/blur-fade';
import { BlogInterface } from '@/types';
import { outfit } from '@/ui/fonts';
import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
type Props = {
  params: {
    blogId: string;
  };
};
const BLUR_FADE_DELAY = 0.04;

const fetchBlog = async (id: any) => {
  try {
    const blogResponse = await fetch(
      `https://www.codewithtabish.com/api/blog/blogId?blogId=${id}`,

      {
        cache: 'default',
        next: {
          revalidate: 60 * 60 * 12,
          tags: [`blog_${id}`],
        },
      }
      // `${process.env.NEXT_PUBLIC_API_URL}/api/blog/blogId/?blogId=${blogId}`
    );
    const allBlogResponse = await fetch(
      `https://www.codewithtabish.com/api/blog`,
      {
        cache: 'reload',
      }
      // `${process.env.NEXT_PUBLIC_API_URL}/api/blog/blogId/?blogId=${blogId}`
    );
    const data = await blogResponse.json();
    const allBlogData = await allBlogResponse.json();
    // console.log('THE DATA IS ', data);
    const { blog } = data;
    const { blogs } = allBlogData;
    const myAllBlogs: BlogInterface[] = blogs;
    const singleBlog: BlogInterface = blog;
    // console.log('THE SINGLE BLOG IS ', singleBlog);

    if (!data || !blog || !singleBlog || !myAllBlogs) {
      return <Loader />;
    }
    return { singleBlog, myAllBlogs };
  } catch (error) {
    console.log('The single blog error is ', error);
  }
};

export async function generateMetadata({
  params: { blogId },
}: Props): Promise<Metadata> {
  // @ts-ignore
  const { singleBlog } = await fetchBlog(blogId);

  // If the blog post is not found, return default metadata
  if (!singleBlog) {
    return {
      title: 'Blog not found - CodeWithTabish',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return {
    title: singleBlog.seo_title || `${singleBlog.title} - CodeWithTabish`, // Add site name for SEO
    description: singleBlog.seo_description || singleBlog.content.slice(0, 150), // Use SEO description or content snippet
    keywords: singleBlog.seo_keywords ? singleBlog.seo_keywords.split(',') : [], // Convert keywords string into array
    alternates: {
      canonical:
        singleBlog.canonical_url ||
        `https://www.codewithtabish.com/blog/${singleBlog.slug}`, // Correct way to set canonical URL
    },
    openGraph: {
      title: singleBlog.og_title || singleBlog.title,
      description:
        singleBlog.og_description || singleBlog.content.slice(0, 150),
      images: singleBlog.og_image ? [{ url: singleBlog.og_image }] : [],
      url: `https://www.codewithtabish.com/blog/${singleBlog.slug}`, // Open Graph URL with your domain
      type: singleBlog.og_type || 'article',
    },
    twitter: {
      card: singleBlog.twitter_card || 'summary_large_image',
      title: singleBlog.og_title || singleBlog.title,
      description:
        singleBlog.og_description || singleBlog.content.slice(0, 150),
      images: singleBlog.og_image ? [singleBlog.og_image] : [],
    },
  };
}

const SingleBlogPage = async ({ params }: Props) => {
  // let singleBlog = null;
  // let myAllBlogs = null;
  const { blogId } = params;
  // @ts-ignore
  const { myAllBlogs, singleBlog } = await fetchBlog(blogId);

  return (
    <main>
      <Head>
        <title>
          {singleBlog?.seo_title || `${singleBlog?.title} - CodeWithTabish`}
        </title>
        <meta
          name='description'
          content={
            singleBlog?.seo_description || singleBlog?.content.slice(0, 150)
          }
        />
        <meta
          name='keywords'
          content={singleBlog?.seo_keywords}
        />
        <link
          rel='canonical'
          href={
            singleBlog?.canonical_url ||
            `https://www.codewithtabish.com/blog/${singleBlog?.slug}`
          }
        />
        <meta
          property='og:title'
          content={singleBlog?.og_title || singleBlog?.title}
        />
        <meta
          property='og:description'
          content={
            singleBlog?.og_description || singleBlog?.content.slice(0, 150)
          }
        />
        <meta
          property='og:image'
          content={singleBlog?.og_image}
        />
        <meta
          property='og:url'
          content={`https://www.codewithtabish.com/blog/${singleBlog?.slug}`}
        />
        <meta
          property='og:type'
          content={singleBlog?.og_type || 'article'}
        />
        <meta
          name='twitter:card'
          content={singleBlog?.twitter_card || 'summary_large_image'}
        />
        <meta
          name='twitter:title'
          content={singleBlog?.og_title || singleBlog?.title}
        />
        <meta
          name='twitter:description'
          content={
            singleBlog?.og_description || singleBlog?.content.slice(0, 150)
          }
        />
        <meta
          name='twitter:image'
          content={singleBlog?.og_image}
        />
      </Head>
      <Image
        src={singleBlog?.banner_image}
        alt='Blog Banner'
        className='rounded-md mt-0 md:block hidden max-h-[300px] min-h-[300px] object-contain'
        width={1000}
        height={630}
        quality={100}
      />
      <div className='py-8 md:py-16'>
        <BlurFade delay={BLUR_FADE_DELAY * 7}>
          <h2 className='font-bold'>{singleBlog?.title}</h2>
          <div className='py-4 text-pretty leading-loose md:text-justify'>
            {singleBlog?.content
              ?.split('\n')
              .map((paragraph: string, index: number) => {
                // Regex to match topics like "1. **Topic Title**: Description"
                const topicMatch = paragraph.match(
                  /^(\d+\.) \*\*(.+?)\*\*: (.+)$/
                );

                if (topicMatch) {
                  const topicNumber = topicMatch[1]; // e.g., "1."
                  const topicTitle = topicMatch[2]; // e.g., "Key Benefits of DevOps"
                  const topicDescription = topicMatch[3]; // e.g., "DevOps enables faster delivery..."

                  return (
                    <div
                      key={index}
                      className='mb-4'
                    >
                      <h3 className='font-bold text-blue-600'>
                        {topicNumber} {topicTitle}
                      </h3>
                      <p className='mt-2 leading-snug'>{topicDescription}</p>{' '}
                      {/* Tighter line-height for descriptions */}
                    </div>
                  );
                }

                // Apply a different line-height or class for specific types of paragraphs
                const isSpecialParagraph =
                  paragraph.startsWith('In conclusion');
                const lineHeightClass = isSpecialParagraph
                  ? 'leading-relaxed'
                  : 'leading-loose';

                return (
                  <p
                    key={index}
                    className={`mb-4 ${lineHeightClass}`}
                  >
                    {paragraph}
                  </p>
                );
              })}
          </div>
        </BlurFade>
      </div>
      <SimilarBlog blogs={myAllBlogs} />
    </main>
  );
};

export default SingleBlogPage;
