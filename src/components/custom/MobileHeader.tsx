/** @format */
'use client';
import {
  BriefcaseBusiness,
  CircleUser,
  Github,
  Heart,
  Linkedin,
  Menu,
  Package2,
  Search,
  Twitter,
} from 'lucide-react';
import Link from 'next/link';
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ModeToggle } from './ModeToggle';
import { Separator } from '../ui/separator';

const MobileHeader = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Handle closing the sheet on link click
  const handleLinkClick = () => {
    setIsSheetOpen(false);
  };

  return (
    <div>
      <header className='sticky top-0 flex md:hidden h-16 items-center gap-4 border-b bg-background px-4 md:px-6'>
        <Sheet
          open={isSheetOpen}
          onOpenChange={setIsSheetOpen}
        >
          <SheetTrigger asChild>
            <Button
              variant='outline'
              size='icon'
              className='shrink-0 md:hidden'
            >
              <Menu className='h-5 w-5' />
              <span className='sr-only'>Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side='left'>
            <nav className='grid gap-6 text-lg font-medium'>
              <Link
                href='#'
                className='flex items-center gap-2 text-lg font-semibold'
                onClick={handleLinkClick}
              >
                <Package2 className='h-6 w-6' />
                <span className='sr-only'>Acme Inc</span>
              </Link>
              <Link
                href='/'
                className='text-muted-foreground hover:text-foreground'
                onClick={handleLinkClick}
              >
                Home
              </Link>
              <Link
                href='/blogs'
                className='text-muted-foreground hover:text-foreground'
                onClick={handleLinkClick}
              >
                Blogs
              </Link>
              <Link
                href='/projects'
                className='text-muted-foreground hover:text-foreground'
                onClick={handleLinkClick}
              >
                Projects
              </Link>
              <hr />

              <h4 className='text-[13px]'>Social links</h4>
              <div className='flex flex-col gap-4 '>
                <Link
                  href='https://github.com/codewithtabish'
                  target='_blank'
                  className='text-muted-foreground hover:text-foreground flex flex-row gap-2 items-center'
                  onClick={handleLinkClick}
                >
                  <Github className='w-4 h-4' />
                  <span className='text-[13px]'>GitHub</span>
                </Link>
                <Link
                  href='https://www.linkedin.com/in/talha26/'
                  target='_blank'
                  className='text-muted-foreground hover:text-foreground flex flex-row gap-2 items-center'
                  onClick={handleLinkClick}
                >
                  <Linkedin className='w-4 h-4' />
                  <span className='text-[13px]'>LinkedIn</span>
                </Link>
                <Link
                  href='/projects'
                  className='text-muted-foreground hover:text-foreground flex flex-row gap-2 items-center'
                  onClick={handleLinkClick}
                >
                  <Twitter className='w-4 h-4' />
                  <span className='text-[13px]'>Twitter</span>
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>

        <div className='flex w-full flex-row md:hidden justify-end items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
          <ModeToggle />
        </div>
      </header>
    </div>
  );
};

export default MobileHeader;
